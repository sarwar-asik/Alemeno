
import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { CoursesService } from "./Courses.service";
import { Courses } from "@prisma/client";

const insertDB = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const result = await CoursesService.insertDB(data)

  sendResponse<Courses>(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Successfully create Courses',
    data: result,
  });
});
const getAllDb = catchAsync(async (req: Request, res: Response) => {

  const result = await CoursesService.getAllDb()

  sendResponse<Courses[]>(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Successfully fetched Courses',
    data: result,
  });
});

export const CoursesController = {insertDB,getAllDb};
