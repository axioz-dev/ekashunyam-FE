import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Card from "./Card.jsx";
import { ArrowDownIcon } from "@heroicons/react/24/solid";

//importing images
import img1 from "/Public/Horizontal/img14.jpg";
import img2 from "/Public/Horizontal/img13.jpg";
import img3 from "/Public/Horizontal/img11.jpg";
import img4 from "/Public/Horizontal/img12.jpg";
import img5 from "/Public/Horizontal/img1.png";
import img6 from "/Public/Horizontal/img6.jpg";
import img7 from "/Public/Horizontal/img10.jpg";
import img8 from "/Public/Horizontal/img2.jpg";

function HorizontalScroll() {
  useEffect(() => {
    const storedScrollPosition = parseInt(
      localStorage.getItem("scrollPosition"),
      10
    );
    if (storedScrollPosition) {
      window.scrollTo(0, storedScrollPosition);
      localStorage.removeItem("scrollPosition"); // Optional
    }
  }, []);

  const container = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(
    () => {
      const getScrollAmount = () => {
        if (container.current) {
          const width = window.innerWidth > 1000 ? 100 : 50;
          return container.current.scrollWidth - window.innerWidth + width;
        }
      };
      const tween = gsap.to("#scroll-div", {
        x: getScrollAmount() * -1,
        duration: 3,
        ease: "none",
      });

      ScrollTrigger.create({
        trigger: "#scroll-wrapper",
        start: "top 10%",
        end: `+=${getScrollAmount()} top`,
        pin: true,
        animation: tween,
        invalidateOnRefresh: true,
        scrub: 1,
      });
    },
    { container }
  );

  return (
    <>
      <div
        className="overflow-hidden h-screen  bg-center bg-cover bg-[url('/Public/Images/Home/3.webp')]"
        id="scroll-wrapper"
      >
        <div className=" text-6xl text-center pt-8 pb-20 text-white font-megatron">
          EVENTS
        </div>
        <div
          className="px-32 flex flex-nowrap gap-28 capitalize"
          id="scroll-div"
          ref={container}
        >
          <Card
            title={"Auto Bot"}
            subTitle={"Quiz"}
            img={img1}
            to={"auto-bot"}
          />
          <Card
            title={"Cybertron"}
            subTitle={"Coding and Debugging"}
            img={img2}
            to={"cybertron"}
          />
          <Card
            title={"Web Forge"}
            subTitle={"Web Designing"}
            img={img3}
            to={"web-forge"}
          />
          <Card
            title={"Prime Expo"}
            subTitle={"Product Launch"}
            img={img4}
            to={"prime-expo"}
          />
          <Card
            title={"Energon Rhythm"}
            subTitle={"Dance"}
            img={img5}
            to={"energon-rhythm"}
          />
          <Card
            title={"The Last Knight"}
            subTitle={"IT Manager"}
            img={img6}
            to={"the-last-knight"}
          />
          <Card
            title={"Battle Arena"}
            subTitle={"Gaming"}
            img={img7}
            to={"battle-arena"}
          />
          <Card
            title={"Cybernetics Lens"}
            subTitle={"Photography and Videography"}
            img={img8}
            to={"cybernetics-lens"}
          />
        </div>
        <div className="text-white text-center mt-24 flex flex-col gap-4 font-gilroy-light justify-center items-center">
          <div className="w-40 ">
            <h1 className="bg-yellow-400 py-2 text-black rounded-full animate-pulse duration-1000">Scroll down</h1>
          </div>
          <ArrowDownIcon className="text-white h-8 animate-bounce" />
        </div>
      </div>
    </>
  );
}

export default HorizontalScroll;
