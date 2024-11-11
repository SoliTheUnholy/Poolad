import mongoose, { Schema, model } from "mongoose";

export interface orderDocument {
  _id: string;
  userId: string;
  productInfo: object;
  weight: number;
  price: number;
  type: number;
  status: "rejected" | "pending" | "resolved";
  createdAt: Date;
  updatedAt: Date;
}

const orderSchema = new Schema<orderDocument>(
  {
    userId: {
      type: String,
      required: [true, "userId is required"],
    },
    productInfo: { type: Object, required: [true, "userId is required"] },
    weight: {
      type: Number,
      required: [true, "weight is required"],
    },
    type: {
      type: Number,
      required: [true, "Type is required"],
    },
    price: {
      type: Number,
      required: [true, "price is required"],
    },
    status: {
      type: String,
      required: [true, "status is required"],
    },
  },
  {
    timestamps: true,
  },
);

const order =
  mongoose.models?.order || model<orderDocument>("order", orderSchema);
export default order;
