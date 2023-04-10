import { Request, Response } from "express";
import Coupon from "../models/Coupon";
import { createHash } from "crypto";

const generateCouponId = (name: string, phone: string) => {
  // const dateStr = Date.now().toString();
  const baseData = `${name}${phone}`;
  const hash = createHash("sha256").update(baseData).digest("hex");
  const couponId = parseInt(hash.slice(0, 12), 16)
    .toString()
    .padStart(12, "0")
    .slice(0, 12);
  return couponId;
};

export const reserve = async (req: Request, res: Response) => {
  //logic
  try {
    const { name, phone } = req.body;
    const existingCoupon = await Coupon.findOne({ phone: phone }).exec();
    if (!!existingCoupon) {
      //이미 발급된 쿠폰 있음
      return res
        .status(409)
        .send(
          `이미 발급된 쿠폰이 있습니다. 발급된 쿠폰 : ${existingCoupon.couponId}`
        );
    }

    //임의의 쿠폰 id
    let newCouponId;

    while (true) {
      newCouponId = generateCouponId(name, phone);

      //쿠폰 id 중복 검사 추가
      const duplicateCoupon = await Coupon.find({
        couponId: newCouponId,
      }).exec();
      if (duplicateCoupon.length === 0) {
        break;
      }
    }

    const newCoupon = await Coupon.create({
      name,
      phone,
      couponId: newCouponId,
    });
    res.status(200).send(newCoupon);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
