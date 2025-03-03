import { Model } from "mongoose";

export type TMerchant = {
  businessName: string;
  name: string;
  email: string;
  phone: string;
  role:"Merchant"
  openingBalance: number;
  password: string;
  vat: number;
  hub: string;
  nid: string;
  status: "Pending" | "Active" | "Disabled";
  tradeLicense: string;
  image?: string;
  referenceName: string;
  referencePhone: string;
  paymentPeriod: number;
  walletUseActivation: boolean;
  address: string;
  returnCharges: number;
  codCharge: {
    insideCity: number;
    subCity: number;
    outsideCity: number;
  };
  createdAt: Date;
}


export interface MerchantModel extends Model<TMerchant> {

  //instance methods for checking if passwords are matched
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
   //instance methods for checking if the user exist
  isMerchantExists(paylod:string): Promise<TMerchant>;
 
}