// import AppError from "../../errors/AppError";
// import { AuthServices } from "../auth/auth.service";
// import { TSuperAdmin } from "./superAdmin.interface";
// import { SuperAdmin } from "./superAdmin.model";
// import httpStatus from "http-status";

// const createSuperAdminIntoDB = async (payload: TSuperAdmin) => {
//   const user = await AuthServices.currentUser(payload.email)
//   if(user){
//     throw new AppError(httpStatus.BAD_REQUEST, "This Email is already Exist!");
//   }
//   const newUser = await SuperAdmin.create(payload);
//   return newUser;
// };

// const getAllSuperAdminFromDB = async () => {
//   const users = await SuperAdmin.find();
//   return users;
// };

// // Get single super admin
// const getSingleSuperAdmin = async (id: string) => {
//   const result = await SuperAdmin.findById({ _id: id });
//   return result;
// };

// // Update Super Admin
// const UpdateSuperAdmin = async (
//   id: string,
//   payload: Partial<TSuperAdmin>
// ) => {
//   const result = await SuperAdmin.findOneAndUpdate({ _id: id }, payload);
//   return result;
// };

// // Get single superAmin
// const deleteSingleSuperAdmin = async (id: string) => {
//   const result = await SuperAdmin.deleteOne({ _id: id});
//   return result;
// };

// export const SuperAdminServices = {
//   createSuperAdminIntoDB,
//   getAllSuperAdminFromDB,
//   getSingleSuperAdmin,
//   UpdateSuperAdmin,
//   deleteSingleSuperAdmin
  
// };
import QueryBuilder from "../../builder/queryBuilder";
import AppError from "../../errors/AppError";
import { AuthServices } from "../auth/auth.service";
import { TSuperAdmin } from "./superAdmin.interface";
import { SuperAdmin } from "./superAdmin.model";
import { superAdminSearchableFields } from "./superAdmin.constant"; // ensure this constant exists
import httpStatus from "http-status";

// Create SuperAdmin
const createSuperAdminIntoDB = async (payload: TSuperAdmin) => {
  const user = await AuthServices.currentUser(payload.email);
  if (user) {
    throw new AppError(httpStatus.BAD_REQUEST, "This Email is already Exist!");
  }
  const newUser = await SuperAdmin.create(payload);
  return newUser;
};

// Get all SuperAdmins with filtering, searching, sorting, pagination and field selection
const getAllSuperAdminFromDB = async (query: Record<string, unknown>) => {
  const superAdminQuery = new QueryBuilder(SuperAdmin.find(), query)
    .search(superAdminSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await superAdminQuery.modelQuery;
  return result;
};

// Get single SuperAdmin
const getSingleSuperAdmin = async (id: string) => {
  const result = await SuperAdmin.findById({ _id: id });
  return result;
};

// Update SuperAdmin
const UpdateSuperAdmin = async (
  id: string,
  payload: Partial<TSuperAdmin>
) => {
  const result = await SuperAdmin.findOneAndUpdate({ _id: id }, payload);
  return result;
};

// Delete SuperAdmin
const deleteSingleSuperAdmin = async (id: string) => {
  const result = await SuperAdmin.deleteOne({ _id: id });
  return result;
};

export const SuperAdminServices = {
  createSuperAdminIntoDB,
  getAllSuperAdminFromDB,
  getSingleSuperAdmin,
  UpdateSuperAdmin,
  deleteSingleSuperAdmin
};
