import React from "react";
import { useNavigate } from "react-router-dom";
const Individual = () => {
  const navigate = useNavigate();
  return (
    <div className="border border-blue-200 w-screen">
      <div className="text-white px-4 pb-4 py-8 capitalize   mx-16 ">
        <div className="flex justify-center items-center flex-col gap-4 xl:mx-80 md:mx-32 lg:24">
          <h1 className="text-3xl text-center py-4 font-megatron sm:text-3xl text-yellow-500">
            Don't have a team? <span className="text-white">No worries!</span>
          </h1>
          <div className="border p-6 rounded-[10px]">
            <ul className="flex flex-col gap-4 font-gilroy-light md:text-2xl ">
              <li>
                - You don't have to come as a team! Individual participation is
                also allowed. Contact us for more details.
              </li>
              <li className="text-sm text-black font-gilroy pl-4 bg-yellow-500 w-44 rounded-[10px]">
                Pricing of the events :
              </li>
              <li>
                - <span className="text-gray-400 font-gilroy">AUTO BOT</span> -
                Quiz (2 make a team) - 60 Rs
              </li>
              <li>
                -{" "}
                <span className="text-gray-400 font-gilroy uppercase">
                  Prime Expo
                </span>{" "}
                - Product launch (Individual) - 60Rs
              </li>
              <li>
                -{" "}
                <span className="text-gray-400 font-gilroy uppercase">
                  The Last Knight
                </span>{" "}
                - IT Manager (Individual) - 60Rs
              </li>
              <li>
                -{" "}
                <span className="text-gray-400 font-gilroy uppercase">
                  Battle Arena
                </span>{" "}
                - Gaming-BGMI (2 make a team) - 60Rs
              </li>
              <li>
                -{" "}
                <span className="text-gray-400 font-gilroy uppercase">
                  Cybertron
                </span>{" "}
                - Coding (2 make a team) - 60Rs
              </li>
              <li>
                -{" "}
                <span className="text-gray-400 font-gilroy uppercase">
                  Web Forge
                </span>{" "}
                - web design (2 make a team) - 60Rs
              </li>
              <li>
                -{" "}
                <span className="text-gray-400 font-gilroy uppercase">
                  Cybernetics Lens
                </span>{" "}
                - Photography and Videography (Individual) - 60Rs
              </li>
              <li>
                -{" "}
                <span className="text-gray-400 font-gilroy uppercase">
                  Energeon Rhythm
                </span>{" "}
                - Dance (3-5 members) - 80Rs
              </li>
              <li className="text-sm text-black font-gilroy w-80 px-4 bg-yellow-500  rounded-[10px]">
                Contact here for Individual registration
              </li>
              <li className="tracking-wide grid grid-row gap-4">
                <div>
                  - 8549034890
                  <br />- 7204864804
                </div>
                <div className="flex items-center justify-evenly">
                  <button
                    onClick={() => navigate("/register")}
                    type="button"
                    className="bg-white  py-2  md:px-8 text-xm  px-3 font-megatron rounded-md animate-shimmer border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium  text-yellow-100 transition-colors hover:outline-none hover:ring-1 hover:ring-yellow-400 hover:ring-offset-1 hover:ring-offset-yellow-50 "
                  >
                    Back
                  </button>
                  <button
                    onClick={() => navigate("/")}
                    type="button"
                    className="bg-white  py-2  md:px-8 text-xm  px-3 font-megatron rounded-md animate-shimmer border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium  text-yellow-100 transition-colors hover:outline-none hover:ring-1 hover:ring-yellow-400 hover:ring-offset-1 hover:ring-offset-yellow-50 "
                  >
                    HOME
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Individual;
