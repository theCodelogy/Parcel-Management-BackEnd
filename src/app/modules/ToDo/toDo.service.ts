import QueryBuilder from "../../builder/queryBuilder";
import { TToDo } from "./toDo.interface";
import { ToDo } from "./toDo.model";


// create todo
const createToDointoDB = async (payload: TToDo) => {
  const result = await ToDo.create(payload);
  return result;
};
// Get all ToDo
const getAllToDoFromDB = async (query: Record<string, unknown>) => {
  const ToDoQuery = new QueryBuilder(ToDo.find(), query)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await ToDoQuery.modelQuery;
  return result;
};

// Get single ToDo
const getSingelToDo = async (id: string) => {
  const result = await ToDo.findById({ _id: id });
  return result;
};

// Update ToDo
const UpdateToDointoDB = async (id: string, payload: Partial<TToDo>) => {
  const result = await ToDo.findOneAndUpdate({ _id: id }, payload);
  return result;
};

// Get single ToDo
const deleteSingleToDo = async (id: string) => {
  const result = await ToDo.deleteOne({ _id: id });
  return result;
};

export const ToDoServices = {
  createToDointoDB,
  getAllToDoFromDB,
  getSingelToDo,
  UpdateToDointoDB,
  deleteSingleToDo,
};
