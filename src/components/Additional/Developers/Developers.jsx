import React, { useEffect, useRef } from "react";
import { CodeBracketIcon } from "@heroicons/react/24/solid";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

const Developers = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center end", "end center "],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [0, 1, 1]);
  const left = useTransform(scrollYProgress, [0, 1], [300, 0]);

  return (
    <motion.div className=" bg-center bg-cover bg-no-repeat bg-black sm:h-screen md:h-auto border-b-4 border-blue-400 py-16">
      <div className="flex justify-center items-center gap-4 ">
        <motion.h1
          className="text-center pt-10 pb-10  font-megatron text-6xl text-white  "
          style={{ opacity }}
          transition={{ duration: 4.5 }}
        >
          Developers
        </motion.h1>
        <motion.h1
          className="text-center  font-megatron text-6xl"
          style={{ opacity }}
          transition={{ duration: 4.5 }}
        >
          <CodeBracketIcon className="h-10 w-10 text-blue-400 " />
        </motion.h1>
      </div>

      <section
        className="flex flex-col gap-14 justify-center items-center md:flex-row md:gap-28  md:pb-4"
        ref={ref}
      >
        <motion.div className=" ">
          <motion.div
            style={{ opacity }}
            transition={{ duration: 1 }}
            className="h-40 w-40 bg-blue-400 rounded-full  md:h-44 md:w-44 "
          ></motion.div>
          <motion.h3 className="text-white mt-4 font-gilroy-light text-center md:text-2xl">
            Shainil P.S
          </motion.h3>
          <motion.h3
            style={{ opacity }}
            transition={{ duration: 0 }}
            className="text-white mt-0 font-gilroy-light text-center"
          >
            II BCA
          </motion.h3>
        </motion.div>

        <div className="mb-10 md:m-0 ">
          <motion.div
            style={{ opacity }}
            transition={{ duration: 1.5 }}
            // ref={ref}
            // style={{ scale, opacity, left }}
            className="h-40 w-40 bg-yellow-400 relative rounded-full  md:h-44 md:w-44 "
          ></motion.div>
          <h3 className="text-white mt-4 font-gilroy-light text-center md:text-2xl">
            Swasthik K
          </h3>
          <motion.h3
            style={{ opacity }}
            transition={{ duration: 0 }}
            className="text-white mt-0 font-gilroy-light text-center"
          >
            II BCA
          </motion.h3>
        </div>
      </section>
    </motion.div>
  );
};

export default Developers;
