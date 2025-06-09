import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';

const MiniPageHeader = () => {
  return (
    <div
      className="flex justify-between items-center p-4 
       top-0 left-0 w-full z-10"
    >
      {/* Logo */}
      <div className="flex items-center md:ml-12 sm:ml-0">
        <img
          src="/stanlogonoremoved.jpg"
          alt="STAN Logo"
          className="h-16 md:h-20 rounded-full"
        />
      </div>

      {/* Right section */}
        <div className="flex mr-10 space-x-4 gap-5 items-center">
            <NavLink to="/">
                <Button startIcon={<HomeIcon/>} variant="contained">Home</Button>
            </NavLink>
        </div>
    </div>
  );
};

export default MiniPageHeader;
