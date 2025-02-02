import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Accotomate",
  description: "Discover the story behind Accotomate and how we empower businesses with innovative financial solutions.",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Accotomate"
        description="Accotomate was born from a simple yet powerful idea: to help businesses streamline their financial operations through technology and expertise. We empower businesses to save time, reduce errors, and gain control over their finances."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;