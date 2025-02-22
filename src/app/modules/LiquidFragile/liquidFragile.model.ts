import { Schema, model } from "mongoose";
import { TLiquidFragile } from "./liquidFragile.interface";


const LiquidFragileSchema = new Schema<TLiquidFragile>({
  title: { type: String, required: true, unique: true },
  charge: { type: Number, required: true, min: 0 },
  status: { type: String, enum: ["Active", "Inactive"], default: "Active" },
});

export const LiquidFragile = model<TLiquidFragile>("LiquidFragile", LiquidFragileSchema);
