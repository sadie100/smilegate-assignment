import express from "express";
import { reserve } from "../controllers/couponController";
import { search } from "../controllers/couponController";

const router = express.Router();

router.post("/reserve", reserve);
router.get("/search", search);

export default router;
