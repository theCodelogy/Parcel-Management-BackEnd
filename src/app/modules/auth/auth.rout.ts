import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { AuthControllers } from "./auth.controller";
import { AuthValidation } from "./auth.validation";
import { UserValidation } from "../superAdmin/superAdmin.validation";
import { SuperAdminControllers } from "../superAdmin/superAdmin.controller";

const router = express.Router();

router.post(
  "/signup",
  validateRequest(UserValidation.createSuperAdminValidationSchema),
  SuperAdminControllers.createSuperAdmin
);

router.post(
  "/login",
  validateRequest(AuthValidation.loginValidationSchema),
  AuthControllers.loginUser
);

export const AuthRoutes = router;
