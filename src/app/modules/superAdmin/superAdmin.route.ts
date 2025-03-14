import express from "express";
import { SuperAdminControllers } from "./superAdmin.controller";
import validateRequest from "../../middlewares/validateRequest";
import { UserValidation } from "./superAdmin.validation";

const router = express.Router();
// create user
router.post(
  "/",
  validateRequest(UserValidation.createSuperAdminValidationSchema),
  SuperAdminControllers.createSuperAdmin
);

// Get all users
router.get("/", 
  SuperAdminControllers.getAllSuperAdmin);

export const SuperAdimnRoutes = router;
