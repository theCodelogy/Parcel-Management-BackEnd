import { Model } from "mongoose";


export interface TSuperAdmin {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  role: "Super Admin";
  status: "Pending" | "Active" | "Disable";
}

export interface SuperAdminModel extends Model<TSuperAdmin> {
  //instance methods for checking if passwords are matched
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string
  ): Promise<boolean>;
  //instance methods for checking if the user exist
  userExists(paylod: string): Promise<TSuperAdmin>;
}


