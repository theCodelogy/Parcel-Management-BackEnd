import mongoose, { Schema } from "mongoose";
import { TBranch } from "./branch.interface";


const BranchSchema = new Schema<TBranch>(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    status: { type: String, enum: ["Active", "Inactive"], required: true },
  },
  { timestamps: true }
);

export const Branch = mongoose.model<TBranch>("Branch", BranchSchema);
