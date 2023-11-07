import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
const MainLayout = () => {
  return (
    <div style={{
      // background:"blue"
    }}>
      <Navbar />

      <Outlet></Outlet>

      <Footer />
    </div>
  );
};

export default MainLayout;
