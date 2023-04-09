import express from "express";
import { reserve } from "../controllers/couponController";

const router = express.Router();

router.post("/reserve", reserve);

export default router;
