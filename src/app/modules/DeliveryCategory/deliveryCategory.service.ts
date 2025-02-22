import QueryBuilder from "../../builder/queryBuilder";
import { TDeliveryCategory } from "./deliveryCategory.interface";
import { DeliveryCategory } from "./deliveryCategory.model";



// create deliveryCategory
const createdeliveryCategoryintoDB = async (payload: TDeliveryCategory) => {
  const result = await DeliveryCategory.create(payload);
  return result;
};
// Get all Delivery Category
const getAllDeliveryCategoryFromDB = async (query: Record<string, unknown>) => {
  const DeliveryCategoryQuery = new QueryBuilder(DeliveryCategory.find(), query)
    .filter()
    .sort()
    .paginate();


  const result = await DeliveryCategoryQuery.modelQuery;
  return result;
};

// Get single DeliveryCategory
const getSingelDeliveryCategory= async (id: string) => {
  const result = await DeliveryCategory.findById({ _id: id });
  return result;
};

// Update DeliveryCategory
const UpdateDeliveryCategoryintoDB = async (id: string, payload: Partial<TDeliveryCategory>) => {
  const result = await DeliveryCategory.findOneAndUpdate({ _id: id }, payload);
  return result;
};

// Get single DeliveryCategory
const deleteSingleDeliveryCategory = async (id: string) => {
  const result = await DeliveryCategory.deleteOne({ _id: id });
  return result;
};

export const DeliveryCategoryServices = {
  createdeliveryCategoryintoDB,
  getAllDeliveryCategoryFromDB,
  getSingelDeliveryCategory,
  UpdateDeliveryCategoryintoDB,
  deleteSingleDeliveryCategory,
};
