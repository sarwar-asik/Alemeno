
import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";

const insertDB = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const result = await CoursesService.insertDB(data)

  sendResponse<Courses>(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Successfully Courses',
    data: result,
  });
});

export const CoursesController = {insertDB};
