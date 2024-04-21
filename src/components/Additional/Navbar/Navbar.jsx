import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = ({ scrollRefs }) => {
  const [showMenu, setshowMenu] = useState(false);
  const navigate = useNavigate();

  const handlehomeclick = () => {
    scrollRefs.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.div className="transition-all">
        <motion.nav
          initial={{ top: -100 }}
          animate={{ top: 0 }}
          transition={{ duration: 3, ease: "anticipate" }}
          className="fixed w-screen z-20 top-0 start-0 border-btext  "
        >
          <div className="flex flex-wrap items-center justify-between  xl:mx-0 py-4 text-white bg-black bg-opacity-40">
            <div
              onClick={() => {
                handlehomeclick();
              }}
              className="flex items-center  rtl:space-x-reverse ml-8 h-10 w-10 hover:cursor-pointer"
            >
              <img
                src="/Public/Images/Home/Logo.webp"
                alt="IT Club Logo"
                className="h-10 w-10 object-cover object-center"
              />
            </div>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button
                onClick={() => navigate("/register")}
                type="button"
                className="bg-white w-full py-2 md:mr-8 md:px-8 text-xm  px-3 font-megatron rounded-[5px] animate-shimmer border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium  text-yellow-100 transition-colors hover:outline-none hover:ring-1 hover:ring-yellow-400 hover:ring-offset-1 hover:ring-offset-yellow-50 "
              >
                Register
              </button>

              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden"
                onClick={() => {
                  setshowMenu(!showMenu);
                }}
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>

            <div
              className="md:ml-24 bg-opacity-0 border-2 shadow-xl backdrop-blur-xl border-[0.8] border-opacity-20 flex-col cursor-pointer  hover:backdrop-blur-3xl transition-all duration-500 items-center justify-center hidden w-full md:flex md:w-96 border-white md:py-2 md:rounded-full"
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  ">
                <li>
                  <button
                    onClick={() => {
                      handlehomeclick();
                    }}
                    className="block py-2  transition-all duration-1000 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                    aria-current="page"
                  >
                    <p className="text-white font-megatron tracking-wider hover:text-yellow-500 transition-all duration-300">
                      Home
                    </p>
                  </button>
                </li>
                <li>
                  <Link
                    target="_blank"
                    to={"https://www.sdmcujire.in/"}
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    <p className="text-white font-megatron tracking-wider hover:text-yellow-500  transition-all duration-300">
                      About
                    </p>
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/dev")}
                    className="block py-2 px-3 text-gray-900 rounded cursor-pointer hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    <p className="text-white font-megatron tracking-wider hover:text-yellow-500 transition-all duration-300">
                      Contact
                    </p>
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {showMenu && (
            <div className="text-white px-8 mt-2 py-1 mb-4 flex justify-evenly md:hidden gap-4 bg-black">
              <button
                onClick={() => {
                  handlehomeclick();
                }}
                className="hover:text-yellow-400 transition-all duration-300"
              >
                <p className=" font-megatron -tracking-[-2px] ">HOME</p>
              </button>
              <Link
                target="_blank"
                to={"https://www.sdmcujire.in/"}
                className="hover:text-yellow-400 transition-all duration-300"
              >
                <p className=" font-megatron -tracking-[-2px] ">ABOUT</p>
              </Link>
              <button
                className="hover:text-yellow-400 transition-all duration-300"
                onClick={() => navigate("/dev")}
              >
                <p className=" font-megatron -tracking-[-2px] ">CONTACT</p>
              </button>
            </div>
          )}
        </motion.nav>
      </motion.div>
    </>
  );
};

export default Navbar;
