import { TParcel } from "./parcel.interface";
import QueryBuilder from "../../builder/queryBuilder";
import { Parcel } from "./parcel.model";
import { v4 as uuidv4 } from "uuid";

const createParcelintoDB = async (payload: TParcel) => {
  // Generate Tracking Id
  const TrakingId = `CTE${uuidv4().replace(/\D/g, '').substring(0, 10)}`;

  const parcel = {
    ...payload,
    TrakingId
  }
  const result = await Parcel.create(parcel);
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

// Update Parcel 
const UpdateParcel = async (
  id: string,
  payload: Partial<TParcel>
) => {
  const result = await Parcel.findOneAndUpdate({ _id: id }, payload);
  return result;
};

// Update Parcel status update
const UpdateParcelStatus = async (
  id: string,
  payload: Partial<TParcel>
) => {

const parcel = await Parcel.findOne({ _id: id });
if(parcel){
  parcel.parcelStatus = parcel.parcelStatus.map((s) => ({
    ...s,
    current:"false",
  }));
  parcel.parcelStatus.push(payload);
  await parcel.save();
  return parcel;
}else{
  return "parcel Not found"
}

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
  UpdateParcelStatus
};
