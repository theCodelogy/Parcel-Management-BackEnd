import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ToDoServices } from './toDo.service';




const createToDo = catchAsync(async (req, res) => {
  const result = await  ToDoServices.createToDointoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'ToDo crate successfully',
    data: result,
  });
});

const getAllToDo = catchAsync(async (req, res) => {
  const result = await ToDoServices.getAllToDoFromDB(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All ToDo get succesfully',
    data: result,
  });
});

const getSingleToDo = catchAsync(async (req, res) => {
  const result = await ToDoServices.getSingelToDo(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' ToDo find succesfully',
    data: result,
  });
});

const updateToDo = catchAsync(async (req, res) => {
  const result = await ToDoServices.UpdateToDointoDB(req.params.id,req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' ToDo update succesfully',
    data: result,
  });
});

const deleteSingleToDo = catchAsync(async (req, res) => {
  const result = await ToDoServices.deleteSingleToDo(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'ToDo Delete succesfully',
    data: result,
  });
});

export const ToDoControllers = {
  createToDo,
  getAllToDo,
  getSingleToDo,
  updateToDo,
  deleteSingleToDo
};
