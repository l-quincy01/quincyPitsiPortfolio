import { FaGithub, FaLinkedin } from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import AppFooterCopyright from "./AppFooterCopyright";

const AppFooter = () => {
  return (
    <div className="container mx-auto">
      <div className="pt-10 sm:pt-30 pb-4 mt-20 border-t-2 border-primary-light dark:border-secondary-dark text-ternary-dark dark:text-ternary-light">
        {/* Footer social links */}
        <div className="font-general-regular flex flex-row gap-4 justify-center items-center mb-6 sm:mb-10">
          <a
            href="https://www.linkedin.com/in/lquincy01/"
            className=" text-sm md:text-lg lg:text-xl xl:text-3xl cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://github.com/l-quincy01"
            className="text-sm md:text-lg lg:text-xl xl:text-3xl cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://leetcode.com/u/lquincy01/"
            className="text-sm md:text-lg lg:text-xl xl:text-3xl cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLeetcode size={30} />
          </a>
          <a
            href="mailto:lqplsg@gmail.com"
            className="text-sm md:text-lg lg:text-xl xl:text-3xl cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdEmail size={30} />
          </a>
        </div>

        <AppFooterCopyright />
      </div>
    </div>
  );
};

export default AppFooter;
