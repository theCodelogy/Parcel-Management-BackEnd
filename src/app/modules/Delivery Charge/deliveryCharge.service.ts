import QueryBuilder from "../../builder/queryBuilder";
import { TDeliveryCharge } from "./deliveryCharge.interface";
import { DeliveryCharge } from "./deliveryCharge.model";


// create deliveryCharge
const createDeliveryChargeintoDB = async (payload: TDeliveryCharge) => {
  const result = await DeliveryCharge.create(payload);
  return result;
};
// Get all deliveryCharge
const getAllDeliveryChargeFromDB = async (query: Record<string, unknown>) => {
  const DeliveryChargeQuery = new QueryBuilder(DeliveryCharge.find(), query)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await DeliveryChargeQuery.modelQuery;
  return result;
};

// Get single deliveryCharge
const getSingelDeliveryCharge = async (id: string) => {
  const result = await DeliveryCharge.findById({ _id: id });
  return result;
};

// Update deliveryCharge
const UpdateDeliveryChargeintoDB = async (id: string, payload: Partial<TDeliveryCharge>) => {
  const result = await DeliveryCharge.findOneAndUpdate({ _id: id }, payload);
  return result;
};

// Get single deliveryCharge
const deleteSingleDeliveryCharge = async (id: string) => {
  const result = await DeliveryCharge.deleteOne({ _id: id });
  return result;
};

export const DeliveryChargeServices = {
  createDeliveryChargeintoDB,
  getAllDeliveryChargeFromDB,
  getSingelDeliveryCharge,
  UpdateDeliveryChargeintoDB,
  deleteSingleDeliveryCharge,
};
