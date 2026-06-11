import { useEffect } from "react";
import { Outlet, useLocation } from 'react-router-dom';
import { Box } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./Header";
import Footer from "./Footer";
import "../App.css"

function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, [pathname]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%", overflow: "hidden" }}>
      <Header />
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        overflow: "hidden"
      }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  )
}

export default Layout;