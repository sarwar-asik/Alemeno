import express from 'express';
import { CoursesRoutes } from '../modules/Courses/Courses.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/courses',
    routes: CoursesRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
