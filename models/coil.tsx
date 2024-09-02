import mongoose, { Schema, model } from "mongoose";

export interface coilDocument {
  _id: string;
  diameter: 5.5 | 6.5 | 8 | 10 | 12;
  ribbed: boolean;
  type: "AII" | "AIII" | "3SP" | "RST" | "1008" | "1006";
  producer: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}

const coilSchema = new Schema<coilDocument>(
  {},
  {
    timestamps: true,
  },
);

const coil = mongoose.models?.coil || model<coilDocument>("coil", coilSchema);
export default coil;
