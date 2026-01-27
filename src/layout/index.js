import { Box } from "@mui/material";
import { Outlet } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import "../App.css"

function Layout() {
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