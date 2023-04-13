import express from "express";
import { makeSample, reserve } from "../controllers/couponController";
import { search } from "../controllers/couponController";

const router = express.Router();

router.post("/coupon", reserve);
router.get("/coupon", search);
router.post("/coupon-samples", makeSample);

export default router;
