import { NavLink } from "react-router-dom";
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Dashboard, UploadFile } from "@mui/icons-material"; 
import LogoutIcon from '@mui/icons-material/Logout';


//api
import logoutUser from "../api/logoutApi";

const menuItems = [
  { name: "Dashboard", path: "/dashboard", icon: <Dashboard /> },
  { name: "Upload Images", path: "/upload", icon: <UploadFile /> },
];

const handleLogout = async() => {
  await logoutUser();
}

const Sidebar = () => {
  return (
    <Drawer variant="permanent">
        <div className="flex font-bold text-lg justify-center p-5">CMS STAN</div>
        <Divider />
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.path} disablePadding>
            <ListItemButton component={NavLink} to={item.path}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton component={NavLink} to={"/login"} onClick={handleLogout}>
            <ListItemIcon><LogoutIcon /></ListItemIcon>
            <ListItemText>Log Out</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
