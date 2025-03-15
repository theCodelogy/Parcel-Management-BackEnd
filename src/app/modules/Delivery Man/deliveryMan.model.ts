import  { model, Schema, } from "mongoose";
import bcrypt from "bcrypt";
import { DeliveryManModel, TDeliveryMan } from "./deliveryMan.interface";
import config from "../../config";

const DeliveryManSchema = new Schema<TDeliveryMan,DeliveryManModel>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true, unique: true },
  role: { type: String, required: true},
  deliveryCharge: { type: Number, required: true },
  returnCharge: { type: Number, required: true },
  pickupCharge: { type: Number, required: true },
  openingBalance: { type: Number, required: true },
  password: { type: String, required: true },
  salary: { type: Number, required: true },
  status: { type: String, enum: ["Pending", "Active", "Disabled"],default:"Pending" },
  hub: { type: String, required: true },
  drivingLicence: { type: String, required: true },
  image: { type: String },
  address: { type: String, required: true },
},
{ timestamps: true }
);


// make the plain password to hash password
DeliveryManSchema.pre("save", async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const deliveryMan = this; // doc
  deliveryMan.password = await bcrypt.hash(
    deliveryMan.password,
    Number(config.bcrypt_salt_rounds)
  );

  next();
});

// set '' after saving password
DeliveryManSchema.post("save", function (doc, next) {
  doc.password = "";
  next();
});

// Is Delibery Man exist checking static meathod
DeliveryManSchema.statics.isDeliveryManExists = async function (paylod: string) {
  return await DeliveryMan.findOne({ email: paylod }).select("+password");
};

// password validation static meathod
DeliveryManSchema.statics.isPasswordMatched = async function (
  plainTextPassword,
  hashedPassword
) {
  return await bcrypt.compare(plainTextPassword, hashedPassword);
};

export const DeliveryMan = model<TDeliveryMan, DeliveryManModel>("DeliveryMan", DeliveryManSchema);