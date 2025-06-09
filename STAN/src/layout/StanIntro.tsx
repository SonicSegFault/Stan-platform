import Lottie from "lottie-react";
import rocketAnimation from "../assets/rocketanimation.json";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import ImageReveal from "../theme/ImageReveal";

const StanIntro = () => {
  return (
    <div className="flex flex-row items-center text-center w-full max-w-5xl gap-x-4 md:gap-x-8 lg:gap-x-20">
      {/* Text Section */}
      <div className="text-white w-1/2 text-2xl font-semibold text-lg md:text-xl lg:text-2xl hover:scale-105 transition-transform duration-300">
        <span>Science Teachers' Association of Nepal - STAN</span>
        <hr className="border-t border-white mt-2" />
        <span className="text-base md:text-lg lg:text-xl font-medium">
          Non-profit, Non-Government, Scientific Welfare Organization
        </span>
        <br></br>
        <span className="text-base md:text-lg lg:text-xl font-medium">जय विज्ञान ! जय स्टान !</span>
        <br></br>
        <br></br>
        <NavLink to="/aboutus" className="text-white hover:text-gray-500">
          <Button variant="contained">About Us</Button>
        </NavLink>
      </div>

      {/* Animation Section */}
      <div className="w-1/2 flex justify-end">
        <ImageReveal>
          <Lottie
            animationData={rocketAnimation}
            style={{ height: "500px", width: "500px" }}
          />
        </ImageReveal>
      </div>
    </div>
  );
};

export default StanIntro;
