import AboutSectionOne from "@/components/About/AboutSectionOne";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Features from "@/components/Features";
import Owner from "@/components/owner";
import Team from "@/components/Team";
import WhyChooseUs from "@/components/WhyChooseUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About"
}

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About"
        description="Unlocking the Pinnacle of Exceptional Services"
      />
      <AboutSectionOne />
      <Features />
      <WhyChooseUs />
      <Owner/>
      <Team />
    </>
  );
};

export default AboutPage;
