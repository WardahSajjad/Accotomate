import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import Bookkeeping from "@/components/Services/Bookkeeping";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech-driven Bookkeeping | Accotomate",
  description: "This is the Tech-driven bookkeeping page for Accotomate.",
  // other metadata
};

const BookkeepingPage = () => {
  return (
    <>
      {/* <Breadcrumb
        pageName="Tech-driven bookkeeping"
        description="Tech-Driven Bookkeeping At Accotomate, we redefine bookkeeping by integrating advanced technology and automation into every aspect of financial management."
      /> */}

      <Bookkeeping />
    </>
  );
};

export default BookkeepingPage;
