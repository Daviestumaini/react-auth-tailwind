import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import v1Router from "./routes/v1/index.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5500;
const allowedOrigins = [
  process.env.FRONTEND_URL,
  "http://localhost:5173",
  "http://127.0.0.1:5173",
].filter(Boolean);

app.use(cors({ origin: allowedOrigins, credentials: true }));
app.use(express.json());

app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production" ? process.env.FRONTEND_URL : "*",
  }),
);
app.use("/api/v1", v1Router);
app.get("/health", (_req, res) => res.json({ success: true, message: "Server is healthy" }));

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/auth-tailwind", {
      serverSelectionTimeoutMS: 10000,
    });
    console.log("MongoDB connected");

    app.listen(PORT, "127.0.0.1", () => {
      console.log(`Server listening on http://127.0.0.1:${PORT}`);
    });
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    app.listen(PORT, "127.0.0.1", () => {
      console.log(`Server listening on http://127.0.0.1:${PORT} (MongoDB unavailable)`);
    });
  }
};

startServer();