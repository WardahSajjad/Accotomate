import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="20" height="20" viewBox="0 0 16 13" className="fill-green-500">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  return (
    <section id="about" className="py-20 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left px-6 lg:px-12">
            <SectionTitle
              title="Our Story"
              paragraph="We are a team of accountants and developers with one clear aim: to fully automate tedious, time-consuming, and non-revenue-generating tasks like bookkeeping. Our journey started with the realization that traditional bookkeeping methods often hinder rather than help businesses thrive.

              We specialize in supporting small to medium-sized companies and firms that rely on QuickBooks, Xero, FreshBooks, and Sage for their accounting needs. Our mission is to deliver seamless automation that streamlines financial workflows, eliminates manual inefficiencies, and reduces errors.

              From automated invoice processing to seamless payroll integration and tax-ready records, we ensure that every aspect of your financial workflow is optimized for maximum productivity. Our mission is simple: let automation do the heavy lifting while you focus on growing your business."
              mb="44px"
            />
          </div>

          {/* Right Side - Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <Image
                src="/images/about/about1.jpg"
                alt="Our Journey"
                layout="responsive"
                width={500}
                height={500}
                className="rounded-lg shadow-lg dark:shadow-none"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
