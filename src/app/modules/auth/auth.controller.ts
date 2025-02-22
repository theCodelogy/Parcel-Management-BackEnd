import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AuthServices } from "./auth.service";
import config from "../../config";


const loginUser = catchAsync(async (req, res) => {
  const { accessToken, user, rfreshToken} = await AuthServices.loginUser(req.body);
  const token = `Bearer ${accessToken}`;
  res.cookie('refreshToken', rfreshToken, {
    secure: config.NODE_ENV === 'production',
    httpOnly: true,
  });
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User logged in successfully",
    data: {
      token: token,
      user,
    },
  });
});

export const AuthControllers = {
  loginUser,
};
