import express from "express";
import { connectDb } from "./config/db.js";
import cors from "cors";
import cookieParser from "cookie-parser";

import userRoute from "./routes/userRoute.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(userRoute);

connectDb();

app.listen(3000, () => {
  console.log("app is listening on 3000");
});
