import express from 'express';
import { UserControllers } from './user.controller';
import validateRequest from '../../middlewares/validateRequest';
import { UserValidation } from './user.validation';



const router = express.Router();
// create user
router.post(
  '/',
  validateRequest(UserValidation.createUserValidationSchema),
  UserControllers.createUser,
);

// Get all users
router.get(
  '/',
  UserControllers.getAllUsers,
);

export const UserRoutes = router;
