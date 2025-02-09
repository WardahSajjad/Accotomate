import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-green-500">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const UKTax = () => {
  const List = ({ text }: { text: string }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="uk-tax-services" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="UK Tax Services"
                paragraph="Stay compliant with UK tax laws through expert bookkeeping and accounting services. We offer tailored solutions for VAT, Corporation Tax, Income Tax, and PAYE, ensuring accurate filing and timely submissions. Let us handle your tax obligations, so you can focus on growing your business."
                mb="44px"
              />

              <div className="mb-12 max-w-[570px] lg:mb-0" data-wow-delay=".15s">
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="No missed deadlines" />
                    <List text="Simplified tax rules" />
                    <List text="Hassle-free HMRC audits" />
                    <List text="Tailored tax savings" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Error-free submissions" />
                    <List text="24/7 expert support" />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                <Image
                  src="/images/services/tax.jpg"
                  alt="UK Tax Services"
                  fill
                  className="mx-auto max-w-full rounded-lg drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                <Image
                  src="/images/services/tax.jpg"
                  alt="UK Tax Services"
                  fill
                  className="mx-auto hidden max-w-full rounded-lg drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="py-20" style={{ backgroundColor: "#fd9e3a" }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Transform Your Tax Services
          </h2>
          <p className="mt-4 text-lg text-gray-200">
            Let Accotomate handle your Taxes with intelligent automation and tech-forward solutions.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-white px-8 py-3 text-lg font-semibold text-orange-400 transition-all hover:bg-gray-100"
          >
            Contact Us
          </a>
        </div>
      </section>
    </section>
  );
};

export default UKTax;
