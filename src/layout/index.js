import Header from "./Header";
import Footer from "./Footer";
import { Box, Toolbar } from "@mui/material";
import { Outlet } from 'react-router-dom';
import "../App.css"
import ParticlesCanvas from "../Components/Custom";
import { useLocation } from "react-router-dom";

function Layout() {
  const { pathname } = useLocation();
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