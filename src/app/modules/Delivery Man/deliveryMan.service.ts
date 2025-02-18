import { TDeliveryMan } from "./deliveryMan.interface";
import DeliveryMan from "./deliveryMan.model";


const createDeliveryManintoDB = async (payload: TDeliveryMan) => {
  const newDeliveryMan = await DeliveryMan.create(payload);
  return newDeliveryMan;
};

const getAllDeliveryMansFromDB = async () => {
  const DeliveryMans = await DeliveryMan.find();
  return DeliveryMans;
};

export const deliveryManServices = {
  createDeliveryManintoDB,
  getAllDeliveryMansFromDB,
};
