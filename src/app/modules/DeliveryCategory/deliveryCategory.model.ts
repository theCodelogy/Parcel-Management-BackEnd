import { Schema, model } from "mongoose";
import { TDeliveryCategory } from "./deliveryCategory.interface";


const DeliveryCategorySchema = new Schema<TDeliveryCategory>({
  title: { type: String, required: true, unique: true },
  status: { type: String, enum: ["Active", "Inactive"], default: "Active" },
  position: { type: Number, required: true }
});

export const DeliveryCategory = model<TDeliveryCategory>("DeliveryCategory", DeliveryCategorySchema);
