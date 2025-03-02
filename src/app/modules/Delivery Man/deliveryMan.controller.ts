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
  const result = await deliveryManServices.getAllDeliveryMansFromDB(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All DeliveryMans get succesfully',
    data: result,
  });
});

const getSingleDeliveryMan = catchAsync(async (req, res) => {
  const result = await deliveryManServices.getSingleDeliveryMansFromDB(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Delivery Man find succesfully',
    data: result,
  });
});

const updateleDeliveryMan = catchAsync(async (req, res) => {
  const result = await deliveryManServices.UpdateDeliveryMan(req.params.id,req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Delivery Man Update succesfully',
    data: result,
  });
});

const deleteSingleDeliveryMan = catchAsync(async (req, res) => {
  const result = await deliveryManServices.deleteSingleDeliveryMan(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Delivery Man Delete succesfully',
    data: result,
  });
});




export const DeliveryManControllers = {
  createDeliveryMan,
  getAllDeliveryMans,
  getSingleDeliveryMan,
  updateleDeliveryMan,
  deleteSingleDeliveryMan
};
