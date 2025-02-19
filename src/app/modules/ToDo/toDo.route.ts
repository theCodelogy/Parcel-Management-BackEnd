
import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ToDoValidations } from './toDo.validation';
import { ToDoControllers } from './toDo.controller';




const router = express.Router();
// create ToDo
router.post(
  '/',
  validateRequest(ToDoValidations.createToDoValidation),
  ToDoControllers.createToDo,
);

// Get all ToDo
router.get(
  '/',
  ToDoControllers.getAllToDo,
);

// Update single ToDo
router.patch(
  '/:id',
  validateRequest(ToDoValidations.updateToDoValidation),
  ToDoControllers.updateToDo,
);

// Get single ToDo
router.get(
  '/:id',
  ToDoControllers.getSingleToDo,
);

// delete single ToDo
router.delete(
  '/:id',
  ToDoControllers.deleteSingleToDo,
);

export const ToDoRoutes = router;
