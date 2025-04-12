import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {})
  .then(() => console.log("DB connection successful. 🫡"))
  .catch((err) => console.log(err));

const app = express();

app.use(express.json());

app.use(cookieParser());

app.listen(3000, () => {
  console.log("🚀 server running on 3000");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

// middleware to handle possible errors
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
