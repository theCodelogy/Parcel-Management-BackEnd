import { TParcel } from "./parcel.interface";
import QueryBuilder from "../../builder/queryBuilder";
import { Parcel } from "./parcel.model";

const createParcelintoDB = async (payload: TParcel) => {
  const result = await Parcel.create(payload);
  return result;
};

const getAllParcelFromDB = async (query: Record<string, unknown>) => {
  const ParcelQuery = new QueryBuilder(Parcel.find(), query)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await ParcelQuery.modelQuery;
  return result;
};

const getSingleParcelFromDB = async (id: string) => {
  const result = await Parcel.findById({ _id: id });
  return result;
};

// Update Parcel man
const UpdateParcel = async (
  id: string,
  payload: Partial<TParcel>
) => {
  const result = await Parcel.findOneAndUpdate({ _id: id }, payload);
  return result;
};

// Get single parcel
const deleteSingleParcel = async (id: string) => {
  const result = await Parcel.deleteOne({ _id: id });
  return result;
};

export const parcelServices = {
  createParcelintoDB,
  getAllParcelFromDB,
  getSingleParcelFromDB,
  UpdateParcel,
  deleteSingleParcel,
};
