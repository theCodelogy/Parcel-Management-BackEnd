import bcrypt from "bcrypt";
import { model, Schema } from "mongoose";
import { BranchModel, TBranch } from "./branch.interface";
import config from "../../config";


const BranchSchema = new Schema<TBranch>(
  {
    name: { type: String, unique:true, required: true },
    branchManagerName:{ type: String, required: true },
    phone: { type: String, required: true, unique:true},
    address: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique:true },
    status: { type: String, enum: ["Active", "Disabled"], default:"Active" },
    role:{ type: String, default:"Branch" }
  },
  { timestamps: true }
);



// make the plain password to hash password
BranchSchema.pre("save", async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const branch = this; // doc
  branch.password = await bcrypt.hash(
    branch.password,
    Number(config.bcrypt_salt_rounds)
  );

  next();
});

// set '' after saving password
BranchSchema.post("save", function (doc, next) {
  doc.password = "";
  next();
});

// Is Branch exist checking static meathod
BranchSchema.statics.isBranchExists = async function (paylod: string) {
  return await Branch.findOne({ email: paylod }).select("+password");
};

// password validation static meathod
BranchSchema.statics.isPasswordMatched = async function (
  plainTextPassword,
  hashedPassword
) {
  return await bcrypt.compare(plainTextPassword, hashedPassword);
};

export const Branch= model<TBranch, BranchModel>("Branch", BranchSchema);