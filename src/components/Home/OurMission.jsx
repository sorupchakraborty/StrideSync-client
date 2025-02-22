import { Typewriter } from "react-simple-typewriter";
import Lottie from "lottie-react";
import SectionTitle from "../shared/SectionTitle";
import run from '../../assets/groovy_rep.png';
import { Link } from "react-router-dom";

const OurMission = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-r from-rose-100 via-rose-200 to-rose-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
      <SectionTitle
        title={"Our Mission"}
        subtitle="Unite, Inspire, and Achieve Greatness Through Running"
      />
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <div className="w-full max-w-lg relative">
            <img src={run} alt="Runner" className="rounded-xl shadow-lg transform hover:scale-105 transition duration-500" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-rose-200 dark:to-gray-900 opacity-40 rounded-xl"></div>
          </div>
        </div>
        <div className="max-w-xl mx-auto lg:mx-0">
          <h3 className="text-4xl font-bold text-rose-800 dark:text-rose-400 mb-4">
            Race for a Purpose, Race for Yourself
          </h3>
          <p className="mt-4 text-xl font-medium text-gray-700 dark:text-gray-300">
            <Typewriter
              words={[
                "Inspire change, one step at a time.",
                "Celebrate health, unity, and determination.",
                "Cross the finish line together.",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={1500}
            />
          </p>
          <p className="mt-6 text-gray-700 dark:text-gray-400 text-justify leading-relaxed">
            At StrideSync, we embrace the life-changing impact of marathons.
            Our goal is to foster well-being, encourage community engagement,
            and champion important causes through running. Whether you're an experienced runner or joining for the first time,
            each stride helps build a healthier, more united world.
          </p>
          <p className="mt-4 text-gray-700 dark:text-gray-400 text-justify leading-relaxed">
            Together, we can accomplish greatness. Marathons go beyond
            reaching the finish line—they strengthen resilience, create
            lasting memories, and promote unity. Be part of our community
            and take steps toward a healthier, more vibrant future.
          </p>
          <div className="mt-8 flex justify-start">
            <Link
              to={'/marathons'}
              className="px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 rounded-lg shadow-md transition-transform transform hover:scale-105 focus:ring-4 focus:ring-rose-400 focus:outline-none"
            >
              Explore Marathons
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;

