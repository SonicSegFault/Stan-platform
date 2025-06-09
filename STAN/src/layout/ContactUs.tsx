import { Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Lottie from "lottie-react";
import contactusanimation from "../assets/contactussvganimation.json"
import Reveal from "../theme/Reveal";


const ContactUs = () => {
  return (
    <div className="min-h-[80vh] h-auto flex flex-col md:flex-row space-x-8 items-center justify-center">
      {/* Left Side */}
      <div className="w-full md:w-1/2 p-6">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Contact Us</h2>
          <p className="text-gray-500">
            Have any questions? We'd love to hear from you. Fill out the form and we'll get back to you as soon as possible.
          </p>
        <Lottie animationData={contactusanimation} 
        style={{ height: "500px", width: "500px" }}/>
        <br></br>
        <Reveal color="gray-500">
          <p className="text-gray-500 flex items-center">
            <img src="/locationlogo.png" className="h-10"/>
            Paropakar Marg, Bhimsenthan, Kathmandu MPC 20, Kathmandu, Nepal
          </p>
        </Reveal>
      </div>

      {/* Right Side */}
      <div className="max-w-[500px] md:w-1/2 p-6">
        <form className="flex flex-col space-y-4">
            <TextField
              variant="outlined"
              label="Enter Full Name"
              fullWidth
              className="bg-white"
            />
          <TextField 
            required 
            variant="outlined" 
            label="Enter Email" 
            fullWidth 
            className="bg-white"
          />
          <TextField 
            id="outlined-multiline-static" 
            multiline 
            rows={4} 
            variant="outlined" 
            label="Enter Message" 
            fullWidth 
            className="bg-white"
          />
          <Button 
            variant="contained" 
            endIcon={<SendIcon />} 
            className="self-end bg-blue-600 hover:bg-blue-700 text-white"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
