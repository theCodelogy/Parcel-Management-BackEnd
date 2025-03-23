import { Schema, model } from "mongoose";
import { TDeliveryCharge } from "./deliveryCharge.interface";


const DeliveryChargeSchema = new Schema<TDeliveryCharge>({
  chargeList: {
    sameDay: { type: Number },
    nextDay: { type: Number },
    subCity: { type: Number },
    outsideCity: { type: Number },
  },
  increasePerKG: {
    sameDay: { type: Number },
    nextDay: { type: Number },
    subCity: { type: Number },
    outsideCity: { type: Number },
  },
},
{ timestamps: true });

export const DeliveryCharge = model<TDeliveryCharge>("DeliveryCharge", DeliveryChargeSchema);
