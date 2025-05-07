import Header from "./Header";
import Footer from "./Footer";
import { Box, Toolbar } from "@mui/material";
import { Outlet } from 'react-router-dom';
import "../App.css"

function Layout() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <Header />
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}>
        <Toolbar sx={{ height: { xl: "66.02px", lg: "66.02px", md: "66.02px", sm: "56px", xs: "56px" } }} />
        <Outlet />
      </Box>
      <Footer />
    </Box>
  )
}

export default Layout;