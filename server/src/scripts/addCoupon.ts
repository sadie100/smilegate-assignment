import mongoose from "mongoose";
import Coupon from "../models/Coupon";

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

//db connect
const db = "mongodb://127.0.0.1:27017";
mongoose
  .connect(db)
  .then(() => {
    console.log("DB 연결 완료");
  })
  .catch((err) => console.log(err));

const phoneNums: string[] = [];
const couponNums: string[] = [];
(async () => {
  try {
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
  } catch (err) {
    console.log(err);
  }
})();
