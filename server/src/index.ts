import express, { Express, Request, Response } from "express";
import couponRouter from "./routes/couponRouter";
import cors from "cors";
import { json } from "body-parser";

const port = "8000";

const app: Express = express();
app.use(cors());
app.use(json());

app.use("/api", couponRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
