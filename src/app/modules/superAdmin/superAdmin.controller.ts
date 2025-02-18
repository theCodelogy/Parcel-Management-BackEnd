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

export const SuperAdminControllers = {
  createSuperAdmin,
  getAllSuperAdmin,
};
