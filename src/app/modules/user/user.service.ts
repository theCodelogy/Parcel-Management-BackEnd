import { TUser } from './user.interface';
import { User } from './user.model';

const createUserIntoDB = async (payload: TUser) => {

  const newUser = await User.create(payload);
  return newUser;
};

const getAllUsersFromDB = async () => {
  const users = await User.find();
  return users;
};

export const UserServices = {
   createUserIntoDB,
  getAllUsersFromDB
};
