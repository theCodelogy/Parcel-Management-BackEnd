import { TSuperAdmin } from "./superAdmin.interface";
import { SuperAdmin } from "./superAdmin.model";

const createSuperAdminIntoDB = async (payload: TSuperAdmin) => {
  const newUser = await SuperAdmin.create(payload);
  return newUser;
};

const getAllSuperAdminFromDB = async () => {
  const users = await SuperAdmin.find();
  return users;
};

export const SuperAdminServices = {
  createSuperAdminIntoDB,
  getAllSuperAdminFromDB,
};
