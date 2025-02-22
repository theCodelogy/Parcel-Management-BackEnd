import { Schema, model } from "mongoose";
import { TDeliveryCharge } from "./deliveryCharge.interface";


const DeliveryChargeSchema = new Schema<TDeliveryCharge>({
  category: { type: String, required: true },
  weight: { type: Number, required: false },
  sameDay: { type: Number, required: true },
  nextDay: { type: Number, required: true },
  subCity: { type: Number, required: true },
  outsideCity: { type: Number, required: true },
  status: { type: String, enum: ["Active", "Inactive"], default: "Active" },
  position: { type: Number, required: true }
});

export const DeliveryCharge = model<TDeliveryCharge>("DeliveryCharge", DeliveryChargeSchema);
