import "./App.css";
import Courses from "./components/courses/Courses";

function HomePage() {
  return (
    <div
      style={{
        minHeight: "100vh",
      }}
    >
      <Courses></Courses>
      <h2>This is Home page</h2>
    </div>
  );
}

export default HomePage;
