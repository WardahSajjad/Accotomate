"use client";

import { motion } from "framer-motion";
import { CheckCircle, Settings, TrendingUp, ShieldCheck, Clock, BarChart, Layers } from "lucide-react";

const chooseUsData = [
  {
    title: "Custom Workflow Automation",
    description: "Tailored QuickBooks automation to streamline financial processes and scale with your business.",
    icon: <Settings className="text-green-500" />,
  },
  {
    title: "Seamless QuickBooks Integration",
    description: "Effortlessly integrates with QuickBooks, allowing real-time data synchronization and efficiency.",
    icon: <Layers className="text-green-500" />,
  },
  {
    title: "AI-Driven Accuracy",
    description: "Leverage cutting-edge AI to minimize errors and optimize financial data management.",
    icon: <ShieldCheck className="text-green-500" />,
  },
  {
    title: "Real-Time Financial Insights",
    description: "Access up-to-date financial data for smarter, faster decision-making with automated reports.",
    icon: <BarChart className="text-green-500" />,
  },
  {
    title: "Cost & Time Efficiency",
    description: "Reduce manual workload, cut costs, and free up valuable time for business growth.",
    icon: <Clock className="text-green-500" />,
  },
  {
    title: "High ROI & Scalability",
    description: "Designed for long-term success, improving operational efficiency with high return on investment.",
    icon: <TrendingUp className="text-green-500" />,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-gray-50 dark:bg-dark">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-black dark:text-white sm:text-4xl">
            Why Choose Us?
          </h2>
          <p className="mt-4 text-lg text-body-color dark:text-gray-300">
            We provide intelligent automation and financial management solutions that empower businesses to thrive.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {chooseUsData.map((item, index) => (
            <motion.div
              key={index}
              className="rounded-lg bg-white p-6 shadow-md dark:bg-dark dark:shadow-gray-800 flex flex-col items-start transition-all hover:shadow-xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-gray-700">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-black dark:text-white">{item.title}</h3>
              <p className="mt-2 text-body-color dark:text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
