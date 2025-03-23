import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { PackagingServices } from './Packaging.service';






const createPackaging = catchAsync(async (req, res) => {
  const result = await  PackagingServices.createPackagingintoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Packaging crate successfully',
    data: result,
  });
});

const getAllPackaging = catchAsync(async (req, res) => {
  const result = await PackagingServices.getAllPackagingFromDB(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Packaging get succesfully',
    data: result,
  });
});

const getSinglePackaging = catchAsync(async (req, res) => {
  const result = await PackagingServices.getSingelPackaging(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Packaging find succesfully',
    data: result,
  });
});

const updatePackaging = catchAsync(async (req, res) => {
  const result = await PackagingServices.UpdatePackagingintoDB(req.params.id,req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Packaging update succesfully',
    data: result,
  });
});

const deleteSinglePackaging = catchAsync(async (req, res) => {
  const result = await PackagingServices.deleteSinglePackaging(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Packaging Delete succesfully',
    data: result,
  });
});

export const PackagingControllers = {
  createPackaging,
  getAllPackaging,
  getSinglePackaging,
  updatePackaging,
  deleteSinglePackaging
};
