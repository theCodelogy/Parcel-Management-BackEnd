import QueryBuilder from "../../builder/queryBuilder";
import { TPackaging } from "./Packaging.interface";
import { Packaging } from "./Packaging.model";


// create Packaging
const createPackagingintoDB = async (payload: TPackaging) => {
  const result = await Packaging.create(payload);
  return result;
};
// Get all Packaging
const getAllPackagingFromDB = async (query: Record<string, unknown>) => {
  const DeliveryCategoryQuery = new QueryBuilder(Packaging.find(), query)
    .filter()
    .sort()
    .paginate();

  const result = await DeliveryCategoryQuery.modelQuery;
  return result;
};

// Get single Packaging
const getSingelPackaging = async (id: string) => {
  const result = await Packaging.findById({ _id: id });
  return result;
};

// Update packaging
const UpdatePackagingintoDB = async (
  id: string,
  payload: Partial<TPackaging>
) => {
  const result = await Packaging.findOneAndUpdate({ _id: id }, payload);
  return result;
};

// Get single packaging
const deleteSinglePackaging = async (id: string) => {
  const result = await Packaging.deleteOne({ _id: id });
  return result;
};

export const PackagingServices = {
  createPackagingintoDB,
  getAllPackagingFromDB,
  getSingelPackaging,
  UpdatePackagingintoDB,
  deleteSinglePackaging,
};
