import React from "react";
import { useState, lazy, Suspense } from "react";
import useSignin from "@/Hooks/useSignin";
const Signup = lazy(() => import("./Signup"));
import Loader from "../Loader/Loader";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";
import { Link } from "react-router-dom";

const Signin = () => {
  const { loading, signinverify } = useSignin();
  const [loginmode, setloginmode] = useState(true);
  const [signincontent, setsignincontent] = useState({
    email: "",
    password: "",
  });

  const handlesignin = async (e) => {
    e.preventDefault();
    await signinverify(signincontent);
  };

  return (
    <>
      {loginmode ? (
        <>
          {loading ? <Loader /> : null}
          <div className="text-white fixed top-4 ml-4 mt-2 z-50  px-4 w-full mr-4">
            <div className="flex justify-center gap-7">
              <Link to={"/"} className=" ml-2 mr-4 font-gilroy-light font-bold hover:text-yellow-500">
                HOME
              </Link>
              <Link to={"/dev"} className="ml-2 font-gilroy-light font-bold hover:text-yellow-500">
                CONTACT
              </Link>
            </div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="bg-black w-screen flex lg:justify-center lg:items-center lg:h-screen text-center"
          >
            <div className="flex flex-col lg:flex-row lg:items-center xl:w-3/4 lg:w-[90vw] lg:h-3/4 lg:rounded-xl w-screen ">
              <div className="bg-gray-500 h-80 bg-bottom bg-cover bg-[url('/Public/Images/Home/wl6.jpg')] lg:h-full lg:w-3/4 lg:rounded-xl animate-pulse"></div>
              <div className="px-8 sm:px-16 py-14 lg:h-screen lg:w-full lg:pt-48 sm:text-center">
                <h1 className="sm:text-3xl text-[4.99vw] text-yellow-500 font-megatron ">
                  Back again ? log in now !
                </h1>
                <form
                  onSubmit={handlesignin}
                  className="max-w-sm mx-auto flex-cols text-left"
                >
                  <div className="mb-5">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-white mt-8"
                    >
                      EMAIL
                    </label>
                    <input
                      type="text"
                      id="email"
                      className="shadow-sm px-6 bg-black mt-6 text-sm block w-full p-2.5 border-b-[1px] text-white outline-none pb-4 appearance-none"
                      autoComplete="off"
                      placeholder="Email or Username"
                      value={signincontent.email}
                      //   required
                      onChange={(e) =>
                        setsignincontent({
                          ...signincontent,
                          email: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="password"
                      className="mt-8 block mb-2 text-sm font-medium text-white"
                    >
                      PASSWORD
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="shadow-sm px-6 bg-black mt-6 text-sm block w-full p-2.5 border-b-[1px] text-white outline-none pb-4"
                      placeholder="Password"
                      autoComplete="off"
                      value={signincontent.password}
                      //   required
                      onChange={(e) =>
                        setsignincontent({
                          ...signincontent,
                          password: e.target.value,
                        })
                      }
                    />
                  </div>
                  <button
                    type="submit"
                    className="font-gilroy tracking-wider inline-flex h-12 w-full py-2.5 animate-shimmer items-center justify-center rounded-[5px] mb-6 mt-6 border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-yellow-100 transition-colors hover:outline-none hover:ring-1 hover:ring-yellow-400 hover:ring-offset-1 hover:ring-offset-yellow-50"
                  >
                    Log in now
                  </button>
                  <div className="flex items-center gap-1">
                    <p className="ms-2 text-sm font-medium text-white">
                      Don{"'"}t have an account yet ?{" "}
                    </p>
                    <p
                      className="text-blue-600 hover:underline hover:text-slate-500 hover:cursor-pointer dark:text-blue-500"
                      onClick={() => setloginmode(false)}
                    >
                      Register here
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </>
      ) : (
        <Suspense fallback={<Loader />}>
          <Signup />
        </Suspense>
      )}
    </>
  );
};

export default Signin;
