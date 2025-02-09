import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-10 lg:py-18">
        <div className="container">
          <SectionTitle
            title="Our Services"
            paragraph="Empowering businesses with cutting-edge financial solutions. From tech-driven bookkeeping to seamless tax compliance and automation, we simplify financial management so you can focus on growth."
            center
          />


          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
      <section id="quantifiable-results" className="pb-20 pt-16 md:pt-20 lg:pt-28 bg-gray-100 dark:bg-gray-900">
        <div className="container">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">Our Results</h2>
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
    </>
  );
};

export default Features;
