import mongoose, { Schema, model } from "mongoose";
import { orderDocument } from "./order";

export interface userDocument {
  _id: string;
  name: string;
  number: string;
  password: string;
  code: string;
  address: string;
  zipCode: string;
  orders: Array<orderDocument>;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<userDocument>(
  {
    number: {
      type: String,
      unique: true,
      required: [true, "Number is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
  },
  {
    timestamps: true,
  },
);

const User = mongoose.models?.user || model<userDocument>("user", userSchema);
export default User;