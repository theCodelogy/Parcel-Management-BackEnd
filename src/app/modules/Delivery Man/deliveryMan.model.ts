import mongoose, { Schema, Document, Model } from "mongoose";


const DeliveryManSchema = new Schema({
  deliveryCharge: { type: Number, required: true },
  returnCharge: { type: Number, required: true },
  pickupCharge: { type: Number, required: true },
  openingBalance: { type: Number, required: true },
  salary: { type: Number, required: true },
  hub: { type: String, required: true },
  drivingLicence: { type: String, required: true },
  image: { type: String },
  email: { type: String, required: true },
});

// Merge DeliveryMan schema with User
const DeliveryMan = mongoose.model("DeliveryMan", DeliveryManSchema);

export default DeliveryMan;
