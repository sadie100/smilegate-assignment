import { Request, Response } from "express";
import Coupon from "../models/Coupon";
import { createHash } from "crypto";

const generateCouponId = (name: string, phone: string) => {
  const dateStr = Date.now().toString();
  const baseData = `${dateStr}${name}${phone}`;
  const hash = createHash("sha256").update(baseData).digest("hex");
  const couponId = parseInt(hash.slice(0, 12), 16).toString().padStart(12, "0");
};
export const reserve = async (req: Request, res: Response) => {
  //logic
  try {
    const { name, phone } = req.body;
    const newPhone = phone.replace("-", "");
    const existingCoupon = await Coupon.findOne({ phone: newPhone }).exec();
    if (!!existingCoupon) {
      //이미 발급된 쿠폰 있음
      return res.status(409).send({
        message: "이미 발급된 쿠폰이 있습니다.",
        couponId: existingCoupon.couponId,
      });
    }
    //임의의 쿠폰 id

    await Coupon.create({
      name,
      phone,
    });
    console.log(existingCoupon);
    res.send(200);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
