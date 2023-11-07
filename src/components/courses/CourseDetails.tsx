import { useEffect } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import "./courses.css";
import { useLocation } from "react-router-dom";
import { ICourse } from "../../type/course";




const CourseDetails = () => {
  const state = useLocation();
  // console.log("🚀 ~ file: CourseDetails.tsx:9 ~ state:", state)
  const course: ICourse = state.state;
    console.log("🚀 ~ file: CourseDetails.tsx:11 ~ course:", course);

  useEffect(() => {
    const swiper = new Swiper(".blog-slider", {
      spaceBetween: 30,
      effect: "fade",
      loop: true,
      mousewheel: {
        invert: false,
      },
      pagination: {
        el: ".blog-slider__pagination",
        clickable: true,
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  

  return (
    <div className="blog-slider">
      <div className="blog-slider__wrp swiper-wrapper">
        <div className="blog-slider__item swiper-slide">
          <div className="blog-slider__img">
            <img src={course.thumbnail} alt="" />
          </div>
          <div className="blog-slider__content">
            <span className="blog-slider__code">{course.duration}</span>
            <div className="blog-slider__title">L{course.name}</div>
            <div className="blog-slider__text">{course.description}</div>
            <section style={{ marginBlock:"1em",fontSize:"1em",display:"flex ", flexDirection:"column",gap:"0.6em"}}>
              <h6 >{course.instructor}</h6>
              <div className="">Status: {course.enrollmentStatus}</div>
              <div className="">Schedules {course.schedule}</div>
              <div className="">Location: {course.location}</div>
              <div className="">prerequisites {course.prerequisites}</div>
              <div className="">{course.syllabus.length}</div>
            </section>
            <a href="#" className="blog-slider__button">
              Enroll
            </a>
          </div>
        </div>

        {/* <div className="blog-slider__item swiper-slide">
        <div className="blog-slider__img">
          <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759871/jason-leung-798979-unsplash.webp" alt=""/>
        </div>
        <div className="blog-slider__content">
          <span className="blog-slider__code">26 December 2019</span>
          <div className="blog-slider__title">Lorem Ipsum Dolor2</div>
          <div className="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?</div>
          <a href="#" className="blog-slider__button">READ MORE</a>
        </div>
      </div>
      
      <div className="blog-slider__item swiper-slide">
        <div className="blog-slider__img">
          <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759871/alessandro-capuzzi-799180-unsplash.webp" alt=""/>
        </div>
        <div className="blog-slider__content">
          <span className="blog-slider__code">26 December 2019</span>
          <div className="blog-slider__title">Lorem Ipsum Dolor</div>
          <div className="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?</div>
          <a href="#" className="blog-slider__button">READ MORE</a>
        </div>
      </div> */}
      </div>
      <div className="blog-slider__pagination"></div>
    </div>
  );
};

export default CourseDetails;
