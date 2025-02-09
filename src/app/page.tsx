import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";
import QuickBooksAutomationPage from "@/components/Services/Quickbooks";
import Bookkeeping from "@/components/Services/Bookkeeping";

export const metadata: Metadata = {
  title: "Accotomate",
  description: "This is Home for Accotomate",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
    
      <Testimonials />
   
      <Contact />

    </>
  );
}
