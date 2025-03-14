import { TDeliveryMan } from "./deliveryMan.interface";
import httpStatus from "http-status";
import { deliveryManSearchableFields } from "./deliveryMan.constant";
import QueryBuilder from "../../builder/queryBuilder";
import { DeliveryMan } from "./deliveryMan.model";
import { AuthServices } from "../auth/auth.service";
import AppError from "../../errors/AppError";




const createDeliveryManintoDB = async (payload: TDeliveryMan) => {
  const user = await AuthServices.currentUser(payload.email)
  if(user){
    throw new AppError(httpStatus.BAD_REQUEST, "This Email is Already Exist!");
  }
  const newDeliveryMan = await DeliveryMan.create(payload);
  return newDeliveryMan;
};


const getAllDeliveryMansFromDB = async (query: Record<string, unknown>) => {
  const DeliveryManQuery = new QueryBuilder(DeliveryMan.find(), query)
    .search(deliveryManSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await DeliveryManQuery.modelQuery;
  return result;
};


const getSingleDeliveryMansFromDB = async (id:string) => {
  const result = await DeliveryMan.findById({_id:id});
  return result;
};

// Update delivery man
const UpdateDeliveryMan = async (
  id: string,
  payload: Partial<TDeliveryMan>
) => {
  const result = await DeliveryMan.findOneAndUpdate({ _id: id }, payload);
  return result;
};

// Get single Delivery Man
const deleteSingleDeliveryMan = async (id: string) => {
  const result = await DeliveryMan.deleteOne({ _id: id});
  return result;
};


export const deliveryManServices = {
  createDeliveryManintoDB,
  getAllDeliveryMansFromDB,
  getSingleDeliveryMansFromDB,
  UpdateDeliveryMan,
  deleteSingleDeliveryMan
};
