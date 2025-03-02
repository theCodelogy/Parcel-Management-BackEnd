import { Model } from "mongoose";

export type TDeliveryMan = {
  name: string;
  email: string;
  phone: string;
  role:"Delivery Man"
  deliveryCharge: number;
  returnCharge: number;
  pickupCharge: number;
  openingBalance: number;
  password: string;
  salary: number;
  status: "Pending" | "Active" | "Disabled";
  hub: string;
  drivingLicence: string;
  image?: string;
  address: string;
}

export interface DeliveryManModel extends Model<TDeliveryMan> {

  //instance methods for checking if passwords are matched
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
   //instance methods for checking if the Delivery man exist
  isDeliveryManExists(paylod:string): Promise<TDeliveryMan>;
 
}
