import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../App";
import CourseDetails from "../components/courses/CourseDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/courseDetails/:name", element: <CourseDetails/> },
    ],
  },
]);

export default routes;
