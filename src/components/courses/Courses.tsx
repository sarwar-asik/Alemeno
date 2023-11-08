import { Row } from "antd";

import SingleCourses from "./SingleCourses";
import { ICourse } from "../../type/course";
import useFetchData from "../../hooks/useFetchData";

const Courses = () => {

//! called hook for fetch data/

  const [courses] = useFetchData("/courses.json");

  // console.log(courses);


  //   console.log(courses, "Courses");
  return (
    <div>
      <h2>Courses Page{courses.length}</h2>
      <Row gutter={[10, 10]}>
        {courses?.map((course: ICourse, i: number) => {
          return <SingleCourses course={course} key={i} />;
        })}
      </Row>
    </div>
  );
};

export default Courses;
