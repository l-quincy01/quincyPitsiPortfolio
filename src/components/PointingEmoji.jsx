import { FaGithub, FaLinkedin } from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";
import { MdEmail } from "react-icons/md";

const PointingEmoji = () => {
  return (
    <div className=" justify-center mt-4  font-light text-sm  lg:text-md xl:text-xl flex flex-row items-center gap-4 ">
      <span className="block md:hidden  xl:block">Get in touch</span>{" "}
      <span className=" mx-1 text-sm md:text-lg lg:text-xl xl:text-3xl  inline-block animate-point">
        👉
      </span>
      <a
        href="https://www.linkedin.com/in/lquincy01/"
        className=" text-sm md:text-lg lg:text-xl xl:text-3xl cursor-pointer"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/l-quincy01"
        className="text-sm md:text-lg lg:text-xl xl:text-3xl cursor-pointer"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
      <a
        href="https://leetcode.com/u/lquincy01/"
        className="text-sm md:text-lg lg:text-xl xl:text-3xl cursor-pointer"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiLeetcode />
      </a>
      <a
        href="mailto:lqplsg@gmail.com"
        className="text-sm md:text-lg lg:text-xl xl:text-3xl cursor-pointer"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MdEmail />
      </a>
    </div>
  );
};

export default PointingEmoji;
