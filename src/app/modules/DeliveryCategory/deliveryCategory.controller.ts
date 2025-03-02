import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { DeliveryCategoryServices } from './deliveryCategory.service';





const createDeliveryCategory = catchAsync(async (req, res) => {
  const result = await  DeliveryCategoryServices.createdeliveryCategoryintoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Delivery Category crate successfully',
    data: result,
  });
});

const getAllDeliveryCategory = catchAsync(async (req, res) => {
  const result = await DeliveryCategoryServices.getAllDeliveryCategoryFromDB(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Delivery Category get succesfully',
    data: result,
  });
});

const getSingleDeliveryCategory = catchAsync(async (req, res) => {
  const result = await DeliveryCategoryServices.getSingelDeliveryCategory(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Delivery Category find succesfully',
    data: result,
  });
});

const updateDeliveryCategory = catchAsync(async (req, res) => {
  const result = await DeliveryCategoryServices.UpdateDeliveryCategoryintoDB(req.params.id,req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Delivery Category update succesfully',
    data: result,
  });
});

const deleteSingleDeliveryCategory = catchAsync(async (req, res) => {
  const result = await DeliveryCategoryServices.deleteSingleDeliveryCategory(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Delivery Category Delete succesfully',
    data: result,
  });
});

export const DeliveryCategoryControllers = {
  createDeliveryCategory,
  getAllDeliveryCategory,
  getSingleDeliveryCategory,
  updateDeliveryCategory,
  deleteSingleDeliveryCategory
};
