import mongoose, { Schema, model } from "mongoose";

export interface UserDocument {
  _id: string;
  email: string;
  password: string;
  username: string;
  name: string;
  fname: string;
  phone: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
  occupation: "teacher" | "student";
}

const UserSchema = new Schema<UserDocument>(
  {
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Email is invalid",
      ],
    },
    username: {
      type: String,
      unique: true,
      required: [true, "First name is required"],
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const User =
  mongoose.models?.User || model<UserDocument>("User", UserSchema, "User");
export default User;
