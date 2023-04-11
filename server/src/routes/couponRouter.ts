import express from "express";
import { makeSample, reserve } from "../controllers/couponController";
import { search } from "../controllers/couponController";

const router = express.Router();

router.post("/reserve", reserve);
router.get("/search", search);
router.post("/sample", makeSample);

export default router;
