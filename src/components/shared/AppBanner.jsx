//import useThemeSwitcher from "../../hooks/useThemeSwitcher";
import { FiArrowDownCircle } from "react-icons/fi";
// import developerLight from '../../images/developer.svg';
// import developerDark from '../../images/developer-dark.svg';
import { motion } from "framer-motion";
import TitleHeadline from "../TitleHeadline";
import PointingEmoji from "../PointingEmoji";

const AppBanner = () => {
  // const [activeTheme] = useThemeSwitcher();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
      className="grow flex flex-col sm:justify-center  items-center sm:flex-row mt-12 md:mt-2"
    >
      <img
        className=" border-2 rounded-full max-w-sm md:w-36 mb-10"
        src={"https://lesego-pitsi.netlify.app/images/lesegoProfile.jpg"}
        alt="Developer"
      />
      <div className="w-full md:w-1/3 text-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.1,
          }}
          className="  text-center text-ternary-dark dark:text-primary-light "
        >
          <TitleHeadline />
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.2,
          }}
          className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200"
        >
          {/* <div className=" text-left mt-6 flex flex-row gap-4  items-center md:justify-start ">
            <PointingEmoji />
          </div> */}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.3,
          }}
          className="flex justify-center sm:block"
        >
          <a
            download="Lesego Quincy Pitsi.pdf"
            href="https://docs.google.com/document/d/e/2PACX-1vQME4HZtGuQYSG20f_QwivWkYChXYLJ6NlD2BkBWpvvF9R8f0ydd5jAYyLM_o410w/pub"
            className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
            aria-label="Download Resume"
          >
            <FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
            <span className="text-sm sm:text-lg font-general-medium duration-100">
              Download CV
            </span>
          </a>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -180 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
        className=" grow "
      ></motion.div>
    </motion.section>
  );
};

export default AppBanner;
