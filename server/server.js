import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import notesRouter from "./routes/notesRoutes.js"; // we'll create this
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// serve uploaded files statically at /uploads
const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// mount notes routes
app.use("/api/notes", notesRouter);
// mount auth routes
app.use("/api/auth", authRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.log("❌ MongoDB Connection Error:", err));

app.listen(process.env.PORT || 5000, () =>
  console.log(`🚀 Server running on port ${process.env.PORT || 5000}`)
);



