import { Request, Response } from "express";
import Coupon from "../models/Coupon";
import { createHash } from "crypto";

const pageOption = {
  limit: 10,
  collation: {
    locale: "ko",
  },
};

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

const generateUniqueNumbers = (length: number, numbers: string[]) => {
  let number;
  while (true) {
    number = Math.floor(Math.random() * Math.pow(10, length))
      .toString()
      .padStart(length, "0");
    if (!numbers.includes(number)) {
      break;
    }
  }
  return number;
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

export const search = async (req: Request, res: Response) => {
  //logic
  try {
    const { search, category, currentPage } = req.query;

    const coupons = await Coupon.paginate(
      !!search ? { [category as string]: search } : {},
      { page: Number(currentPage), ...pageOption }
    );
    // const coupons = await Coupon.aggregate([
    //   {
    //     $match: searching,
    //   },
    //   {
    //     $project: {
    //       name: 1,
    //       phone: 1,
    //       couponId: 1,
    //       createdAt: {
    //         $dateToString: {
    //           format: "%Y/%m/%d %H:%M",
    //           date: "$createdAt",
    //         },
    //       },
    //     },
    //   },
    // ]);

    res.status(200).send(coupons);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

export const makeSample = async (req: Request, res: Response) => {
  //logic
  try {
    console.log("들어옴");
    const phoneNums: string[] = [];
    const couponNums: string[] = [];

    for (let i = 0; i < 1000; i++) {
      const newPhone = `010${generateUniqueNumbers(8, phoneNums)}`;
      const newCoupon = generateUniqueNumbers(12, couponNums);
      await Coupon.create({
        name: `홍길동_${i}`,
        phone: newPhone,
        couponId: newCoupon,
        createdAt: new Date(),
      });
      phoneNums.push(newPhone);
      couponNums.push(newCoupon);
    }
    res.status(200).end();
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
