import express from "express";
import { SuperAdminControllers } from "./superAdmin.controller";
import validateRequest from "../../middlewares/validateRequest";
import { UserValidation } from "./superAdmin.validation";

const router = express.Router();
// create SuperAdmin
router.post(
  "/",
  validateRequest(UserValidation.createSuperAdminValidationSchema),
  SuperAdminControllers.createSuperAdmin
);

// Get all SuperAdmin
router.get("/", 
  SuperAdminControllers.getAllSuperAdmin);

// update single SuperAdmin
router.patch(
  '/:id',
  // auth("Super Admin","Merchant"),
  SuperAdminControllers.updateSuperAdmin,
);

// Get single SuperAdmin
router.get(
  '/:id',
  // auth("Super Admin","Merchant"),
  SuperAdminControllers.getSingleSuperAdmin,
);

// delete single Super admin
router.delete(
  '/:id',
  // auth("Super Admin"),
  SuperAdminControllers.deleteSingleSuperAdmin,
);

export const SuperAdimnRoutes = router;
