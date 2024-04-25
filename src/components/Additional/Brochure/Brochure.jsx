import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";
import { Link } from "react-router-dom";

const Brochure = () => {
  return (
    <>
      <motion.div
        variants={fadeIn("down", 0, 2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="w-screen py-10 sm:h-screen px-4 sm:px-10 xl:px-96 lg:px-80  flex flex-col justify-center "
      >
        <div className="bg-black rounded-3xl xl:px-10 xl:py-14 px-6 py-14 flex flex-col gap-6  bg-center  bg-cover items-center justify-center hover:backdrop-blur-lg bg-[url('/Public/Images/Home/wl5.jpg')]">
          <div className="flex flex-col justify-center items-center gap-2 sm:gap-4 sm:mt-8 sm:mb-8">
            <h1 className="text-[#ffffff] text-4xl sm:text-6xl font-megatron mb-2">
              DOWNLOAD
            </h1>
            <p className="font-gilroy-light tracking-wider text-[#FEB608]">
              Get the Full Scoop !
            </p>
          </div>
          <div>
            <Link
              to="https://drive.google.com/file/d/10rKLQbEpLYG61ByYHUBxrsAUz8MGgJc4/view?usp=drivesdk"
              download
              target="_blank"
            >
              <p className="bg-white px-8 font-megatron py-1 sm:py-4 sm:px-20 rounded-[4px] sm:rounded-[5px] animate-shimmer border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium text-yellow-100 transition-colors hover:outline-none hover:ring-1 hover:ring-yellow-400 hover:ring-offset-1 hover:ring-offset-yellow-50 ">
                BROCHURE
              </p>
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Brochure;
