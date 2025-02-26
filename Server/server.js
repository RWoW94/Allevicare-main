const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");
const authRoutes = require("../routes/regRoute");
const User = require("../Server/user");
const HealthForm = require("../Server/HealthForm");
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
  const { username, password, name, age, number, address } = req.body;

  try {
    const userExists = await User.findOne({ username });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = new User({ username, password, name, age, number, address });
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

    const healthForms = await HealthForm.find({ username }).select("-username");
    const healthInfo = await HealthInfo.find({ username }).select("-username");
    const reportedRisk = await ReportedRisk.find({ username }).select("-username");
    
    res.json({ 
      name: user.name,
      password: user.password,
      age: user.age,
      number: user.number,
      address: user.address,
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
  const { newUsername, password, name, age, number, address } = req.body; 

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (newUsername) {
      const existingUser = await User.findOne({ username: newUsername });
      if (existingUser) {
        return res.status(400).json({ message: "Username already exist. Username must be unique" });
      }
      user.username = newUsername;
    }

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
    const { username, healthId, healthInfo, level } = req.body;

    const userExists = await User.findOne({ username });
    if (!userExists) {
      return res.status(400).json({ message: "User not found" });
    }

    if (level < 1 || level > 5) {
      return res.status(400).json({ message: "Level must be between 1 and 5" });
    }

    const newHealthForm = new HealthForm({username, healthId, healthInfo, level });
    const savedHealthForm = await newHealthForm.save();
    res.status(201).json(savedHealthForm);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE
app.delete("/healthform/:healthId", async (req, res) => {
  const { healthId } = req.params;

  try {
    const healthform = await HealthForm.findOneAndDelete({ healthId });
    if (!healthform) {
      return res.status(404).json({ message: "Health form not found" });
    }

    res.json({ message: "Health form deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// PUT
app.put("/healthform/:username", async (req, res) => {
  const { username } = req.params;
  const { healthInfo, level  } = req.body; 

  try {
    const healthForm = await HealthForm.findOne({ username, healthId });

    if (!healthForm) {
      return res.status(404).json({ message: "Health form not found for this user" });
    }

    if (healthInfo) healthForm.healthInfo = healthInfo;
    if (level) healthForm.level = level;

    await healthForm.save();
    res.json(healthForm);
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
    const { username, infoId, description, illness, medication } = req.body;

    const userExists = await User.findOne({ username });
    if (!userExists) {
      return res.status(400).json({ message: "User not found" });
    }

    const newHealthInfo = new HealthInfo({ username, infoId, description, illness, medication });
    const savedHealthInfo = await newHealthInfo.save();
    res.status(201).json(savedHealthInfo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// PUT
app.put("/healthinfo/:username", async (req, res) => {
  const { username } = req.params;
  const { infoId, illness, description, medication  } = req.body; 

  try {
    const healthInfo = await HealthInfo.findOne({ username, infoId });

    if (!healthInfo) {
      return res.status(404).json({ message: "Health info not found for this user" });
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
app.delete("/healthinfo/:infoId", async (req, res) => {
  const { infoId } = req.params;

  try {
    const healthinfo = await HealthInfo.findOneAndDelete({ infoId });;
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
    const { username, riskId, name, description, level } = req.body;

    const userExists = await User.findOne({ username });
    if (!userExists) {
      return res.status(400).json({ message: "User not found" });
    }

    const newReportedRisk = new ReportedRisk({ username, riskId, name, description, level });
    const savedReportedRisk = await newReportedRisk.save();
    res.status(201).json(savedReportedRisk);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// PUT
app.put("/reportedrisk/:username", async (req, res) => {
  const { username } = req.params;
  const { riskId, name, description, level  } = req.body; 

  try {
    const reportedRisk = await ReportedRisk.findOne({ username, riskId });

    if (!reportedRisk) {
      return res.status(404).json({ message: "Reported risk not found for this user" });
    }

    if (name) reportedRisk.name = name;
    if (description) reportedRisk.description = description;
    if (level) reportedRisk.level = level;

    await reportedRisk.save();
    res.json(reportedRisk);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// DELETE
app.delete("/reportedrisk/:riskId", async (req, res) => {
  const { riskId } = req.params;

  try {
    const reportedrisk = await ReportedRisk.findOneAndDelete({ riskId });;
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

