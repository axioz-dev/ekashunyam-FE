import React from "react";
import { useNavigate } from "react-router-dom";
import { fadeIn } from "@/utils/variants";
import { motion } from "framer-motion";
const GlobalError = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      variants={fadeIn("", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="flex  items-center w-screen h-scree flex-col gap-8 sm:mt-0"
    >
      <div className="bg-center bg-cover bg-[url('./Public/Images/Error/1.jpg')] w-full h-96"></div>

      <div className="flex justify-center items-center flex-col gap-4 mt-4">
        <p className="text-white font-megatron text-xl xl:text-3xl">
          Oops , It seems like you lost your way !
        </p>
        <button
          className="bg-white py-3 md:text-2xl sm:px-8  xl:3xl sm:py-4 px-4 font-megatron rounded-md animate-shimmer border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium  text-yellow-100 transition-colors hover:outline-none hover:ring-1 hover:ring-yellow-400 hover:ring-offset-1 hover:ring-offset-yellow-50 "
          onClick={() => navigate("/")}
        >
          Go back
        </button>
      </div>
    </motion.div>
  );
};

export default GlobalError;
