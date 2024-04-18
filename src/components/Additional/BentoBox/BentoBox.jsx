import React from "react";
import { useNavigate } from "react-router-dom";

const BentoBox = ({ regdata }) => {
  const navigate = useNavigate();
  return (
    <>
      <section className="bg-bottom bg-black">
        <div className="text-white text-center pt-8 text-6xl font-megatron pb-12">
          <h1 className="bg-gradient-to-tr from-purple-900 via-yellow-50 to-yellow-500 bg-clip-text text-transparent">
            Dashboard
          </h1>
          <p className="text-white text-center pt-8 text-3xl font-gilroy-light">
            Explore your journey here !
          </p>
        </div>

        <div className="py-16">
          <div className="mx-auto px-6 max-w-6xl xl:max-w-full xl:px-16 text-gray-500">
            <div className="relative">
              <div className="relative z-10 grid gap-8 grid-cols-6 group">
                {/* <div className="col-span-full lg:col-span-2 overflow-hidden flex relative p-8 rounded-[28px] bg-white    bg-opacity-10  border-white border-opacity-20 backdrop-blur-5  shadow-glass border-solid bg-gradient-to-br from-black to-purple-900  border-4"> */}
                <div className="col-span-full lg:col-span-2 overflow-hidden flex relative p-8 rounded-[28px] bg-whit bg-opacity-10  border-white border-opacity-20 backdrop-blur-5  shadow-glass border-solid    bg-cover bg-[url('/src/Public/Images/Dashboard_Page/gradients/gradient-2.webp')] cursor-pointer group-hover:blur-[2px] hover:!blur-none group-hover:scale-[0.85] hover:!scale-105 duration-500">
                  <div className="size-fit m-auto relative ">
                    <div className="relative h-24 w-56 flex items-center  mx-auto font-megatron">
                      <span className="w-fit block mx-auto text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-pink-600">
                        College
                      </span>
                    </div>
                    <h2 className="mt-4 text-center font-semibold text-yellow-100 text-3xl font-gilroy-light tracking-wider">
                      {regdata.college}
                      <br />
                      <span className="text-xl text-black font-bold">
                        {regdata.email}
                      </span>
                    </h2>
                  </div>
                </div>

                <div className="col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative p-8  bg-white rounded-[28px] bg-center bg-cover bg-[url('/src/Public/Images/Dashboard_Page/gradients/gradient-1.webp')]  bg-opacity-50 cursor-pointer group-hover:blur-[2px] hover:!blur-none group-hover:scale-[0.85] hover:!scale-105  duration-500">
                  <div>
                    <div className="relative aspect-square rounded-full size-32 flex border mx-auto before:absolute before:-inset-2 before:border before:rounded-full bg-center bg-cover bg-[url('/src/Public/5.png ')] "></div>
                    <div className="mt-6 text-center relative z-10 flex justify-center items-center flex-col gap-4">
                      <h2 className="text-5xl font-medium sm:text-4xl md:sm:text-5xl transition group-hover:text-yellow-500 text-white font-megatron ">
                        Ekashunyam
                      </h2>
                      <p className=" text-white font-gilroy-light">
                        An Inter Colegiate IT fest
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative p-8 rounded-xl bg-white  border-gray-200 bg-center bg-cover bg-[url('/src/Public/Images/Dashboard_Page/gradients/gradient-2.webp')] cursor-pointer group-hover:blur-[2px] hover:!blur-none group-hover:scale-[0.85] hover:!scale-105 duration-500">
                  <div className="flex flex-col gap-4 justify-center items-center h-full">
                    <div className="pt-6 lg:px-6 font-gilroy-light ">
                      Note that You can create 2 teams at max.
                    </div>
                    <div>
                      <h2 className="text-5xl font-medium transition  text-center text-green-500 font-megatron">
                        Status
                      </h2>
                      <p className="text-2xl mt-4 text-white font-gilroy-light">
                        You have regsitered {regdata.count} team
                      </p>
                    </div>
                    {/* <div className="mt-14 text-center relative z-10 space-y-2">
                      <p className="dark:text-gray-300 text-gray-700">
                        Provident fugit vero voluptate. magnam magni doloribus
                        dolores voluptates inventore nisi.
                      </p>
                      <h2 className="text-3xl font-medium text-gray-800 transition  font-megatron">
                        Lorem, ipsum.
                      </h2>
                    </div> */}
                  </div>
                </div>

                <div className="col-span-full lg:col-span-3 overflow-hidden relative p-8 rounded-xl bg-white  border-gray-200 bg-cover bg-[url('/src/Public/Images/Dashboard_Page/gradients/gradient-5.webp')] cursor-pointer group-hover:blur-[2px] hover:!blur-none group-hover:scale-[0.85] hover:!scale-105 duration-500">
                  <div className="flex flex-col justify-center items-center gap-4  h-full">
                    <div>
                      <h2 className="text-5xl font-medium transition  text-center text-white font-megatron">
                        Entry fees !
                      </h2>
                    </div>
                    <div className="font-gilroy-light">
                      <p className="mt-2 text-white capitalize">
                        An entry fees of 1000 per team shall be paid on the spot
                      </p>
                      <p className="mt-2 text-white capitalize">
                        The team should be there at 9:30 am on 30-4-2024
                      </p>
                      <p className="mt-2 text-white capitalize">
                        Venue will be at SDMC Ujire
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-span-full lg:col-span-3 overflow-hidden relative p-8 rounded-xl bg-white bg-[url('/src/Public/Images/Dashboard_Page/gradients/gradient-7.webp')] bg-cover cursor-pointer group-hover:blur-[2px] hover:!blur-none group-hover:scale-[0.85] hover:!scale-105 duration-500">
                  <div className="flex flex-col justify-center items-center gap-8  h-full">
                    <div>
                      <h2 className="text-5xl font-medium transition  text-center text-white font-megatron">
                        Logout
                      </h2>
                      <p className="mt-2">
                        Don{"'"}t forget to connect back with us !
                      </p>
                    </div>
                    <button
                      onClick={() => navigate("/")}
                      type="button"
                      className="bg-white  py-2  md:px-8 text-xm  px-3 font-megatron rounded-md animate-shimmer border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium  text-yellow-100 transition-colors hover:outline-none hover:ring-1 hover:ring-yellow-400 hover:ring-offset-1 hover:ring-offset-yellow-50 "
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BentoBox;
