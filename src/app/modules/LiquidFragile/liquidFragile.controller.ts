import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { LiquidFragileServices } from './liquidFragile.service';





const createLiquidFragile= catchAsync(async (req, res) => {
  const result = await  LiquidFragileServices.createLiquidFragileintoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'LiquidFragile crate successfully',
    data: result,
  });
});

const getAllLiquidFragile = catchAsync(async (req, res) => {
  const result = await LiquidFragileServices.getAllLiquidFragileFromDB(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All LiquidFragile get succesfully',
    data: result,
  });
});

const getSingleLiquidFragile = catchAsync(async (req, res) => {
  const result = await LiquidFragileServices.getSingelLiquidFragile(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' LiquidFragile find succesfully',
    data: result,
  });
});

const updateLiquidFragile = catchAsync(async (req, res) => {
  const result = await LiquidFragileServices.UpdateLiquidFragileintoDB(req.params.id,req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' LiquidFragile update succesfully',
    data: result,
  });
});

const deleteSingleLiquidFragile = catchAsync(async (req, res) => {
  const result = await LiquidFragileServices.deleteSingleLiquidFragile(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'LiquidFragile Delete succesfully',
    data: result,
  });
});

export const LiquidFragileControllers = {
  createLiquidFragile,
  getAllLiquidFragile,
  getSingleLiquidFragile,
  updateLiquidFragile,
  deleteSingleLiquidFragile
};
