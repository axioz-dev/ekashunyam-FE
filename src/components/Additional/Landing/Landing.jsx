import React, { useRef, useState, useEffect } from "react";
import "./Landing.css";
import { LogoIcon } from "@/Public/Svg/Svg";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

const Landing = () => {
  // const ref = useRef(null);
  // const isInView = useInView(ref,{
  //   amount:"all"
  // });

  // useEffect(() => {
  //   console.log(`The element ${isInView ? "is" : "is NOT"} in view`);
  // }, [isInView]);
  // const { scrollYProgress } = useScroll(ref);
  // const background = useTransform(
  //   scrollYProgress,
  //   [0, 0.8,1],
  //   ["#FFFFFF", "#6366F1","#6326F1"]
  // );

  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end center"],
    // offset: ["start start", "end start"],
  });

  // const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "90deg"]);
  const top = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], ["1", "0"]);
  const scale = useTransform(scrollYProgress, [0, 1], ["1", "1.8"]);
  const letterSpacing = useTransform(
    scrollYProgress,
    [0, 1],
    ["-0.1rem", "+3.8rem"]
  );

  return (
    <motion.div
      ref={targetRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 3, ease: "easeInOut" }}
      // className="relative w-screen h-screen p-20 bg-black overflow-hidden bg-[url('/src/Public/Images/Dashboard_Page/gradients/gradient-1.webp')] bg-cover bg-center"
      className="relative w-screen h-screen p-20 bg-black overflow-hidden"
    >
      {/* <video
        className="absolute left-0 top-0 w-screen h-screen object-cover object-center  animatee-fadeIn"
        autoPlay
        loop
        muted
      >
        <source src="src/public/video/finalscene.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

      {/* <div className="absolute left-0 top-0 w-screen h-screen object-cover object-center  animatee-fadeIn bg-center bg-cover bg-[url('/src/Public/Images/Dashboard_Page/gradients/gradient-5.webp')] bg-opacity-50"></div> */}

      <div className="w-full h-full flex justify-center items-center relative bg-center bg-cover animatee-fadeIn rounded-xl bg-opacity-0 flex-col bg-[url('/src/Public/Images/Dashboard_Page/graients/gradient-2.webp')]  backdrop-blur-[1px]">
        {/* <div className="w-full h-full border-2 flex justify-center items-center relative bg-center bg-cover bg-[url('/src/Public/Images/collections/3.jpg')] animatee-fadeIn rounded-xl bg-opacity-0  shadow-2xl  backdrop-blur-xl hover:bg-[url('/src/Public/Images/collections/2.jpg')]"> */}
        {/* <h1 className="font-megatron text-[11vw] text-yellow-500 animatee-fadeIn "> */}
        {/* <LogoIcon/> */}
        <motion.h1
          initial={{ top: 100 }}
          animate={{ top:0}}
          style={{ opacity, top, letterSpacing }}
          transition={{ duration: 4, ease: "easeInOut" }}
          className="relative m-0 p-0 myhead   text-golden text-white shadow-glow font-megatron sm:text-[11vw] text-[13vw]   animatee-fadeIn "
        >
          Ekashunyam
        </motion.h1>
        <motion.h4
          style={{ scale }}
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1}}
          // whileInView={{ y: 0, opacity: 1 }}
          // viewport={{ margin: "00px" }}
          transition={{ duration: 1, ease: "easeInOut" ,delay:3}}
          className="font-megatron text-2xl  bg-gradient-to-tr from-purple-900 via-yellow-900 to-yellow-400 bg-clip-text text-transparent animatee-fadeIn"
        >
          An Intercollegiate Fest
        </motion.h4>
      </div>

      {/* <Tilt
        transitionSpeed={10000}
        perspective={5000}
        tiltMaxAngleX={100}
        tiltMaxAngleY={20}
        className="w-full h-full cursor-pointer "
      >
        <div className="w-full h-full  bg-opacity-0  shadow-2xl  backdrop-blur-xl border-t-[5px] border-opacity-20 rounded-lg">
          <nav className=" ">
            <ul>
              <li>Home</li>
              <li>Contact</li>
              <li>About us</li>
            </ul>
          </nav>
          <h1 className="text-9xl text-white font-megatron">Ekashunyam</h1>
        </div>
      </Tilt> */}
    </motion.div>
  );
};

export default Landing;
