import QueryBuilder from "../../builder/queryBuilder";
import { TLiquidFragile } from "./liquidFragile.interface";
import { LiquidFragile } from "./liquidFragile.model";

// create LiquidFragile
const createLiquidFragileintoDB = async (payload: TLiquidFragile) => {
  const result = await LiquidFragile.create(payload);
  return result;
};
// Get all LiquidFragile
const getAllLiquidFragileFromDB = async (query: Record<string, unknown>) => {
  const LiquidFragileQuery = new QueryBuilder(LiquidFragile.find(), query)
    .filter();
   

  const result = await LiquidFragileQuery.modelQuery;
  return result;
};

// Get single LiquidFragile
const getSingelLiquidFragile = async (id: string) => {
  const result = await LiquidFragile.findById({ _id: id });
  return result;
};

// Update LiquidFragile
const UpdateLiquidFragileintoDB = async (id: string, payload: Partial<TLiquidFragile>) => {
  const result = await LiquidFragile.findOneAndUpdate({ _id: id }, payload);
  return result;
};

// Get single LiquidFragile
const deleteSingleLiquidFragile = async (id: string) => {
  const result = await LiquidFragile.deleteOne({ _id: id });
  return result;
};

export const LiquidFragileServices = {
  createLiquidFragileintoDB,
  getAllLiquidFragileFromDB,
  getSingelLiquidFragile,
  UpdateLiquidFragileintoDB,
  deleteSingleLiquidFragile,
};
