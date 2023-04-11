import { Schema, model, Document, PaginateModel } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
import { getFormattedDate } from "../lib";

interface ICoupon extends Document {
  name: string;
  phone: string;
  couponId: string;
  createdAt: Date;
  updatedAt: Date;
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
    couponId: {
      type: String,
      required: true,
      get: (data: string) =>
        data.replace(/^(\d{0,4})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3"),
    },
  },
  {
    timestamps: true,
  }
);

CouponSchema.virtual("createdAtFormat").get(function () {
  return getFormattedDate(this.createdAt);
});

CouponSchema.plugin(mongoosePaginate);
CouponSchema.set("toJSON", { getters: true });
CouponSchema.set("toObject", { getters: true });
export default model<ICoupon, PaginateModel<ICoupon>>("Coupon", CouponSchema);
