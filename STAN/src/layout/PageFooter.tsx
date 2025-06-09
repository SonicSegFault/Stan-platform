import { IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import waveImage from "/wave.png";
import "../pagefooter.css";

const PageFooter = () => {
  return (
    <div className="relative">
      {/* Wave Effect */}
      <div className="waves">
        <div
          className="wave"
          id="wave1"
          style={{ backgroundImage: `url(${waveImage})` }}
        ></div>
        <div
          className="wave"
          id="wave2"
          style={{ backgroundImage: `url(${waveImage})` }}
        ></div>
        <div
          className="wave"
          id="wave3"
          style={{ backgroundImage: `url(${waveImage})` }}
        ></div>
        <div
          className="wave"
          id="wave4"
          style={{ backgroundImage: `url(${waveImage})` }}
        ></div>
      </div>

      {/* Footer Content */}
      <div className="bg-[#3586FF] text-white flex flex-col items-center justify-center space-y-4 pt-16 pb-8">
        <div className="flex space-x-4">
          <IconButton className="hover:-translate-y-2 transition-transform">
            <AccountCircleIcon style={{ color: "white" }} />
          </IconButton>
          <IconButton className="hover:-translate-y-2 transition-transform">
            <GitHubIcon style={{ color: "white" }} />
          </IconButton>
          <IconButton className="hover:-translate-y-2 transition-transform">
            <LinkedInIcon style={{ color: "white" }} />
          </IconButton>
        </div>
        <p className="text-3x1 font-bold">Created by Suyog Acharya</p>
        <p className="text-xs">
          Copyright © Science Teachers' Association of Nepal - STAN 2024
        </p>
      </div>
    </div>
  );
};

export default PageFooter;
