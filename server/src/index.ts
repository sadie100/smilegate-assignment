import express, { Express } from "express";
import couponRouter from "./routes/couponRouter";
import cors from "cors";
import { json } from "body-parser";
import mongoose from "mongoose";

const port = "8000";

const app: Express = express();
app.use(cors());
app.use(json());

//db connect
const db = "mongodb://127.0.0.1:27017";
mongoose
  .connect(db)
  .then(() => {
    console.log("DB 연결 완료");
  })
  .catch((err) => console.log(err));

app.use("/api", couponRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
