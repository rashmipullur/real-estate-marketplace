import express from "express";
import mongoose from "mongoose";

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {})
  .then(() => console.log("DB connection successful. 🫡"))
  .catch((err) => console.log(err));

const app = express();

app.listen(3000, () => {
  console.log("🚀 server running on 3000");
});
