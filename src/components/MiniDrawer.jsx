import React, { useState, useEffect } from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HomePage from "../pages/HomePage";

function MiniDrawer() {
  const { collapseSidebar } = useProSidebar();
  const [isCollapsed, setIsCollapsed] = useState(true);

  useEffect(() => {
    collapseSidebar();
  }, []);

  const handleMenuClick = () => {
    setIsCollapsed(!isCollapsed);
    collapseSidebar();
  };

  return (
    <div id="app" style={{ height: "100vh", display: "flex" }}>
      <Sidebar collapsed={isCollapsed} style={{ height: "100vh" }}>
        <Menu>
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={handleMenuClick}
            style={{ textAlign: "center" }}
          >
            <h2>Admin</h2>
          </MenuItem>

          <MenuItem icon={<HomeOutlinedIcon />}>Home</MenuItem>
          <MenuItem icon={<PeopleOutlinedIcon />}>Team</MenuItem>
          <MenuItem icon={<ContactsOutlinedIcon />}>Contacts</MenuItem>
          <MenuItem icon={<ReceiptOutlinedIcon />}>Profile</MenuItem>
          <MenuItem icon={<HelpOutlineOutlinedIcon />}>FAQ</MenuItem>
          <MenuItem icon={<CalendarTodayOutlinedIcon />}>Calendar</MenuItem>
        </Menu>
      </Sidebar>
      <main>
        <HomePage />
      </main>
    </div>
  );
}

export default MiniDrawer;
