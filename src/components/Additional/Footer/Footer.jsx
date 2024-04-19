import React from "react";
import { Link } from "react-router-dom";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import { InstagramIcon, EmailIcon, PhoneIcon } from "@/Public/Svg/Svg";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";

const Footer = () => {
  return (
    <>
      <motion.div
        id="contact"
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="w-screen h-full md:h-full bg-[#111827] footer opacity-100 p-8 flex flex-col gap-4 sm:px-32 items-center"
      >
        <div className="text-center text-white pt-6">
          <h1 className="text-6xl font-megatron">Connect here</h1>
          <h4 className="text-md font-gilroy-light mt-4 mb-8">
            If you have any queries, feel free to contact us.
          </h4>
        </div>

        <div className="flex flex-col md:flex-row  md:gap-12 xl:gap-32">
          <Cards
            Icon={InstagramIcon}
            text={"Instagram"}
            link={"https://flowbite.com/docs/components/footer/"}
          />
          <Cards
            Icon={PhoneIcon}
            text={"(+9137444322)"}
            link={"https://flowbite.com/docs/components/footer/"}
          />
          <Cards
            Icon={EmailIcon}
            text={"Email"}
            link={"https://flowbite.com/docs/components/footer/"}
          />
        </div>

        <div className="text-white text-center mt-10 ">
          <h6 className="text-sm">© 2024 Ekashunyam.tech</h6>
          {/* <h2 className="text-xl font-gilroy-light">Lorem, ipsum dolor.</h2> */}
        </div>
      </motion.div>
    </>
  );
};

function Cards({ Icon, text, link }) {
  return (
    <>
      <div className="text-white flex w-96 p-8 justify-between mb-2 rounded-lg md:w-full md:gap-8 ">
        <div className="flex gap-4">
          <div className="h-8 w-8 ">
            <Icon />
          </div>
          <h4 className="text-xl">{text}</h4>
        </div>
        {text === "(+9137444322)" ? null : (
          <div>
            <Link to={link} target="_blank">
              <div className="h-8 w-8">
                <ArrowTopRightOnSquareIcon className="h-6 w-6 mt-0" />
              </div>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default Footer;
