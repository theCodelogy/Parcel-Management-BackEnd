import { Model } from "mongoose";
export type TBranch = {
  name: string;
  branchManagerName: string;
  password: string;
  phone: string;
  email: string;
  address: string;
  status: "Active" | "Disabled";
  role:"Branch"
  createdAt: Date;
};




export interface BranchModel extends Model<TBranch> {

  //instance methods for checking if passwords are matched
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
   //instance methods for checking if the Branch man exist
  isBranchExists(paylod:string): Promise<TBranch>;
 
}