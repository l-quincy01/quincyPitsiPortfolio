//import useThemeSwitcher from "../../hooks/useThemeSwitcher";

// import developerLight from '../../images/developer.svg';
// import developerDark from '../../images/developer-dark.svg';
import { motion } from "framer-motion";
import TitleHeadline from "../TitleHeadline";
import profileImg from "../../images/lesegoProfile.jpg";

const AppBanner = () => {
  // const [activeTheme] = useThemeSwitcher();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
      className=" flex flex-col justify-center items-center  md:items-start md:flex-row md:justify-between  mt-12 md:mt-2"
    >
      <div className=" hidden md:block  text-ternary-dark dark:text-ternary-light ">
        <TitleHeadline />
      </div>
      <img
        className=" border-2 rounded-full  mb-10  md:hidden"
        src={profileImg}
        alt="Developer"
      />

      <img
        className=" border-2 rounded-full  md:w-1/3 md:h-1/3 mb-10  hidden md:block"
        src={profileImg}
        alt="Developer"
      />

      <div className="md:hidden text-ternary-dark dark:text-ternary-light ">
        <TitleHeadline />
      </div>
    </motion.section>
  );
};

export default AppBanner;
