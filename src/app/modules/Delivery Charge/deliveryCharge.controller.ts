import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { DeliveryChargeServices } from './deliveryCharge.service';





const createDeliveryCharge = catchAsync(async (req, res) => {
  const result = await  DeliveryChargeServices.createDeliveryChargeintoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Delivery Charge crate successfully',
    data: result,
  });
});

const getAllDeliveryCharge = catchAsync(async (req, res) => {
  const result = await DeliveryChargeServices.getAllDeliveryChargeFromDB(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Delivery Charge get succesfully',
    data: result,
  });
});

const getSingleDeliveryCharge = catchAsync(async (req, res) => {
  const result = await DeliveryChargeServices.getSingelDeliveryCharge(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Delivery Chargefind succesfully',
    data: result,
  });
});

const updateDeliveryCharge = catchAsync(async (req, res) => {
  const result = await DeliveryChargeServices.UpdateDeliveryChargeintoDB(req.params.id,req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Delivery Charge update succesfully',
    data: result,
  });
});

const deleteSingleDeliveryCharge= catchAsync(async (req, res) => {
  const result = await DeliveryChargeServices.deleteSingleDeliveryCharge(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Delivery Charge Delete succesfully',
    data: result,
  });
});

export const DeliveryChargeQueryControllers = {
  createDeliveryCharge,
  getAllDeliveryCharge,
  getSingleDeliveryCharge,
  updateDeliveryCharge,
  deleteSingleDeliveryCharge
};
