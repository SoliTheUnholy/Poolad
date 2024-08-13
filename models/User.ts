import mongoose, { Schema, model } from "mongoose";

export interface UserDocument {
  _id: string;
  email: string;
  password: string;
  number: string;
  name: string;
  fname: string;
  phone: string;
  avatar: string;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<UserDocument>(
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

const User =
  mongoose.models?.User || model<UserDocument>("User", UserSchema, "User");
export default User;
