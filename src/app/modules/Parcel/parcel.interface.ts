import mongoose, { Model } from "mongoose";


type DeliveryType = "Same Day" | "Next Day" | "Sub City" | "Outside City";
type PackagingType = "Poly" | "Bubble Poly" | "Box" | "Box Poly";
type PriorityType = "Normal" | "High";
type PaymentMethod = "COD";

export type TParcel = {
  merchant: mongoose.Types.ObjectId;
  pickupPoints: string;
  pickupPhone: string;
  pickupAddress: string;
  cashCollection: number;
  sellingPrice: number;
  invoice: string;
  deliveryType: DeliveryType;
  category: number;
  customerName: string;
  customerPhone: string;
  customerAddress: string;
  note?: string;
  packaging: PackagingType;
  priority: PriorityType;
  paymentMethod: PaymentMethod;
  deliveryCharge: number;
  codCharge: number;
  totalCharge: number;
  vat: number;
  netPayable: number;
  currentPayable: number;
};


