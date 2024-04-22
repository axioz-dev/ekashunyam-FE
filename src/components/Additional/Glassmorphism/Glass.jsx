import React from "react";
import { useNavigate } from "react-router-dom";
import { fadeIn } from "@/utils/variants";
import { motion, transform } from "framer-motion";

const Glass = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen mt-[-6px]">
      <div className="bg-image dark-overlay bg-center bg-cover bg-[url('/Public/Images/Home/wl3.jpg')] flex items-center justify-center w-screen px-8 gap-8 py-7 h-full">
        <motion.div
          variants={fadeIn("up", 0.2, 1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="bg-opacity-0 shadow-xl backdrop-blur-3xl border-[0.8] border-opacity-20 rounded-lg w-[500px] p-6  flex items-center justify-evenly flex-col cursor-pointer sm:h-96 hover:backdrop-blur-md transition-all duration-500"
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-gilroy-light text-white hover:text-purple-200">
              The Showdown Begins on April 30th!
            </h1>
            <h2 className="mt-2 sm:mt-6 mb-4 bg-[#fafb63] w-40 px-2 rounded-e-full">
              Don't Be Left Out!
            </h2>
          </div>
          <div className="w-full">
            <button
              onClick={() => navigate("/register")}
              className="bg-white w-full py-3 md:text-3xl text-2xl sm:py-6  px-2 font-megatron rounded-xl animate-shimmer border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium  text-yellow-100 transition-colors hover:outline-none hover:ring-1 hover:ring-yellow-400 hover:ring-offset-1 hover:ring-offset-yellow-50 "
            >
              Register Now !
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Glass;
