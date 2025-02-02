"use client";

import { motion } from "framer-motion";
import SectionTitle from "../Common/SectionTitle";
import { Lightbulb, RefreshCw, Users, FileText } from "lucide-react";
import WhyChooseUs from "./chooseus";


const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
  hover: {
    scale: 1.2,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10,
    },
  },
};

const AboutSectionTwo = () => {
  const cards = [
    {
      title: "Efficiency Through Technology",
      description:
        "We simplify bookkeeping with automation, real-time reporting, and AI-powered tools to help businesses save time and reduce errors.",
      icon: <Lightbulb className="text-orange-400" />,
    },
    {
      title: "Seamless Workflow Integration",
      description:
        "Our solutions connect tools like Google Sheets and QuickBooks for effortless data synchronization and streamlined workflows.",
      icon: <RefreshCw className="text-orange-400" />,
    },
    {
      title: "Client-Centric Services",
      description:
        "We deliver affordable, customized solutions tailored to each business's unique needs, ensuring maximum value and satisfaction.",
      icon: <Users className="text-orange-400" />,
    },
    {
      title: "Reliable Tax Compliance",
      description:
        "We ensure timely, accurate submissions and strategic planning for UK tax requirements, giving businesses peace of mind.",
      icon: <FileText className="text-orange-400" />,
    },
  ];


  return (
    <>
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="text-center">
            <h1 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">Our Agenda</h1>
            <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
              Accotomate was founded with a mission to revolutionize financial management for businesses. <br></br> We combine cutting-edge technology with professional expertise to simplify bookkeeping,  <br></br> streamline workflows, and ensure tax compliance.
            </p>
          </div>



          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                className="rounded-lg bg-white p-5 shadow-md dark:bg-dark dark:shadow-gray-800 cursor-pointer"
                initial="offscreen"
                whileInView="onscreen"
                whileHover="hover"
                viewport={{ once: true, amount: 0.1 }}
                variants={cardVariants}
                custom={index}
                transition={{ delay: index * 0.01 }}
              >
                <div className="flex items-center">
                  <span className="mr-3 text-2xl">{card.icon}</span>
                  <h3 className="text-lg font-semibold text-black dark:text-white sm:text-xl">
                    {card.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm font-medium leading-relaxed text-body-color sm:text-base">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <WhyChooseUs />
    </>
  );
};

export default AboutSectionTwo;