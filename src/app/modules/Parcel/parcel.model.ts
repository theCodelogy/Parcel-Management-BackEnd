import mongoose, { Schema } from "mongoose";
import { TParcel } from "./parcel.interface";

// Mongoose parcel Schema
const ParcelSchema = new Schema<TParcel>({
  merchant: { type: Schema.Types.ObjectId, required: true, ref: "Merchant" },
  pickupPoints: { type: String, required: true },
  pickupPhone: { type: String, required: true },
  pickupAddress: { type: String, required: true },
  cashCollection: { type: Number, required: true },
  sellingPrice: { type: Number, required: true },
  invoice: { type: String, required: true },
  deliveryType: { type: String, enum: ["Same Day", "Next Day", "Sub City", "Outside City"], required: true },
  category: { type: Number, required: true },
  customerName: { type: String, required: true },
  customerPhone: { type: String, required: true },
  customerAddress: { type: String, required: true },
  note: { type: String },
  packaging: { type: String, enum: ["Poly", "Bubble Poly", "Box", "Box Poly"], required: true },
  priority: { type: String, enum: ["Normal", "High"], required: true },
  paymentMethod: { type: String, enum: ["COD"], required: true },
  deliveryCharge: { type: Number, required: true },
  codCharge: { type: Number, required: true },
  totalCharge: { type: Number, required: true },
  vat: { type: Number, required: true },
  netPayable: { type: Number, required: true },
  currentPayable: { type: Number, required: true },
});

// Mongoose parcel model
export const Parcel = mongoose.model<TParcel>("Parcel", ParcelSchema);