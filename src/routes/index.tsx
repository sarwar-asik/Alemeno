import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../App";
import CourseDetails from "../components/courses/CourseDetails";
import UserDashBoard from "../layout/DashBoardLayout";
import Courses from "../components/courses/Courses";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/courseDetails/:name", element: <CourseDetails /> },
    ],
  },
  {
    path: "/dashboard",
    element: <UserDashBoard />,
    children: [
      {
        path: "/dashboard/course",
        element: <Courses/>,
      },
    ],
  },
]);

export default routes;
