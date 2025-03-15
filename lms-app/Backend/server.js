const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();

// Connect to MongoDB
connectDB();

const app = express();

// ✅ Enable CORS for frontend requests
app.use(cors({
    origin: "http://localhost:3000", // Allow frontend to access backend
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
}));

// Middleware
app.use(express.json());

// Import Routes
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
