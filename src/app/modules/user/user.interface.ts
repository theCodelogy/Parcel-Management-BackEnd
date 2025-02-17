
import { Model } from "mongoose";
import { UserRole } from "./user.constant";

export interface TUser {
  name: string;        
  email: string;         
  password: string;  
  phone: string;       
  address: string;       
  role: "Super Admin"| "Merchant Admin"| "Rider"; 
}

export interface UserModel extends Model<TUser> {

  //instance methods for checking if passwords are matched
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
   //instance methods for checking if the user exist
  userExists(paylod:string): Promise<TUser>;
 
}

export type TUserRole = keyof typeof UserRole;