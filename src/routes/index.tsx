import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../App";
import CourseDetails from "../components/courses/CourseDetails";
import UserDashBoard from "../layout/DashBoardLayout";
import Courses from "../components/courses/Courses";
import EnrolledStudent from "../components/dashboard/EnrolledStudent";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/courses", element: <Courses /> },
      { path: "/courseDetails/:name", element: <CourseDetails /> },
    ],
  },
  {
    path: "/dashboard",
    element: <UserDashBoard />,
    children: [
      {
        path: "/dashboard/courses",
        element: <Courses/>,
      },
      {
        path: "/dashboard/enrolled",
        element: <EnrolledStudent/>,
      },
    ],
  },
]);

export default routes;
