import { Feature } from "@/types/feature";
import Link from "next/link";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph, link } = feature;

  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <Link href={link}>
          <div className="cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg rounded-lg p-6 bg-white dark:bg-gray-800 text-center shadow-md hover:bg-gray-100 dark:hover:bg-gray-700">
            <div className="mb-4 flex h-[70px] w-[70px] items-center justify-center mx-auto">
              {icon}
            </div>
            <h3 className="mb-3 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
              {title}
            </h3>
            <p className="text-base font-medium text-body-color leading-relaxed dark:text-gray-300">
              {paragraph}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SingleFeature;
