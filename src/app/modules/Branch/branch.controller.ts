import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { BranchServices } from './branch.service';




const createBranch = catchAsync(async (req, res) => {
  const result = await  BranchServices.createBranchintoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Delivery Branch successfully',
    data: result,
  });
});

const getAllBranch = catchAsync(async (req, res) => {
  const result = await BranchServices.getAllBranchFromDB(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Branch get succesfully',
    data: result,
  });
});

const getSingleBranch = catchAsync(async (req, res) => {
  const result = await BranchServices.getSingleBranch(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Branch find succesfully',
    data: result,
  });
});

const updateBranch = catchAsync(async (req, res) => {
  const result = await BranchServices.UpdateBranchintoDB(req.params.id,req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Branch update succesfully',
    data: result,
  });
});

const deleteSingleBranch = catchAsync(async (req, res) => {
  const result = await BranchServices.deleteSingleBranch(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Branch Delete succesfully',
    data: result,
  });
});

export const BranchControllers = {
  createBranch,
  getAllBranch,
  getSingleBranch,
  updateBranch,
  deleteSingleBranch
};
