import QueryBuilder from "../../builder/queryBuilder";
import AppError from "../../errors/AppError";
import { AuthServices } from "../auth/auth.service";
import { TBranch } from "./branch.interface";
import { Branch } from "./branch.model";
import httpStatus from "http-status";

// create Branch
const createBranchintoDB = async (payload: TBranch) => {
  // check this email is already used or not in another user collecton
  const user = await AuthServices.currentUser(payload.email)
  if(user){
    throw new AppError(httpStatus.BAD_REQUEST, "This Email is Already Exist!" );
  }
  const result = await Branch.create(payload);
  return result;
};
// Get all Branch
const getAllBranchFromDB = async (query: Record<string, unknown>) => {
  const branchQuery = new QueryBuilder(Branch.find(), query)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await branchQuery.modelQuery;
  return result;
};

// Get single Branch
const getSingleBranch = async (id: string) => {
  const result = await Branch.findById({ _id: id });
  return result;
};

// Update Branch
const UpdateBranchintoDB = async (id: string, payload: Partial<TBranch>) => {
  const result = await Branch.findOneAndUpdate({ _id: id }, payload);
  return result;
};

// Get single Branch
const deleteSingleBranch = async (id: string) => {
  const result = await Branch.deleteOne({ _id: id });
  return result;
};

export const BranchServices = {
  createBranchintoDB,
  getAllBranchFromDB,
  getSingleBranch,
  UpdateBranchintoDB,
  deleteSingleBranch,
};
