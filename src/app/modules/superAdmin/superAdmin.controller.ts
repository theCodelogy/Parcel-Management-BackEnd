import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { SuperAdminServices } from "./superAdmin.service";

const createSuperAdmin = catchAsync(async (req, res) => {
  const result = await SuperAdminServices.createSuperAdminIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User create successfully",
    data: result,
  });
});

const getAllSuperAdmin = catchAsync(async (req, res) => {
  const result = await SuperAdminServices.getAllSuperAdminFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All user get succesfully",
    data: result,
  });
});

const getSingleSuperAdmin = catchAsync(async (req, res) => {
  const result = await SuperAdminServices.getSingleSuperAdmin(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' SuperAdmin find succesfully',
    data: result,
  });
});

const updateSuperAdmin = catchAsync(async (req, res) => {
  const result = await SuperAdminServices.UpdateSuperAdmin(req.params.id,req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' SuperAdmin update succesfully',
    data: result,
  });
});

const deleteSingleSuperAdmin = catchAsync(async (req, res) => {
  const result = await SuperAdminServices.deleteSingleSuperAdmin(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' SuperAdmin Delete succesfully',
    data: result,
  });
});

export const SuperAdminControllers = {
  createSuperAdmin,
  getAllSuperAdmin,
  getSingleSuperAdmin,
  updateSuperAdmin,
  deleteSingleSuperAdmin
};
