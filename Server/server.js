const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");
const authRoutes = require("../routes/regRoute");
const User = require("../Server/user");

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

// **POST** - Skapa en ny användare
app.post("/users", async (req, res) => {
  const { username, password, name, age, number, address } = req.body;

  try {
    // Kolla om användaren redan finns
    const userExists = await User.findOne({ username });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Skapa och spara ny användare
    const newUser = new User({ username, password, name, age, number, address });
    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// **GET** - Hämta alla användare
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    console.log("Users found:", users); // Loggar de hämtade användarna
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Server error" });
  }
});


// **GET** - Hämta en användare baserat på användarnamn
app.get("/users/:username", async (req, res) => {
  const { username } = req.params;
  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Skicka tillbaka profiluppgifter
    const { name, age, number, address } = user;
    res.json({ name, age, number, address });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// **DELETE** - Ta bort en användare baserat på användarnamn
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

// **PUT** - Uppdatera en användare baserat på användarnamn
app.put("/users/:username", async (req, res) => {
  const { username } = req.params;
  const { password, name, age, number, address } = req.body; // Se till att alla fält inkluderas

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Uppdatera endast de fält som skickas i requesten
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


// Exempel på POST route för login i backend
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Här bör du implementera autentisering (t.ex. bcrypt + jwt)
    const user = await User.findOne({ username });
    
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // Kontrollera lösenordet (använd bcrypt jämförelse här)
    if (user.password !== password) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    // Om inloggning lyckas, skapa ett JWT (kan läggas till senare)
    const token = "generated-jwt-token"; // Byt ut med riktig JWT-logik
    res.json({ message: "Login successful", token });
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

