import httpStatus from "http-status";
import config from "../../config";
import {  TLoginUser } from "./auth.interface";
import { createToken } from "./auth.utils";
import AppError from "../../errors/AppError";
import { SuperAdmin } from "../superAdmin/superAdmin.model";
import { Merchant } from "../Merchant/Merchant.model";
import { DeliveryMan } from "../Delivery Man/deliveryMan.model";

const loginUser = async (payload: TLoginUser) => {
  // checking if the user is exist
  let user;
  const superAdmin = await SuperAdmin.userExists(payload.emailORphone);
  const merchant = await Merchant.isMerchantExists(payload.emailORphone);
  const deliveryMan = await DeliveryMan.isDeliveryManExists(
    payload.emailORphone
  );

  // Check is password valid or not
  if (superAdmin) {
    //checking if the password is correct
    if (
      await SuperAdmin.isPasswordMatched(
        payload?.password,
        superAdmin?.password
      )
    ) {
      user = superAdmin;
    } else {
      throw new AppError(httpStatus.FORBIDDEN, "Password do not matched");
    }
  } else if (merchant) {
    if (
      await Merchant.isPasswordMatched(payload?.password, merchant?.password)
    ) {
      user = merchant;
    } else {
      throw new AppError(httpStatus.FORBIDDEN, "Password do not matched");
    }
  } else if (deliveryMan) {
    if (
      await DeliveryMan.isPasswordMatched(
        payload?.password,
        deliveryMan?.password
      )
    ) {
      user = deliveryMan;
    } else {
      throw new AppError(httpStatus.FORBIDDEN, "Password do not matched");
    }
  } else {
    throw new AppError(httpStatus.NOT_FOUND, "This user is not found !");
  }

 

  //create token and sent to the  client
  const jwtPayload = {
    email: user.email,
    phone: user.phone,
    role: user.role,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_secret as string,
    config.jwt_access_expair as string
  );

  const rfreshToken = createToken(
    jwtPayload,
    config.jwt_secret as string,
    config.jwt_refresh_expair as string
  );

  return {
    accessToken,
    rfreshToken,
    user,
  };
};

const currentUser = async(query:Record<string, unknown>)=>{
  if(query.role=="Delivery Man"){
    const user = await DeliveryMan.findOne({email:query.email});
    return user;
  }else if(query.role=="Super Admin"){
    const user = await SuperAdmin.findOne({email:query.email});
    return user;
  }else if(query.role=="Merchant"){
    const user = await Merchant.findOne({email:query.email});
    return user;
  }else{
    throw new AppError(httpStatus.NOT_FOUND, "This user is not found !");
  }
}

export const AuthServices = {
  loginUser,
  currentUser
};
