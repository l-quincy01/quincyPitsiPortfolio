import { FaGithub, FaLinkedin } from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";
import { MdEmail } from "react-icons/md";

const PointingEmoji = () => {
  return (
    <div className=" mt-4  font-light  flex flex-row items-center gap-4 ">
      <span className="block ">Get in touch</span>{" "}
      <span className=" mx-1     inline-block animate-point">👉</span>
      <a
        href="https://www.linkedin.com/in/lquincy01/"
        className="    cursor-pointer"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/l-quincy01"
        className="   cursor-pointer"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
      <a
        href="https://leetcode.com/u/lquincy01/"
        className="   cursor-pointer"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiLeetcode />
      </a>
      <a
        href="mailto:lqplsg@gmail.com"
        className="   cursor-pointer"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MdEmail />
      </a>
    </div>
  );
};

export default PointingEmoji;
