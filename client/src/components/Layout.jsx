import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "./NavBar";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { useGetUserQuery } from "../state/api";
import { useSelector } from "react-redux";

const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const userId = useSelector((state) => state.global.userId);
  const { data } = useGetUserQuery(userId);

  return (
    <Box display={isNonMobile ? "flex" : "block"} width='100%' height='100%'>
      <Sidebar
        isNonMobile={isNonMobile}
        drawerWidth='250px'
        isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
        user={data || {}}
      />
      <Box flexGrow={1}>
        <Navbar
          user={data || {}}
          isSideBarOpen={isSideBarOpen}
          setIsSideBarOpen={setIsSideBarOpen}
        />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
