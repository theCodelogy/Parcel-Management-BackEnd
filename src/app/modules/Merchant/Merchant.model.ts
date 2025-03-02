import bcrypt from "bcrypt";
import { Schema, model } from "mongoose";
import { MerchantModel, TMerchant } from "./Merchant.interface";
import config from "../../config";


// Define Mongoose Schema
const MerchantSchema = new Schema<TMerchant>(
  {
    businessName: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    role: { type: String, required: true},
    openingBalance: { type: Number, required: true },
    password: { type: String, required: true },
    vat: { type: Number, required: true },
    hub: { type: String, required: true },
    nid: { type: String, required: true },
    status: {
      type: String,
      enum: ["Pending", "Active", "Disabled"],
      default:"Pending",
      required:true,
    },
    tradeLicense: { type: String, required: true },
    image: { type: String },
    referenceName: { type: String, required: true },
    referencePhone: { type: String, required: true },
    paymentPeriod: { type: Number, required: true },
    walletUseActivation: { type: Boolean, default: false },
    address: { type: String, required: true },
    returnCharges: { type: Number, required: true },
    codCharge: {
      insideCity: { type: Number, required: true },
      subCity: { type: Number, required: true },
      outsideCity: { type: Number, required: true },
    },
  },
  { timestamps: true }
);


MerchantSchema.pre("save", async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const merchent = this; // doc
  merchent.password = await bcrypt.hash(
    merchent.password,
    Number(config.bcrypt_salt_rounds)
  );

  next();
});

// set '' after saving password
MerchantSchema.post("save", function (doc, next) {
  doc.password = "";
  next();
});


// Is merchant exist checking static meathod
MerchantSchema.statics.isMerchantExists = async function (paylod: string) {
  const merchant = await Merchant.findOne({ email: paylod }).select(
    "+password"
  );

  if (merchant) {
    return merchant;
  } else {
    return await Merchant.findOne({ phone: paylod }).select("+password");
  }
};

// password validation static meathod
MerchantSchema.statics.isPasswordMatched = async function (
  plainTextPassword,
  hashedPassword
) {
  return await bcrypt.compare(plainTextPassword, hashedPassword);
};

export const Merchant = model<TMerchant, MerchantModel>(
  "Merchant",
  MerchantSchema
);
