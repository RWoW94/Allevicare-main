const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");
const authRoutes = require("../routes/regRoute");
const User = require("../Server/user");
const HealthForm = require("../Server/healthform");
const HealthInfo = require("../Server/healthinfo");
const ReportedRisk = require("../Server/reportedrisk");
const newUsername = require("../Script/settingFunctions");


require("dotenv").config();

const app = express();
const port = 3000;

// Middleware
app.use(express.json()); // Built-in body parsing for JSON
app.use(express.static(path.join(__dirname, "../Html"))); // Serve HTML files
app.use("/Styles", express.static(path.join(__dirname, "../Styles")));
app.use("/img", express.static(path.join(__dirname, "../img")));
app.use("/Script", express.static(path.join(__dirname, "../Script")));
app.use("/routes", express.static(path.join(__dirname, "../routes")));


// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Connection Error:", err));


//-------------- user ---------------

// POST
app.post("/users", async (req, res) => {
  const { username, password, firstname, lastname, age, socialnumber, address, zipcode, phone } = req.body;

  try {
    const userExists = await User.findOne({ username });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = new User({ username, password, firstname, lastname, age, socialnumber, address, zipcode, phone });
    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// GET all
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    console.log("Users found:", users); 
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// GET one
app.get("/users/:username", async (req, res) => {
  const { username } = req.params;
  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const healthForms = await HealthForm.find({ socialnumber: user.socialnumber });
    const healthInfo = await HealthInfo.find({ socialnumber: user.socialnumber });
    const reportedRisk = await ReportedRisk.find({ socialnumber: user.socialnumber });
    
    res.json({ 
      firstname: user.firstname,
      lastname: user.lastname,
      socialnumber: user.socialnumber,
      password: user.password,
      age: user.age,
      phone: user.phone,
      address: user.address,
      zipcode: user.zipcode,
      healthForms, 
      healthInfo,
      reportedRisk 
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// DELETE
app.delete("/users/:username", async (req, res) => {
  const { username } = req.params;

  try {
    const user = await User.findOneAndDelete({ username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// PUT
app.put("/users/:username", async (req, res) => {
  const { username } = req.params;
  const { password, name, age, number, address } = req.body; 

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (req.body.username) user.username = req.body.username;
    if (password) user.password = password;
    if (name) user.name = name;
    if (age) user.age = age;
    if (number) user.number = number;
    if (address) user.address = address;

    await user.save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

//-------------- Autentication ---------------

// POST
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    if (user.password !== password) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    const token = "generated-jwt-token"; 
    res.json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

//-------------- health form ---------------

// GET 
app.get("/healthform", async (req, res) => {
  try {
    const healthForms = await HealthForm.find();
    res.status(200).json(healthForms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST
app.post("/healthform", async (req, res) => {
  try {
    const { socialnumber, healthTitle, healthInfo, level } = req.body;

    const userExists = await User.findOne({ socialnumber });
    if (!userExists) {
      return res.status(400).json({ message: "User not found" });
    }

    if (level < 0 || level > 5) {
      return res.status(400).json({ message: "Level must be between 0 and 5" });
    }

    const newHealthForm = new HealthForm({socialnumber, healthTitle, healthInfo, level });
    const savedHealthForm = await newHealthForm.save();
    res.status(201).json(savedHealthForm);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE
app.delete("/healthform/:_id", async (req, res) => {
  const { _id } = req.params;

  try {
    const healthform = await HealthForm.findOneAndDelete({ _id });
    if (!healthform) {
      return res.status(404).json({ message: "Health form not found" });
    }

    res.json({ message: "Health form deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// PUT
app.put("/healthform/:_id", async (req, res) => {
  const { _id} = req.params;
  const { healthInfo, level  } = req.body; 

  try {
    const healthform = await HealthForm.findById(_id);

    if (!healthform) {
      return res.status(404).json({ message: "Health info not found" });
    }

    if (healthInfo) healthform.healthInfo = healthInfo;
    if (level) healthform.level = level;

    await healthform.save();
    res.json(healthform);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

//-------------- health info ---------------

// GET 
app.get("/healthinfo", async (req, res) => {
  try {
    const healthInfo = await HealthInfo.find();
    res.status(200).json(healthInfo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST 
app.post("/healthinfo", async (req, res) => {
  try {
    const { socialnumber, description, illness, medication } = req.body;

    const userExists = await User.findOne({ socialnumber });
    if (!userExists) {
      return res.status(400).json({ message: "User not found" });
    }

    const newHealthInfo = new HealthInfo({ socialnumber, description, illness, medication });
    const savedHealthInfo = await newHealthInfo.save();
    res.status(201).json(savedHealthInfo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// PUT
app.put("/healthinfo/:_id", async (req, res) => {
  const { _id} = req.params;
  const { illness, description, medication  } = req.body; 

  try {
    const healthInfo = await HealthInfo.findById(_id);

    if (!healthInfo) {
      return res.status(404).json({ message: "Health info not found" });
    }

    if (illness) healthInfo.illness = illness;
    if (description) healthInfo.description = description;
    if (medication) healthInfo.medication = medication;

    await healthInfo.save();
    res.json(healthInfo);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// DELETE
app.delete("/healthinfo/:_id", async (req, res) => {
  const { _id } = req.params;

  try {
    const healthinfo = await HealthInfo.findOneAndDelete({ _id });;
    if (!healthinfo) {
      return res.status(404).json({ message: "Health info not found" });
    }

    res.json({ message: "Health info deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

//-------------- reported risks ---------------

// GET 
app.get("/reportedrisk", async (req, res) => {
  try {
    const reportedRisk = await ReportedRisk.find();
    res.status(200).json(reportedRisk);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST 
app.post("/reportedrisk", async (req, res) => {
  try {
    const { socialnumber, name, description, level } = req.body;

    const userExists = await User.findOne({ socialnumber });
    if (!userExists) {
      return res.status(400).json({ message: "User not found" });
    }

    const newReportedRisk = new ReportedRisk({ socialnumber, name, description, level });
    const savedReportedRisk = await newReportedRisk.save();
    res.status(201).json(savedReportedRisk);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// PUT
app.put("/reportedrisk/:_id", async (req, res) => {
  const { _id } = req.params;
  const { name, description, level} = req.body; 

  try {
    const reportedrisk = await ReportedRisk.findById(_id);

    if (!reportedrisk) {
      return res.status(404).json({ message: "Reported risk not found" });
    }

    if (name) reportedrisk.name = name;
    if (description) reportedrisk.description = description;
    if (level) reportedrisk.level = level;

    await reportedrisk.save();
    res.json(reportedrisk);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// DELETE
app.delete("/reportedrisk/:_id", async (req, res) => {
  const { _id } = req.params;

  try {
    const reportedrisk = await ReportedRisk.findOneAndDelete({ _id });;
    if (!reportedrisk) {
      return res.status(404).json({ message: "Reported risk not found" });
    }

    res.json({ message: "Reported risk deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});




// Routes
app.use("/api/auth", authRoutes); 

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "../Html/Login-page.html"));
});

app.get("/:username", (req, res) => { //Home
  res.sendFile(path.join(__dirname, "../Html/home.html"));
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

