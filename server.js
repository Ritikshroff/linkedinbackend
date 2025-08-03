// const authRoutes = require("./routes/authRoutes");
// const postRoutes = require("./routes/postRoutes");
// const userRoutes = require("./routes/userRoutes");
// const express = require("express");
// const app = express();
// // ✨ This is the middleware you're missing
// app.use(express.json()); // Parses incoming JSON requests
// app.use(express.urlencoded({ extended: true })); // For form submissions
// const cors = require("cors");
// const mongoose = require("mongoose");
// app.use("/api/auth", authRoutes);
// app.use("/api/posts", postRoutes);
// app.use("/api/users", userRoutes);

// const dotenv = require("dotenv");
// dotenv.config({
//   override: true,
// });
// const port = 3000;

// app.use(cors({ origin: "http://localhost:5173" })); // Allow requests from your frontend
// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.listen(port, () => {
//   mongoose.connect(process.env.MONGO_URI).then(() => {
//     console.log("✅ Connected to MongoDB");
//     console.log(`🚀 Server running on http://localhost:${port}`);
//   });
// });

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");
const userRoutes = require("./routes/userRoutes");

dotenv.config({ override: true });

const app = express();
const port = 3000;

// ✅ Middleware (must come before routes)
app.use(
  cors({
    origin:
      "https://linkedinbackend-zxet.onrender.com/" ||
      "https://linedin-assingment.vercel.app/", // Allow requests from your frontend
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
    credentials: true, // Optional: If you're using cookies or sessions
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Routes
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// ✅ Start Server
app.listen(process.env.PORT || port, () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("✅ Connected to MongoDB");
      console.log(`🚀 Server running on http://localhost:${port}`);
    })
    .catch((err) => {
      console.error("❌ MongoDB connection error:", err);
    });
});
