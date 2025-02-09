import Breadcrumb from "@/components/Common/Breadcrumb";
import PrivacyPolicy from "@/components/Privacypolicy/privacypolicy";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Accotomate",
  description: "This is the Privacy Policy page for Accotomate.",
  // other metadata
};

const PrivacypolicyPage = () => {
  return (
    <>
      {/* <Breadcrumb
        pageName="Privacy Policy"
        description="Learn how we collect, use, and protect your information."
      /> */}

      <PrivacyPolicy />
    </>
  );
};

export default PrivacypolicyPage;
