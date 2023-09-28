import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

//routes
import kycRoutes from "./routes/verifykyc.routes.js";
import userRoutes from "./routes/user.routes.js";

dotenv.config();
const app = express();
const PORT = 8000;

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected to mongodb server");
  } catch (err) {
    console.log(err);
  }
};

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

//routes
app.use("/api/kyc", kycRoutes);
app.use("/api/user", userRoutes);

app.listen(PORT, () => {
  connect();
  console.log(`server started on port ${PORT}`);
});
