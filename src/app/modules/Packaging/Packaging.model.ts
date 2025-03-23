import { Schema, model } from "mongoose";
import { TPackaging } from "./Packaging.interface";


const PackagingSchema = new Schema<TPackaging>(
  {
    Poly:{ type: Number, required: true },
    bubblePoly: { type: Number, required: true },
    Box: { type: Number, required: true },
    boxPolly: { type: Number, required: true },
  },
  { timestamps: true }
);

export const Packaging = model<TPackaging>(
  "Packaging",
  PackagingSchema
);
