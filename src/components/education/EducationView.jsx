import { motion } from "framer-motion";
import rhodesLogo from "../../images/rhodesUniversity.png";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { FaRegCalendarAlt } from "react-icons/fa";

export default function EducationView() {
  return (
    <>
      <section
        id="projects"
        className="py-5 sm:py-10 mt-5 sm:mt-10 flex flex-col gap-4 "
      >
        <div className="text-center  ">
          <p className=" flex flex-row items-center  justify-center  font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
            My Education <HiOutlineAcademicCap />
          </p>
        </div>

        <motion.div
          //className="justify-center md:justify-start "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, delay: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.7,
            delay: 0.15,
          }}
        >
          <div to="/projects/single-project" aria-label="Single Project">
            <div className="  flex flex-col gap-2 text-center md:text-left items-center md:items-start px-8 py-8 rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
              <p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light  underline">
                Rhodes University
              </p>

              <div className="text-left font-general-medium text-sm md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
                <ul>
                  <li className="font-semibold flex text-sm lg:text-md xl:text-lg">
                    BSc Computer Science and Information Systems{" "}
                    <span className=" hidden md:hidden  ml-10 font-light xl:flex  items-center md:gap-x-2 md:items-center">
                      <FaRegCalendarAlt /> 2021 - 2024
                    </span>
                  </li>
                  <ul className="ml-10 list-disc font-light ">
                    <li className="text-sm lg:text-md xl:text-lg font-light">
                      Chess
                    </li>
                    <li className="text-sm lg:text-md xl:text-lg font-light">
                      Dev Soc (2022)
                    </li>

                    <li className="text-sm lg:text-md xl:text-lg font-light">
                      Boxing and MMA
                    </li>
                  </ul>
                </ul>

                <ul>
                  <li className="font-semibold flex text-sm lg:text-md xl:text-lg">
                    BSc Information Systems Honours{" "}
                    <span className=" hidden md:hidden  ml-10 font-light xl:flex  items-center md:gap-x-2 md:items-center">
                      <FaRegCalendarAlt /> 2021 - 2024
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
