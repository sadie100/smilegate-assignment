import { Schema, model, Document, PaginateModel } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

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

const getFormattedNum = (num: Number) =>
  num.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });

CouponSchema.virtual("createdAtFormatted").get(function () {
  return `${this.createdAt.getFullYear()}-${getFormattedNum(this.createdAt.getMonth() + 1)}-${getFormattedNum(this.createdAt.getDate())} ${getFormattedNum(this.createdAt.getHours())}:${getFormattedNum(this.createdAt.getMinutes())}`;
});

CouponSchema.plugin(mongoosePaginate);

export default model<ICoupon, PaginateModel<ICoupon>>("Coupon", CouponSchema);
