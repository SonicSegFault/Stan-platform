//layouts
import { PageHeader } from "../layout/PageHeader";
import Section1 from "../layout/Section1";
import StanIntro from "../layout/StanIntro";
import Section0 from "../layout/Section0";
import PageFooter from "../layout/PageFooter";

//components
import NoticeSlider from "../components/NoticeSlider";
import ScrollDown from "../components/ScrollDown";

//data

import ContactUs from "../layout/ContactUs";


//Check List
//Change the images for cards in section0 with icons images
//Web3forms for contact us

function StanLanding() {
  return (
    <div className="relative ">
      {/* Intro Section with Animated Background */}
      <section>
        <div
          className="min-h-[80vh] h-auto w-full bg-cover bg-center flex flex-col items-center justify-center
        animated-background "
        >
          {/* Header */}
          <div className="top-0 w-full z-50">
            <PageHeader />
          </div>
          <StanIntro />
          <div className="mt-auto">
            <ScrollDown targetId="Section0" />
          </div>
        </div>
      </section>

      {/* Section 0 */}
      <section>
        <div id="Section0" className="flex flex-col min-h-screen">
          <div className="">
            <Section0 />
          </div>
          <div className="mt-12"></div> 
          {/* Notice Board */}
          <div className="mt-auto">
            <NoticeSlider />
          </div>
        </div>
      </section>

      {/* Section 1 */}
      <section>
        <div
          id="Section1"
          className="min-h-screen w-full bg-black flex items-center justify-center relative z-10 hidden lg:flex"
        >
          <div className="shadow-lg w-full">
            <Section1 />
          </div>
        </div>
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
}

export default StanLanding;
