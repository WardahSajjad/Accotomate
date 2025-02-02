import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Accotomate",
  description: "This is Contact Page for Accotomate",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Discuss your requirements, learn about custom pricing, or request a demonstration."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
