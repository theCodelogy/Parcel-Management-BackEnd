/* eslint-disable @typescript-eslint/no-this-alias */
import bcrypt from "bcrypt";
import { Schema, model } from "mongoose";
import { SuperAdminModel, TSuperAdmin } from "./superAdmin.interface";
import config from "../../config";

export const superAdminSchema = new Schema<TSuperAdmin, SuperAdminModel>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      unique:true
    },
    address: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required:true,
    },
    status: {
      type: String,
      enum: ["Pending", "Active", "Disable"],default:"Pending",
    },
  },
  { timestamps: true }
);

superAdminSchema.pre("save", async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this; // doc
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds)
  );

  next();
});

// set '' after saving password
superAdminSchema.post("save", function (doc, next) {
  doc.password = "";
  next();
});


// Is admin exist checking static meathod
superAdminSchema.statics.userExists = async function (paylod: string) {
  const user = await SuperAdmin.findOne({ email: paylod }).select("+password");

  if (user) {
    return user;
  } else {
    return await SuperAdmin.findOne({ phone: paylod }).select("+password");
  }
};

// password validation static meathod
superAdminSchema.statics.isPasswordMatched = async function (
  plainTextPassword,
  hashedPassword
) {
  return await bcrypt.compare(plainTextPassword, hashedPassword);
};

export const SuperAdmin = model<TSuperAdmin, SuperAdminModel>("SuperAdmin", superAdminSchema);
