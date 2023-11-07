import { Row } from "antd";
import { useEffect, useState } from "react";
import SingleCourses from "./SingleCourses";
import { ICourse } from "../../type/course";

const Courses = () => {
  const [courses, setCourses] = useState<any>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/courses.json");
        const data = await res.json();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);
//   console.log(courses, "Courses");
  return (
    <div>
      <h2>Courses Page{courses.length}</h2>
      <Row gutter={[10,10]}>
        {
            courses?.map((course:ICourse,i:number)=>{
                return <SingleCourses  course={course} key={i}/>
            })
        }
      </Row>
    </div>
  );
};

export default Courses;
