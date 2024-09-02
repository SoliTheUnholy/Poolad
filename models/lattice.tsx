import mongoose, { Schema, model } from "mongoose";

export interface latticeDocument {
  _id: string;
  height: 15 | 20 | 25 | 30 | 35;
  top: 8 | 10 | 12;
  bottom: 8 | 10 | 12;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}

const latticeSchema = new Schema<latticeDocument>(
  {},
  {
    timestamps: true,
  },
);

const lattice =
  mongoose.models?.lattice || model<latticeDocument>("lattice", latticeSchema);
export default lattice;
