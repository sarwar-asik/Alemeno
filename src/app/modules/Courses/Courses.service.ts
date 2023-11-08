import { Courses } from '@prisma/client';
import prisma from '../../../shared/prisma';

const insertDB = async (data: Courses): Promise<Courses> => {
  const result = await prisma.courses.create({
    data,
  });

  return result;
};

const getAllDb = async () :Promise<Courses[]>=> {
  const result = await prisma.courses.findMany();

  return result;
};
export const CoursesService = { insertDB ,getAllDb};
