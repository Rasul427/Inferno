import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
const Root = () => {
  useEffect(() => {
    document.title = "inferno";
  }, []);

  return (
    <>
      <div className="container">
        <Header />
      </div>
      <Outlet />

        <Footer />

    </>
  );
};

export default Root;
