"use client";
import { motion } from "framer-motion";

import SectionTitle from "../Common/SectionTitle";
import { FaSyncAlt, FaChartLine, FaDatabase, FaTasks, FaFileInvoiceDollar, FaClipboardCheck, FaMoneyBillWave, FaChartPie } from "react-icons/fa";

export default function QuickBooksAutomationPage() {
  const features = [
    { icon: FaDatabase, text: "Financial Data Consolidation" },
    { icon: FaSyncAlt, text: "Ledger reconciliations" },
    { icon: FaClipboardCheck, text: "Scheduled Bank Reconciliations" },
    { icon: FaChartPie, text: "Budgeting & Forecasting Automation" },
    { icon: FaTasks, text: "Adhoc Management Reports" },
    { icon: FaFileInvoiceDollar, text: "AP/AR Tracking and Management" },
    { icon: FaChartLine, text: "Real-Time Financial Insights" },
    { icon: FaMoneyBillWave, text: "Continuous Optimization & Support" },
  ];

  return (
    <section id="quickbooks-automation" className="pt-16 md:pt-20 lg:pt-28">
      <section className="relative py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl lg:text-5xl"
          >
            Financial Workflow Automation: <br />Effortless Financial Data Sync <br />for Smarter Operations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-10 mt-10 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300 md:text-xl"
          >
            Our financial workflow automation ensures seamless data synchronization between QuickBooks and Google Sheets, eliminating manual exports and outdated reports. Transactions, balances, AP/AR aging, reconciliations, etc. are automatically pulled into structured spreadsheets, enabling real-time financial tracking.

          </motion.p>
          <a
            href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0phg9irsX_1xKIxPVBLCnGW6S9a8uzsAXv19harHzA80XxlOLZyCrfUX17wBCfTAh94nOO9Dqm?gv=true"
            target="_blank"
            rel="noopener noreferrer"
            className=" rounded-sm bg-primary px-8 py-3 mt-50 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
            style={{ backgroundColor: "#fa8705", textAlign: "center", }}
          >
            Get Started
          </a>
        </div>
      </section>

      <div className="py-20 px-9">
        <SectionTitle
          title="Financial Workflow Automation"
          paragraph="Custom report templates dynamically update as new data flows in, providing instant insights into cash flow, profitability, and outstanding liabilities. With automated refresh schedules, your reports remain current without constant intervention, allowing for more accurate forecasting, budgeting, and financial analysis. 

We're excited to offer a variety of services, including but not limited to:"
          mb="44px"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-5"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } }
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="flex items-center p-5 bg-white shadow-md rounded-lg border border-gray-200 hover:shadow-lg transition"
            >
              <feature.icon className="text-orange-400 text-3xl mr-4" />
              <p className="text-lg font-medium text-gray-800">{feature.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CTA Section */}
      <motion.section
        className="py-20 mt-12 bg-orange-400 text-white text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">Transform Your Financial Workflows</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Let Accotomate handle your financial workflows with intelligent automation and tech-forward solutions.
        </p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/contact"
          className="mt-8 inline-block rounded-lg bg-white px-8 py-3 text-lg font-semibold text-orange-400 transition-all hover:bg-gray-100"
        >
          Contact Us
        </motion.a>
      </motion.section>
    </section >
  );
}
