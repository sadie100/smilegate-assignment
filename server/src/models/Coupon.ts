import { Schema, model, Document } from "mongoose";

interface ICoupon extends Document {
  name: string;
  phone: string;
  couponId: string;
}

const CouponSchema: Schema = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  couponId: { type: String, required: true },
});

export default model<ICoupon>("Coupon", CouponSchema);
