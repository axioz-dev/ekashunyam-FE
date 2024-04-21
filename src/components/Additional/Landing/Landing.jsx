import React, { forwardRef } from "react";
import "./Landing.css";
import { fadeIn } from "@/utils/variants";
import { motion, useScroll, useTransform } from "framer-motion";

const Landing = ({ scrollRefs }) => {
  // const targetRef = useRef(null);

  // const { scrollYProgress } = useScroll({
  //   target: targetRef,
  //   offset: ["start start", "end center"],
  // });

  // const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "90deg"]);
  // const top = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  // const opacity = useTransform(scrollYProgress, [0, 1], ["1", "0"]);
  // const scale = useTransform(scrollYProgress, [0, 1], ["1", "1.8"]);
  // const letterSpacing = useTransform(
  //   scrollYProgress,
  //   [0, 1],
  //   ["-0.1rem", "+3.8rem"]
  // );

  return (
    <div
      ref={scrollRefs}
      className="relative w-screen h-96 sm:h-screen sm: bg-black py-96 bg-center bg-cover bg-no-repeat bg-[url('/Public/Images/Home/land.png')] "
    >
      {/* <video
        className="absolute left-0 top-0 w-screen h-screen object-cover object-center  animatee-fadeIn"
        autoPlay
        loop
        muted
      >
        <source src="" type="video/mp4" />
        Your browser does not support the video tag.
  </video> */}

      <motion.div className="w-full h-full flex justify-center items-center relative animatee-fadeIn rounded-xl bg-opacity-0 flex-col backdrop-blur-[1px]">
        <motion.div
          variants={fadeIn("down", 0.2, 2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="flex flex-col justify-center items-center text-center gap-2"
        >
          <h1 className="text-white text-sm font-gilroy-light">
            SRI DHARMASTHALA MANJUNATHESHWARA COLLEGE
            <br />
            (Autonomous),UJIRE-574 240
          </h1>
          <h6 className="text-white text-[0.70rem] font-gilroy-light">
            (Re-Accredited by NAAC at A++ Grade)
          </h6>
          <h5 className="text-white text-md font-gilroy-bold">
            Department of Computer Science
          </h5>
          <h4 className="text-lg font-gilroy-light text-yellow-300">IT CLUB</h4>
          <h6 className="text-white text-sm font-gilroy-light">ORGANIZES</h6>
        </motion.div>
        <motion.h1
          variants={fadeIn("right", 0.2, 2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="relative m-0 p-0 myhead   text-golden text-white shadow-glow font-megatron sm:text-[11vw] text-[13vw]   animatee-fadeIn "
        >
          EKASHUNYAM
        </motion.h1>
        <motion.h4
          variants={fadeIn("left", 0.2, 2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="font-megatron text-lg  bg-gradient-to-tr from-purple-900 via-yellow-900 to-yellow-400 bg-clip-text text-transparent animatee-fadeIn"
        >
          An Intercollegiate Fest
        </motion.h4>
      </motion.div>
    </div>
  );
};

export default forwardRef(Landing);
