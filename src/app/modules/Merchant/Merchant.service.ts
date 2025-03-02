import QueryBuilder from "../../builder/queryBuilder";
import { merchantSearchableFields } from "./Merchant.constant";
import { TMerchant } from "./Merchant.interface";
import { Merchant } from "./Merchant.model";


// create Merchant
const createMerchantintoDB = async (payload: TMerchant) => {
  const merchant={...payload,role:"Merchant"}
  const newMerchant = await Merchant.create(merchant);
  return newMerchant;
};
// Get all Merchant
const getAllMerchantFromDB = async (query: Record<string, unknown>) => {
  const merchantQuery = new QueryBuilder(Merchant.find(), query)
    .search(merchantSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await merchantQuery.modelQuery;
  return result;
};

// Get single Merchant
const getSingleMerchant = async (id: string) => {
  const result = await Merchant.findById({ _id: id });
  return result;
};

// Update Merchant
const UpdateMerchantintoDB = async (
  id: string,
  payload: Partial<TMerchant>
) => {
  const result = await Merchant.findOneAndUpdate({ _id: id }, payload);
  return result;
};

// Get single Merchant
const deleteSingleMerchant = async (id: string) => {
  const result = await Merchant.deleteOne({ _id: id});
  return result;
};

export const MerchantServices = {
  createMerchantintoDB,
  getAllMerchantFromDB,
  UpdateMerchantintoDB,
  getSingleMerchant,
  deleteSingleMerchant
};
