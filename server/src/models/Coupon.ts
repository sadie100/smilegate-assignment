import { Schema, model, Document } from "mongoose";

interface ICoupon extends Document {
  name: string;
  phone: string;
  couponId: string;
}

const CouponSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    phone: {
      type: String,
      required: true,
      get: (data: string) =>
        data
          .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
          .replace(/(\-{1,2})$/g, ""),
      set: (data: string) => data.replaceAll("-", ""),
    },
    couponId: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default model<ICoupon>("Coupon", CouponSchema);
