"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoursesRoutes = void 0;
const express_1 = require("express");
const Courses_controller_1 = require("./Courses.controller");
const router = (0, express_1.Router)();
router.get('/', Courses_controller_1.CoursesController.getAllDb);
router.post('/', Courses_controller_1.CoursesController.insertDB);
exports.CoursesRoutes = router;
