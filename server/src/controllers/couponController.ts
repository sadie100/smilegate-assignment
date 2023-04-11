import { Request, Response } from "express";
import Coupon from "../models/Coupon";
import { generateCouponId, generateUniqueNumbers } from "../lib";

const pageOption = {
  limit: 10,
  collation: {
    locale: "ko",
  },
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
          `이미 발급된 쿠폰이 있습니다.\n발급된 쿠폰 : ${existingCoupon.couponId}`
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

    const regex = new RegExp(search as string, "i");
    const coupons = await Coupon.paginate(
      !!search
        ? category === "*"
          ? {
              $or: [{ name: { $regex: regex } }, { phone: { $regex: regex } }],
            }
          : { [category as string]: { $regex: regex } }
        : {},
      {
        ...pageOption,
        sort: { createdAt: -1 },
        page: Number(currentPage),
      }
    );

    res.status(200).send(coupons);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

export const makeSample = async (req: Request, res: Response) => {
  //logic
  try {
    const phoneNums: string[] = [];
    const couponNums: string[] = [];
    const nextNum = (await Coupon.count()) + 1;
    for (let i = nextNum; i < nextNum + 50; i++) {
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
