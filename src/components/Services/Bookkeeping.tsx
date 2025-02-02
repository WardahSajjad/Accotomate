"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react"; 
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const cardVariants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
};

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
      <section className="relative py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
              Tech-Driven Bookkeeping
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
              At Accotomate, we redefine bookkeeping by integrating advanced technology and automation into every aspect of financial management. Our tech-driven bookkeeping solutions go beyond traditional practices, offering businesses accurate, efficient, and real-time insights that power smarter decisions.
            </p>
            <button className="mt-8 rounded-lg bg-orange-400 px-8 py-3 text-lg font-semibold text-white transition-all hover:bg-orange-300">
              Get Started
            </button>
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
    </div>
  );
};

export default Bookkeeping;
