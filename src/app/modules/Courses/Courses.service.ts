import { Courses } from '@prisma/client';
import prisma from '../../../shared/prisma';

const insertDB = async (data: Courses): Promise<Courses> => {
  console.log('🚀 ~ file: Courses.service.ts:5 ~ insertDB ~ data:', data);

  const result = await prisma.courses.create({
    data,
  });

  return result;
};

const getAllDb = async (): Promise<Courses[]> => {
  const result = await prisma.courses.findMany({
    include: {
      students: true,
      syllabus: true,
    },
  });

  return result;
};
export const CoursesService = { insertDB, getAllDb };
