import Header from "./Header";
import Footer from "./Footer";
import { Box } from "@mui/material";
import { Outlet } from 'react-router-dom';
import "../App.css"

function Layout() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <Header />
      <Box sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  )
}

export default Layout;