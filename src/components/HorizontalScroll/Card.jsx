import { PinContainer } from "./3d-pin.jsx";

function Card({ title, subTitle, img, to }) {
  return (
    <>
      <PinContainer
        containerClassName={
          "w-80 rounded-xl border-gray-300 capitalize"
        }
        className={"w-80 px-2 pb-2 "}
        to={to}
      >
        <h1 className="text-4xl  text-center pt-2 pb-1 font-bold font-megatron">
          {title}
        </h1>
        <p className="text-xl  text-center pb-4 opacity-85 font-gilroy-light">
          {subTitle}{" "}
        </p>

        <img
          className="rounded-md w-full h-64 object-cover object-center hover:opacity-80 transition duration-500 ease-in-out"
          src={img}
        ></img>
      </PinContainer>
      {/* bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 */}
    </>
  );
}

export default Card;
