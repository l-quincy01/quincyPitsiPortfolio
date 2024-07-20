import React from "react";
import { FaMedium, FaPenFancy } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { SiAcademia } from "react-icons/si";
import { motion } from "framer-motion";

export default function WritingsView() {
  return (
    <>
      <section
        id="writings"
        className="py-5 sm:py-10 mt-5 sm:mt-10 flex flex-col gap-4 "
      >
        <div className="text-center  ">
          <p className=" gap-2 flex flex-row items-center  justify-center  font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
            My Writings <FaPenFancy />
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
          <div aria-label="Single Project">
            <div className="  flex flex-col gap-2 text-center md:text-left items-center  px-8 py-8 rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
              <div className="font-general-medium text-sm md:text-xl text-ternary-dark dark:text-ternary-light mb-2  ">
                <a
                  href="https://medium.com/@l.quincypitsi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" flex flex-row justify-center gap-2 items-center space-x-2 text-lg font-semibold underline "
                >
                  <h3 className="underline text-sm lg:text-md xl:text-lg">
                    Medium Articles
                  </h3>
                  <FaMedium />
                  <MdArrowOutward className="transition-transform transform group-hover:translate-x-1 group-active:translate-x-2" />
                </a>
              </div>

              <div className="font-general-medium text-sm md:text-xl text-ternary-dark dark:text-ternary-light mb-2  ">
                <a
                  href="https://www.researchgate.net/profile/Quincy-Pitsi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" flex flex-row justify-center gap-2 items-center space-x-2 text-lg font-semibold underline "
                >
                  <h3 className="underline text-sm lg:text-md xl:text-lg">
                    Academic Research
                  </h3>
                  <SiAcademia />
                  <MdArrowOutward className="transition-transform transform group-hover:translate-x-1 group-active:translate-x-2" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
