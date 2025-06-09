import { IconButton } from "@mui/material";
import MiniPageHeader from "../layout/MiniPageHeader";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import ImageReveal from "../theme/ImageReveal";
import Reveal from "../theme/Reveal";
import Lottie from "lottie-react";
import microscopeanimation from "../assets/microscopeanimation.json";
import ContactUs from "../layout/ContactUs";
import PageFooter from "../layout/PageFooter";

const AboutUs = () => {
  return (
    <div className="relative">
      <section>
        <div className="bg-black">
          <div className="w-full top-0 mb-10">
            <MiniPageHeader />
          </div>
          <div className="flex flex-col space-y-10 relative items-top justify-top h-[70vh] mx-auto max-w-4xl text-white text-center px-4">
            <Reveal color="white">
              <span className="text-5xl font-bold">
                Enhance the professional competence of science teachers
              </span>
            </Reveal>
            <Reveal color="white">
              <span className="text-2x1 hidden tracking-wider sm:flex">
                STAN focuses on innovation and learning while enhancing academic
                excellence through research and development. It promotes
                scientific thinking, skill development, and practical,
                research-oriented teaching to foster creativity and real-world
                problem-solving. By integrating science into the community, STAN
                aims to inspire innovation and advance impactful education.
              </span>
            </Reveal>
          </div>
        </div>
        <div className="flex-col mb-10 lg:justify-end lg:ml-60 md:-mt-80 sm:-mt-10 xs:-mt-20">
          <div className="space-x-3 flex justify-end mr-20 ">
            <Reveal color="white">
              <IconButton className="hover:-translate-y-2 transition-transform">
                <CorporateFareIcon style={{ color: "white" }} />
              </IconButton>
              <IconButton className="hover:-translate-y-2 transition-transform">
                <EmailIcon style={{ color: "white" }} />
              </IconButton>
              <IconButton className="hover:-translate-y-2 transition-transform">
                <FacebookIcon style={{ color: "white" }} />
              </IconButton>
            </Reveal>
          </div>
          <div className="flex justify-end">
            <ImageReveal>
              <img src="public/Stancoverimage.jpg" />
            </ImageReveal>
          </div>
        </div>
        <div className="flex flex-row gap-20">
          <div className="hidden lg:flex">
            <Lottie
              animationData={microscopeanimation}
              style={{ height: "500px", width: "500px" }}
            />
          </div>
          <div className="mt-40 mr-10 xs:mt-20 ml-auto flex justify-end max-w-6xl">
            <ImageReveal>
              <span className="text-5x1 leading-[2.5] tracking-wider">
                The Science Teachers' Association of Nepal (STAN) is a
                professional umbrella organization representing over 30,000
                school-level science teachers across Nepal. Since its inception,
                STAN has been facilitating the qualitative promotion of science
                teaching from grades 1 to 12. The organization's foundations
                date back to 2050 B.S., with active efforts in districts such as
                Kathmandu, Nuwakot, and Bhojpur. Various groups across the
                country consolidated their efforts under names such as NAST in
                Kathmandu (2052 B.S.) and SETS in Tanahun (2056 B.S.),
                culminating in the establishment of STAN as a national entity on
                Falgun 26, 2066 B.S.
              </span>
            </ImageReveal>
          </div>
        </div>
      </section>

      <section>
        <Reveal color="black">
          <div className="flex justify-center my-10">
            <span className="text-5xl font-bold">
              Organizational Structure: STAN
            </span>
          </div>
        </Reveal>
        <div className="flex justify-center object-cover ">
          <ImageReveal>
            <img
              className="transition-transform duration-300 hover:scale-105"
              src="/organizationalstructureforstan.png"
            />
          </ImageReveal>
        </div>
      </section>

      <section>
        <div className="bg-black min-h-screen"></div>
      </section>
      
      {/* Footer Section with Contact us   */}
      <section>
        <div className="min-h-screen">
          <ContactUs/>
          <br></br>
          <PageFooter/>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
