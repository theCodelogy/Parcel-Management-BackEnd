import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { MerchantServices } from './Merchant.service';




const createMerchant = catchAsync(async (req, res) => {
  const result = await  MerchantServices.createMerchantintoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Delivery Merchant successfully',
    data: result,
  });
});

const getAllMerchant = catchAsync(async (req, res) => {
  const result = await MerchantServices.getAllMerchantFromDB(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Merchants get succesfully',
    data: result,
  });
});

const getSingleMerchant = catchAsync(async (req, res) => {
  const result = await MerchantServices.getSingleMerchant(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Merchants find succesfully',
    data: result,
  });
});

const updateMerchant = catchAsync(async (req, res) => {
  const result = await MerchantServices.UpdateMerchantintoDB(req.params.id,req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Merchants update succesfully',
    data: result,
  });
});

const deleteSingleMerchant = catchAsync(async (req, res) => {
  const result = await MerchantServices.deleteSingleMerchant(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Merchants Delete succesfully',
    data: result,
  });
});

export const MerchantControllers = {
  createMerchant,
  getAllMerchant,
  updateMerchant,
  getSingleMerchant,
  deleteSingleMerchant
};
