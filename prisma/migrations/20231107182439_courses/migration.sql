-- CreateTable
CREATE TABLE "Courses" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "instructor" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "enrollmentStatus" TEXT NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "schedule" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "prerequisites" TEXT[],

    CONSTRAINT "Courses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Syllabus" (
    "id" SERIAL NOT NULL,
    "week" INTEGER NOT NULL,
    "topic" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "courseId" INTEGER NOT NULL,

    CONSTRAINT "Syllabus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "courseId" INTEGER NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Syllabus" ADD CONSTRAINT "Syllabus_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
