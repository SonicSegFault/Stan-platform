import { Button, IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

export function PageHeader() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  return (
    <div className="flex justify-between items-center p-4 bg-transparent top-0 left-0 w-full z-10">
      {/* Left side */}
      <div className="flex items-center md:ml-12 sm:ml-0">
        <img
          src="/stanlogonoremoved.jpg"
          alt="STAN Logo"
          className="h-16 md:h-20 rounded-full"
        />
        <span className="ml-5 text-xl text-white font-bold text">STAN</span>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <IconButton onClick={toggleSidebar} sx={{ color: "white" }}>
          <MenuIcon />
        </IconButton>
      </div>

      {/* Right side */}
      <div className="space-x-4 mr-10 md:flex hidden gap-5 items-center">
        <NavLink to="/aboutus" className="text-white hover:text-gray-500">
          About Us
        </NavLink>
        <NavLink to="/program" className="text-white hover:text-gray-500">
          Our Program
        </NavLink>
        <NavLink to="/membership" className="text-white hover:text-gray-500">
          Membership
        </NavLink>
        <NavLink to="/contact" className="text-white hover:text-gray-500">
          <Button variant="contained">Contact Us</Button>
        </NavLink>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-black text-white z-20 transition-transform duration-300 ease-in-out transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col space-y-10 p-4">
          <NavLink to="/about" className="hover:text-gray-500 mt-10" onClick={closeSidebar}>
            About Us
          </NavLink>
    
          <NavLink to="/program" className="hover:text-gray-500" onClick={closeSidebar}>
            Our Program
          </NavLink>

          <NavLink to="/membership" className="hover:text-gray-500" onClick={closeSidebar}>
            Membership
          </NavLink>

          <NavLink to="/contact" className="hover:text-gray-500" onClick={closeSidebar}>
            Contact Us
          </NavLink>

        </div>
      </div>

      
      {/* Overlay when sidebar is open */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10"
          onClick={closeSidebar}
        />
      )}
    </div>
  );
}
