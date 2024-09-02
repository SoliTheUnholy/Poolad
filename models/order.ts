import mongoose, { Schema, model } from "mongoose";

export interface orderDocument {
  _id: string;
  userId: string;
  productId: string;
  weight: number;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}

const orderSchema = new Schema<orderDocument>(
  {},
  {
    timestamps: true,
  },
);

const order =
  mongoose.models?.order || model<orderDocument>("order", orderSchema);
export default order;
