import useSignup from "@/Hooks/useSignup";
import React, { useState } from "react";
import Signin from "./Signin";
import Loader from "../Loader/Loader";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";
import { Link } from "react-router-dom";

const colleges = [
  "Akshaya College, Puttur",
  "Alva's College, Moodubidre",
  "Canara College, Mangalore",
  "Carmel Degree College, Bantwal",
  "Dr. NSAM First Grade College, Nitte",
  "Govinda Das College, Surathkal",
  "Mahatma Gandhi Memorial College, Udupi",
  "Nehru Memorial College (NMC), Sullia",
  "Padua Degree College, Mangalore",
  "Sacred Heart College, Madanthyar",
  "SDM College of Business Management, Mangalore",
  "Sharada College, Mangalore",
  "Shree Devi College, Mangalore",
  "Shree Devi College of Information Science, Mangalore",
  "Sri Bhuvanendra College, Karkala",
  "Sri Dhavala College, Moodabidri",
  "Sri Mahaveera College, Moodbidri",
  "Sri Venkataramana Swamy College, Bantwal",
  "Srinivas First Grade College, Mangalore",
  "Srinivas Institute of Computer Science and Information Science, Mangalore",
  "St. Agnes College, Mangalore",
  "St. Aloysius College (Deemed to be University), Mangalore",
  "St. Philomena College, Puttur",
  "Vivekananda College, Puttur",
  "Yenepoya Institute of Arts, Science, Commerce and Management",
];

const Signup = () => {
  const { loading, signupverify } = useSignup();
  const [loginmode, setloginmode] = useState(false);

  const [signupcontent, setsignupcontent] = useState({
    college: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handlesignup = async (e) => {
    e.preventDefault();
    await signupverify(signupcontent);
  };

  return (
    <>
      {!loginmode ? (
        <>
          {loading ? <Loader /> : null}
          <div className="text-white fixed top-4 ml-4 mt-2 z-50  px-4 w-full mr-4">
            <div className="flex justify-center gap-7">
              <Link
                to={"/"}
                className=" ml-2 mr-4 font-gilroy-light font-bold hover:text-yellow-500"
              >
                HOME
              </Link>
              <Link
                to={"/dev"}
                className="ml-2 font-gilroy-light font-bold hover:text-yellow-500"
              >
                CONTACT
              </Link>
            </div>
          </div>
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="bg-black w-screen flex lg:justify-center lg:items-center lg:h-screen"
          >
            <div className="flex flex-col lg:flex-row lg:items-center xl:w-3/4 lg:w-[90vw] lg:h-3/4 lg:rounded-xl w-screen">
              <div className="bg-gray-500 h-80 bg-bottom bg-cover bg-[url('/Public/Images/Login/2.webp')] lg:h-full lg:w-3/4 lg:rounded-xl animate-pulse "></div>
              <div className="px-16 py-14 lg:h-screen lg:w-full lg:pt-16 sm:text-center">
                <h1 className="sm:text-3xl text-[4.99vw] text-yellow-500 font-megatron ">
                  Register with your e-mail
                </h1>
                <form
                  onSubmit={handlesignup}
                  className="max-w-sm mx-auto flex-cols text-left"
                >
                  <div className="mb-5">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-white mt-8"
                    >
                      Your college name
                    </label>
                    <select
                      id="college"
                      value={signupcontent.college}
                      className="shadow-sm px-6 bg-black mt-6 text-sm block w-full p-2.5 border-b-[1px] text-white outline-none pb-4 appearance-none"
                      onChange={(e) =>
                        setsignupcontent({
                          ...signupcontent,
                          college: e.target.value,
                        })
                      }
                    >
                      <option value="" className="font-semibold text-[17px]">
                        Select your college
                      </option>
                      {colleges.map((college, index) => (
                        <option key={index} value={college} className="">
                          {college}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-white mt-8"
                    >
                      Your email
                    </label>
                    <input
                      type="text"
                      id="email"
                      className="shadow-sm px-6 bg-black mt-6 text-sm block w-full p-2.5 border-b-[1px] text-white outline-none pb-4 appearance-none"
                      placeholder="Enter your email"
                      value={signupcontent.email}
                      autoComplete="off"
                      //   required
                      onChange={(e) =>
                        setsignupcontent({
                          ...signupcontent,
                          email: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-white mt-8"
                    >
                      Your password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="shadow-sm px-6 bg-black mt-6 text-sm block w-full p-2.5 border-b-[1px] text-white outline-none pb-4 appearance-none"
                      placeholder="Enter your password"
                      value={signupcontent.password}
                      //   required
                      onChange={(e) =>
                        setsignupcontent({
                          ...signupcontent,
                          password: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="repeat-password"
                      className="block text-sm font-medium text-white mt-8"
                    >
                      Repeat password
                    </label>
                    <input
                      type="password"
                      id="repeat-password"
                      className="shadow-sm px-6 bg-black mt-6 text-sm block w-full p-2.5 border-b-[1px] text-white outline-none pb-4 appearance-none"
                      placeholder="Confirm password"
                      value={signupcontent.confirmpassword}
                      //   required
                      onChange={(e) =>
                        setsignupcontent({
                          ...signupcontent,
                          confirmpassword: e.target.value,
                        })
                      }
                    />
                  </div>
                  <button
                    type="submit"
                    // className="text-black bg-white  rounded-lg mt-6 hover:bg-slate-200 text-base font-semibold mb-6"
                    className="font-gilroy tracking-wider inline-flex h-12 w-full py-2.5 animate-shimmer items-center justify-center rounded-lg mb-6 mt-6 border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-yellow-100 transition-colors hover:outline-none hover:ring-1 hover:ring-yellow-400 hover:ring-offset-1 hover:ring-offset-yellow-50"
                  >
                    Register now
                  </button>
                  <div className="flex items-center gap-1">
                    <p className="ms-2 text-sm font-medium text-white">
                      Already have an account ?{" "}
                    </p>
                    <p
                      className="text-blue-600 hover:underline hover:cursor-pointer"
                      onClick={() => setloginmode(true)}
                    >
                      login here
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </>
      ) : (
        <Signin></Signin>
      )}
    </>
  );
};

export default Signup;
