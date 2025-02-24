import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { AuthControllers } from "./auth.controller";
import { AuthValidation } from "./auth.validation";
import { SuperAdminControllers } from "../superAdmin/superAdmin.controller";

const router = express.Router();

router.post(
  "/login",
  validateRequest(AuthValidation.loginValidationSchema),
  AuthControllers.loginUser
);

router.get(
  "/user",
  AuthControllers.getCurrentUser
);

export const AuthRoutes = router;
