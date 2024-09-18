import mongoose, { Schema, model } from "mongoose";

export interface orderDocument {
  _id: string;
  userId: string;
  productId: string;
  weight: number;
  price: number;
  type: number;
  createdAt: Date;
  updatedAt: Date;
}

const orderSchema = new Schema<orderDocument>(
  {
    userId: {
      type: String,
      required: [true, "userId is required"],
    },
    productId: {
      type: String,
      required: [true, "productId is required"],
    },
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
  },
  {
    timestamps: true,
  },
);

const order =
  mongoose.models?.order || model<orderDocument>("order", orderSchema);
export default order;
