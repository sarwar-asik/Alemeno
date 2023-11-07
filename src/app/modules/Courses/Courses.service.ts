
import {  Prisma,Courses } from '@prisma/client';
import prisma from '../../../shared/prisma';

const insertDB = async (data: Courses): Promise<Courses> => {
  const result = await prisma.Courses.create({
    data,
  });

  return result;
};

export const CoursesService = {insertDB};
