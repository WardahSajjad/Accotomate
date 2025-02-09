"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { BarChart, Cloud, Bot, Rocket } from "lucide-react";


const cardVariants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
};

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-green-500">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);


const List = ({ text }: { text: string }) => (
  <p className="mb-5 flex items-center text-lg font-medium text-body-color">
    <span className="mr-4 flex h-[30px] w-[60px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
      {checkIcon}
    </span>
    {text}
  </p>
);


const features = [
  { title: "End-to-End Bookkeeping Automation", description: "Automate transaction recording, bank reconciliations, and financial reporting with AI-powered tools. Say goodbye to manual entries and save hours of valuable time." },
  { title: "Real-Time Financial Insights", description: "Gain access to up-to-date financial data through cloud-based systems that keep your business in sync and ready for decision-making." },
  { title: "Expense Tracking and Categorization", description: "Automatically track, categorize, and analyze expenses to maintain financial accuracy and transparency." },
  { title: "Invoice and Payment Management", description: "Automate the creation, tracking, and payment of invoices to streamline cash flow and ensure timely payments." },
  { title: "Payroll Processing Integration", description: "Link payroll systems seamlessly with bookkeeping platforms for automated salary calculations, deductions, and reporting." },
  { title: "Tax-Ready Records", description: "Keep your financial records organized and compliant for smooth tax submissions and audits, eliminating last-minute stress." },
  { title: "Customizable Automation Workflows", description: "Tailor automation solutions to match your business's unique processes and reporting requirements." },
  { title: "Error Detection and Correction", description: "Utilize AI-driven tools to identify and correct errors in real-time, ensuring data integrity and compliance." }
];

const Bookkeeping = () => {
  return (
    <div>
      <section className="relative py-20 md:py-32 mt-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
              Tech-Driven Bookkeeping
            </h1>
            <p className="mt-10 mb-10 max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
              At Accotomate, we redefine bookkeeping by integrating advanced technology and automation into every aspect of financial management. Our solutions eliminate outdated, manual bookkeeping processes and replace them with intelligent, automated workflows designed for accuracy, speed, and efficiency.
            </p>
            <a
              href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0phg9irsX_1xKIxPVBLCnGW6S9a8uzsAXv19harHzA80XxlOLZyCrfUX17wBCfTAh94nOO9Dqm?gv=true"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm bg-primary px-8 py-3 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
              style={{ backgroundColor: "#fa8705", textAlign: "center" }}
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Tech-Driven Bookkeeping Features"
            paragraph="We leverage cutting-edge technology to provide seamless and efficient bookkeeping solutions."
            mb="44px"
          />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="rounded-lg bg-white dark:bg-dark p-6 shadow-lg"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.1 }}
                variants={cardVariants}
              >
                <div className="mb-4 flex items-center">
                  <CheckCircle className="mr-4 text-orange-400" size={28} />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section id="who-qualifies" className="ml-20 pt-16 md:pt-20 lg:pt-28">
        <div className="container">
          <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Who Qualifies for Our Bookkeeping Services?</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
                  Our bookkeeping services are ideal for businesses that need efficient financial management, automation, and seamless integration with cloud-based accounting solutions.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex items-center gap-4">
                    <BarChart className="text-blue-500 w-8 h-8" />
                    <p className="text-gray-800 dark:text-gray-200">
                      Small to Medium-Sized Businesses looking to optimize financial workflows.
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex items-center gap-4">
                    <Cloud className="text-green-500 w-8 h-8" />
                    <p className="text-gray-800 dark:text-gray-200">
                      Businesses Using Cloud-Based Accounting Software like QuickBooks, Xero, FreshBooks, or Sage.
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex items-center gap-4">
                    <Bot className="text-yellow-500 w-8 h-8" />
                    <p className="text-gray-800 dark:text-gray-200">
                      Companies Seeking Seamless Automation for tasks like data entry, invoicing, and reporting.
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex items-center gap-4">
                    <Rocket className="text-red-500 w-8 h-8" />
                    <p className="text-gray-800 dark:text-gray-200">
                      Firms Focused on Scaling who want to offload bookkeeping and focus on growth.
                    </p>
                  </div>
                </div>

              </div>

              <div className="w-full px-4 lg:w-1/2">
                <div className="relative mx-auto max-w-[500px]">
                  <Image
                    src="/images/services/bookkeeping.png"
                    alt="Bookkeeping Services"
                    className="mx-auto max-w-full rounded-lg shadow-lg dark:shadow-none"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
      <section id="quantifiable-results" className="pb-20 pt-16 md:pt-20 lg:pt-28 bg-gray-100 dark:bg-gray-900">
        <div className="container">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">Quantifiable Results</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 text-center max-w-2xl mx-auto">
            Businesses that switch to Accotomate’s automated bookkeeping solutions experience significant improvements in efficiency and profitability. Here’s what our clients have seen:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-4xl font-bold text-green-500">60%</h3>
              <p className="text-gray-800 dark:text-gray-200 mt-2">Reduction in Time Spent on Bookkeeping</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-4xl font-bold text-green-500">99.9%</h3>
              <p className="text-gray-800 dark:text-gray-200 mt-2">Accuracy Rate, minimizing human errors</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-4xl font-bold text-green-500">50%</h3>
              <p className="text-gray-800 dark:text-gray-200 mt-2">Faster Financial Reporting</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-4xl font-bold text-green-500">30%</h3>
              <p className="text-gray-800 dark:text-gray-200 mt-2">Cost Savings by reducing manual bookkeeping overhead</p>
            </div>
          </div>
        </div>
      </section>



      <section className="py-20" style={{ backgroundColor: "#fd9e3a" }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Transform Your Bookkeeping with Technology
          </h2>
          <p className="mt-4 text-lg text-gray-200">
            Let Accotomate handle your financial workflows with intelligent automation and tech-forward solutions.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-white px-8 py-3 text-lg font-semibold text-orange-400 transition-all hover:bg-gray-100"
          >
            Contact Us
          </a>
        </div>
      </section>

    </div >
  );
};

export default Bookkeeping;
