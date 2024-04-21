import React from "react";
import { Link } from "react-router-dom";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import { InstagramIcon, EmailIcon, PhoneIcon } from "@/Public/Svg/Svg";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";

const Footer = ({ scrollRef }) => {
  return (
    <>
      <motion.div
        ref={scrollRef}
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="w-screen h-full md:h-screen bg-[#111827] footer opacity-100 p-8 flex flex-col gap-4 sm:px-32 items-center justify-center md:justify-evenly bg-[url('/Public/Images/Home/wl4.jpg')] bg-center bg-cover"
      >
        <div className="text-center text-white pt-6">
          <h1 className="text-6xl font-megatron ">CONNECT HERE</h1>
          <h4 className="text-md font-gilroy-light mt-6 mb-8 md:mt-10 md:mb-0">
            If you have any queries, feel free to contact us.
          </h4>
        </div>

        <div className="flex flex-col md:flex-row  xl:gap-32 sm:gap-4">
          <Cards
            Icon={InstagramIcon}
            text={"Instagram"}
            link={
              "https://www.instagram.com/coming_soon_1.o?igsh=MTZlMXJpbWN6M3Zuaw=="
            }
          />
          <Cards Icon={PhoneIcon} text={"8792489207"} />
          <Cards
            Icon={EmailIcon}
            text={"Email"}
            link={
              "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=DmwnWrRqhsVpWZSTDNgfFWsnlffgbRKHlmnPFqkHKhptVSvRrthXdVbnLKzclfxnFBzctHQrMxLg"
            }
          />
        </div>

        <div className="text-white text-center mb-8 ">
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
      <div className="text-white flex w-full gap-4 p-8 lg:px-14 justify-between mb-6 rounded-xl md:w-full md:gap-8 shadow-sm shadow-yellow-500  bg-gray-800 sm:gap ">
        <div className="flex gap-4">
          <div className="h-8 w-8 ">
            <Icon />
          </div>
          <h4 className="text-xl">{text}</h4>
        </div>
        {text === "8792489207" ? null : (
          <div>
            <Link to={link} target="_blank">
              <div className="h-8 w-8">
                <ArrowTopRightOnSquareIcon className="h-6 w-6 mt-1" />
              </div>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default Footer;
