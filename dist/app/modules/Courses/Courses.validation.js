"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoursesValidation = void 0;
const zod_1 = require("zod");
const createCourses = zod_1.z.object({
    body: zod_1.z.object({
        year: zod_1.z.number({
            required_error: 'year is Required (zod)',
        }),
        title: zod_1.z.string({
            required_error: 'title is Required (zod)',
        })
    }),
});
exports.CoursesValidation = { createCourses };
