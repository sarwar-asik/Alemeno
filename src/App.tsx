import "./App.css";
import Header from "./components/Home/Header";
import Courses from "./components/courses/Courses";

function HomePage() {
  return (
    <div
      style={{
        minHeight: "100vh",
      }}
    >
      <Header/>
      <Courses></Courses>
    </div>
  );
}

export default HomePage;
