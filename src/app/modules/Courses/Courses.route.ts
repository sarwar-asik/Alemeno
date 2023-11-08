
import { Router } from 'express';
import { CoursesController } from './Courses.controller';

const router = Router();
router.get('/', CoursesController.getAllDb);
router.post('/', CoursesController.insertDB);

export const CoursesRoutes = router;
