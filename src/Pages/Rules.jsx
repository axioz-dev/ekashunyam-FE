import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import call from "/Public/Horizontal/image.png";
import exit from "/Public/Horizontal/close-button.png";

function Rules() {
  const navigate = useNavigate();
  let { eventId } = useParams();
  const [eventDetails, setEventDetails] = useState({});

  useEffect(() => {
    const Eventobj = [
      {
        id: "auto-bot",
        eventName: "Auto bot",
        subName: "Quiz",
        rules: [
          "Two make a team",
          "Number of rounds: 3.",
          "Rounds will be explained on the spot.",
          " rules related to each round will be conveyed at the time of the event.",
          "Electronic gadgets are not allowed.",
          "The quiz master's verdict is ultimate in the final round.",
        ],
        coOrdinator1: "Adarsh Gogate",
        contact1: "7619338271",
        coOrdinator2: "Akshay Hebbar  ",
        contact2: "9740569989",
      },
      {
        id: "cybertron",
        eventName: "Cybertron",
        subName: "Coding and Debugging",
        rules: [
          "Two make a team",
          "Sheet of paper will be provided, Bring a Pen.",
          "Rounds will be explained in the start of event.",
          "Final round is a Creative round. So, Judge’s decision will be FINAL.",
        ],
        coOrdinator1: "Anantha M",
        contact1: "9449504361",
        coOrdinator2: "Adithya G",
        contact2: "8762116456",
      },
      {
        id: "web-forge",
        eventName: "Web Forge",
        subName: "Web Designing",
        rules: [
          "TWO MAKE A TEAM",
          "KNOWLEDGE IN HTML CSS AND JS IS NECESSARY.",
          "THE DETAILS OF EACH ROUND WILL BE DISCLOSED ON THE SPOT.SYSTEMS WILL BE PROVIDED.",
        ],
        coOrdinator1: "Nagachaithanya",
        contact1: "8431634118",
        coOrdinator2: "Spandana",
        contact2: "9148239448",
      },
      {
        id: "prime-expo",
        eventName: "Prime Expo",
        subName: "Product Launch",
        rules: [
          "It is an individual event",
          "Number of rounds : 3",
          "Rounds and rules will be conveyed at each round ",
          "Original and unique idea related to IT field are encouraged",
          "Participants must bring their own laptop",
          "Participants must send their ppt to 210914@sdmcujire.in , 1 day prior the event",
          "Judges decision will be final ",
        ],
        coOrdinator1: "Charan B S  ",
        contact1: "7406832289",
        coOrdinator2: "Akshay G  ",
        contact2: "9141030375",
      },
      {
        id: "energon-rhythm",
        eventName: "Energon Rhythm",
        subName: "Dance",
        rules: [
          "Number of participants 3-5.",
          "Each team is given 4+1 minutes.",
          "Any theme can be potrayed.",
          "Submit the music 30 minutes before the event starts.",
          "Maintain decency in costumes.",
          "No use of Fire,flammable materials.",
          "Usage of props are allowed.",
          "Judges decision will be final.",
        ],
        coOrdinator1: "Vandana Pai",
        contact1: "7899935742",
        coOrdinator2: "Nishmitha V G",
        contact2: "8660770807",
        coOrdinator3: "pavan Kumar",
        contact3: "8431654537",
      },
      {
        id: "the-last-knight",
        eventName: "The Last Knight",
        subName: "IT Manager",
        rules: [
          "Number of participants -1",
          "The details of each round will be disclosed on the spot.",
          "Participants must be familiar with the basics of either c or java.",
          "Participants should have 3 copies of their resume.",
          "Participants should bring their laptops with reliable internet.",
        ],
        coOrdinator1: "Nishitha A Shetty",
        contact1: "7625096336",
        coOrdinator2: "K Kiran ",
        contact2: "8277463806",
      },
      {
        id: "battle-arena",
        eventName: "Battle Arena",
        subName: "Gaming[BGMI]",
        rules: [
          "Two make a team",
          "Participants' levels should be above 20.",
          "No gadgets will be provided for the event.",
          "Hacking or foul plays will lead to disqualification",
          "Maps needed: Erangel,Miramar,Sanhok",
          "Both android and ios devices are allowed",
        ],
        coOrdinator1: "Sharan",
        contact1: "8431328399",
        coOrdinator2: "Shreenidhi",
        contact2: "9019624337",
      },
      {
        id: "cybernetics-lens",
        eventName: "Cybernetics Lens",
        subName: "Photography and Videography",
        rules: [
          "The event consists of three rounds",
          "Participants must have their personal camera, phones, laptop and gimbal",
          "It is an individual event",
        ],
        coOrdinator1: "Shrajan G shetty",
        contact1: "8105643829",
        coOrdinator2: "Vivek Acharya",
        contact2: "9686506530",
      },
    ];

    const filteredObject = Eventobj.find((event) => event.id === eventId);

    if (filteredObject) {
      setEventDetails(filteredObject);
    } else {
      navigate("*");
    }
  }, [eventId, navigate]);

  const {
    id,
    eventName,
    subName,
    rules,
    coOrdinator1,
    contact1,
    coOrdinator2,
    contact2,
    coOrdinator3,
    contact3,
  } = eventDetails;

  const handleNavigate = () => {
    const scrollPosition = 3000;
    localStorage.setItem("scrollPosition", scrollPosition);

    navigate("/", { replace: true });
  };
  return (
    <div
      className="flex justify-center items-center h-screen bg-cover lg:bg-top bg-center p-6 capitalize"
      style={{ backgroundImage: "url('/Public/Horizontal/primeBg2.png')" }}
    >
      <div className="bg-opacity-30  backdrop-blur-md  rounded-xl p-4 lg:p-10 shadow-2xl bg-white hover:bg-opacity-40 transition duration-300 ease-in transform border hover:border-yellow-400 relative">
        <h1 className="lg:text-5xl text-3xl text-center mb-2 font-extrabold ">
          {eventName}
        </h1>
        <h3 className="lg:text-2xl text-lg text-center font-semibold  ">
          ( {subName} )
        </h3>
        <div
          className="lg:p-10 p-5
        "
        >
          <ul>
            {rules &&
              rules.map((item) => (
                <li
                  className="lg:text-2xl text-lg list-disc lg:mb-2  mb-1  "
                  key={item}
                >
                  {item}
                </li>
              ))}
          </ul>
        </div>
        <div className="flex justify-center items-center lg:gap-20 gap-10 flex-wrap">
          <div>
            <p className="lg:text-2xl text-xl font-semibold lg:mb-2 mb-1">
              {coOrdinator1}
            </p>
            <div className="flex lg:gap-4 gap-1">
              <img src={call} alt="this is iage" className="lg:w-6 w-4" />
              <p className="lg:text-2xl text-base font-semibold">{contact1}</p>
            </div>
          </div>
          {coOrdinator2 && (
            <div>
              <p className="lg:text-2xl text-xl font-semibold lg:mb-2 mb-1">
                {coOrdinator2}
              </p>
              <div className="flex lg:gap-4 gap-1">
                <img src={call} alt="call icon" className="lg:w-6 w-4" />
                <p className="lg:text-2xl text-base font-semibold">
                  {contact2}
                </p>
              </div>
            </div>
          )}
          {coOrdinator3 && (
            <div>
              <p className="lg:text-2xl text-xl font-semibold lg:mb-2 mb-1">
                {coOrdinator3}
              </p>
              <div className="flex lg:gap-4 gap-1">
                <img src={call} alt="call icon" className="lg:w-6 w-4" />
                <p className="lg:text-2xl text-base font-semibold">
                  {contact3}
                </p>
              </div>
            </div>
          )}
          <button
            className="absolute lg:top-2 lg:right-6 lg:p-8 top-2 right-2 p-2"
            onClick={handleNavigate}
            // onClick={() => navigate("/")}
          >
            <img
              className="lg:w-12 w-6  hover:scale-110 hover:rotate-2 transition-all duration-300 ease-in"
              src={exit}
              alt="Exit icon"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Rules;
