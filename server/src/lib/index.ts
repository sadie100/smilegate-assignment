import { createHash } from "crypto";

export const generateCouponId = (name: string, phone: string) => {
  const baseData = `${name}${phone}`;
  const hash = createHash("sha256").update(baseData).digest("hex");
  const couponId = parseInt(hash.slice(0, 12), 16)
    .toString()
    .padStart(12, "0")
    .slice(0, 12);
  return couponId;
};

export const generateUniqueNumbers = (length: number, numbers: string[]) => {
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

export const getPadNumber = (num: Number) =>
  num.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });

export const getFormattedDate = (date: Date) => {
  return `${date.getFullYear()}-${getPadNumber(
    date.getMonth() + 1
  )}-${getPadNumber(date.getDate())} ${getPadNumber(
    date.getHours()
  )}:${getPadNumber(date.getMinutes())}`;
};
