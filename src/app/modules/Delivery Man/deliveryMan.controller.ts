import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { deliveryManServices } from './deliveryMan.service';



const createDeliveryMan = catchAsync(async (req, res) => {
  const result = await  deliveryManServices.createDeliveryManintoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Delivery Man create successfully',
    data: result,
  });
});

const getAllDeliveryMans = catchAsync(async (req, res) => {
  const result = await deliveryManServices.getAllDeliveryMansFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All DeliveryMans get succesfully',
    data: result,
  });
});

export const DeliveryManControllers = {
  createDeliveryMan,
  getAllDeliveryMans,
};
