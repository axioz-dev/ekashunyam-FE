import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { fadeIn } from "@/utils/variants";

const Developers = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      variants={fadeIn("down", 0.2, 2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.5 }}
      className="bg-center bg-cover bg-no-repeat bg-black md:h-auto  py-6 "
    >
      <div className="flex justify-center items-center gap-4 ">
        <h1 className="text-center pt-10 pb-10  font-megatron text-3xl text-white  md:text-7xl">
          CONTACT US !
        </h1>
      </div>

      <section className="flex flex-col gap-14 justify-center items-center px-4 md:gap-28  md:pb-4  h-full">
        <div className="border px-8 py-2 rounded-[8px]">
          <h3 className="text-white  font-gilroy-light text-center md:text-2xl font-bold">
            Shainil P.S
          </h3>
          <h3 className="text-white mt-0 font-gilroy-light text-center">
            II BCA
          </h3>
          <h3 className="text-white mt-0 font-gilroy-light text-center">
            Email : shainilps.work@gmail.com
          </h3>
          <h3 className="text-white mt-0 font-gilroy-light text-center">
            Phone : 9632348984
          </h3>
          <h3 className="text-white mt-0 font-gilroy-light text-center">
            Know us :
            <Link
              to="https://codeshaine.github.io/codeshaine.socials/"
              target="_blank"
              className="text-yellow-100 hover:text-yellow-200 ml-2"
            >
              https://codeshaine.io
            </Link>
          </h3>
        </div>

        <div className="border px-8 py-2 rounded-[8px]">
          <h3 className="text-white  font-gilroy-light text-center md:text-2xl font-bold">
            Swasthik K
          </h3>
          <h3 className="text-white mt-0 font-gilroy-light text-center">
            II BCA
          </h3>
          <h3 className="text-white mt-0 font-gilroy-light text-center">
            Email : swasth319@gmail.com
          </h3>
          <h3 className="text-white mt-0 font-gilroy-light text-center">
            Phone : 8123837856
          </h3>
          <h3 className="text-white mt-0 font-gilroy-light text-center">
            Know us :
            <Link
              to="https://linktr.ee/swasthk"
              target="_blank"
              className="text-yellow-100 hover:text-yellow-200 ml-2"
            >
              https://linktr.ee/swasthk
            </Link>
          </h3>
        </div>
        <button
          onClick={() => navigate("/")}
          type="button"
          className="bg-white  py-2 md:mr-8 md:px-8 text-xm  px-3 font-megatron rounded-[5px] animate-shimmer border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium  text-yellow-100 transition-colors hover:outline-none hover:ring-1 hover:ring-yellow-400 hover:ring-offset-1 hover:ring-offset-yellow-50 "
        >
          HOME
        </button>
      </section>
    </motion.div>
  );
};

export default Developers;
