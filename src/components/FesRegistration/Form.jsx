import React from "react";
import { useState } from "react";
import useSubmit from "@/Hooks/useSubmit";
import Loader from "../Loader/Loader";
import BentoBox from "../Additional/BentoBox/BentoBox";

const Form = ({ isregisterd, regdata }) => {
  const { loading, formverify } = useSubmit();

  //State Variable

  const [formFields, setFormFields] = useState({
    event1: {
      participants: [
        { name: "", contact: "" },
        { name: "", contact: "" },
      ],
    },

    event2: {
      participants: [{ name: "", contact: "" }],
    },

    event3: {
      participants: [{ name: "", contact: "" }],
    },

    event4: {
      participants: [
        { name: "", contact: "" },
        { name: "", contact: "" },
      ],
    },

    event5: {
      participants: [
        { name: "", contact: "" },
        { name: "", contact: "" },
      ],
    },

    event6: {
      participants: [
        { name: "", contact: "" },
        { name: "", contact: "" },
      ],
    },

    event7: {
      participants: [
        { name: "", contact: "" },
        { name: "", contact: "" },
      ],
    },

    event8: {
      participants: [
        { name: "", contact: "" },
        { name: "", contact: "" },
        { name: "", contact: "" },
      ],
    },
  });

  //adding participants on change

  const handleParticipantChange = (eventKey, index, field, value) => {
    setFormFields((prevState) => {
      const newState = { ...prevState };
      newState[eventKey].participants[index][field] = value;
      return newState;
    });
  };

  //adding extra participants

  const addParticipant = () => {
    if (formFields.event8.participants.length < 5) {
      setFormFields((prevState) => ({
        ...prevState,
        event8: {
          ...prevState.event8,
          participants: [
            ...prevState.event8.participants,
            { name: "", contact: "" },
          ],
        },
      }));
    } else {
      alert("Maximum 5 participants allowed");
    }
  };

  // remove participants

  const removeParticipant = (index) => {
    if (index >= 3) {
      setFormFields((prevState) => {
        const updatedParticipants = [...prevState.event8.participants];
        updatedParticipants.splice(index, 1);
        return {
          ...prevState,
          event8: {
            ...prevState.event8,
            participants: updatedParticipants,
          },
        };
      });
    }
  };

  //handle sumbit + errors

  const handleSubmit = async (e) => {
    e.preventDefault();
    await formverify(formFields, setFormFields);
  };

  //return logic

  return (
    <>
      {loading && <Loader />}
      <div className="bg-yellow-400 w-screen">
        <BentoBox regdata={regdata} />

        <div style={{ display: isregisterd ? "none" : "block" }}>
          <form onSubmit={handleSubmit} className="">
            <div className="bg-inherit bg-contain bg-[url('/src/Public/Images/Dashboard_Page/1.jpg')] py-8 rounded-bl-3xl">
            {/* <div className="py-8 rounded-bl-3xl"> */}
              <h1 className="font-megatron text-white text-5xl text-center mb-0 sm:text-6xl md:mb-3">
                Registration
              </h1>

              <div className=" grid items-center md:grid-cols-2 lg:px-16">
                <div className="mt-8 bg-opacity-20 rounded-lg py-8 mx-10 flex px-8 justify-evenly flex-col shadow-xl backdrop-blur-3xl border-[0.8]  hover:backdrop-blur-md transition-all duration-500 cursor-pointer">
                  <div className="flex justify-between gap-12 text-black-900 items-center">
                    <h1 className="font-megatron text-4xl">AUTO BOT</h1>
                    <h1 className="text-2xl font-semibold font-gilroy">1/8</h1>
                  </div>
                  <div>
                    <h3 className="mt-2 font-gilroy-light text-white tracking-wider">
                      Quiz(2 make a team)
                    </h3>
                  </div>
                  {formFields.event1.participants.map((participant, index) => (
                    <div key={index}>
                      <input
                        type="text"
                        value={participant.name}
                        className="shadow-sm px-6 rounded-xl bg-black mt-6 text-sm block w-full p-2.5 border-b-[1px] text-white outline-none pb-4"
                        placeholder={`Participant ${index + 1} Name`}
                        onChange={(e) =>
                          handleParticipantChange(
                            `event1`,
                            index,
                            "name",
                            e.target.value
                          )
                        }
                      />
                      <input
                        type="tel"
                        value={participant.contact}
                        className="shadow-sm px-6 rounded-xl bg-black mt-6 text-sm block w-full p-2.5 border-b-[1px] text-white outline-none pb-4"
                        placeholder={`Participant ${index + 1} Contact Number`}
                        onChange={(e) =>
                          handleParticipantChange(
                            "event1",
                            index,
                            "contact",
                            e.target.value
                          )
                        }
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-opacity-20 rounded-lg py-8 mx-10 flex px-8 justify-evenly flex-col shadow-xl backdrop-blur-3xl border-[0.8]   hover:backdrop-blur-md transition-all duration-500 ">
                  <div className="flex justify-between gap-12 text-black-900 items-center">
                    <h1 className="font-megatron text-4xl">Cybertron</h1>
                    <h1 className="text-2xl font-semibold font-gilroy">2/8</h1>
                  </div>
                  <div>
                    <h3 className="mt-2 font-gilroy-light text-white">
                      Quiz(2 make a team)
                    </h3>
                  </div>
                  {formFields.event2.participants.map((participant, index) => (
                    <div key={index}>
                      <input
                        type="text"
                        placeholder="Participant Name"
                        value={participant.name}
                        className="shadow-sm px-6 rounded-xl bg-black mt-6 text-sm block w-full p-2.5 border-b-[1px] text-white outline-none pb-4"
                        onChange={(e) =>
                          handleParticipantChange(
                            "event2",
                            index,
                            "name",
                            e.target.value
                          )
                        }
                      />
                      <input
                        type="tel"
                        value={participant.contact}
                        className="shadow-sm px-6 rounded-xl bg-black mt-6 text-sm block w-full p-2.5 border-b-[1px] text-white outline-none pb-4"
                        placeholder={`Participant Contact`}
                        onChange={(e) =>
                          handleParticipantChange(
                            "event2",
                            index,
                            "contact",
                            e.target.value
                          )
                        }
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-opacity-20 rounded-lg py-8  mx-10 flex px-8 justify-evenly flex-col shadow-xl backdrop-blur-3xl border-[0.8]   hover:backdrop-blur-md transition-all duration-500 ">
                  <div className="flex justify-between gap-12 text-black-900 items-center">
                    <h1 className="font-megatron text-4xl">Web Forge</h1>
                    <h1 className="text-2xl font-semibold font-gilroy">3/8</h1>
                  </div>
                  <div>
                    <h3 className="mt-2 font-gilroy-light text-white">
                      IT Manager(Individual)
                    </h3>
                  </div>
                  {formFields.event3.participants.map((participant, index) => (
                    <div key={index}>
                      <input
                        type="text"
                        value={participant.name}
                        className="shadow-sm px-6 rounded-xl bg-black mt-6 text-sm block w-full p-2.5 border-b-[1px] text-white outline-none pb-4"
                        placeholder={`Participant Name`}
                        onChange={(e) =>
                          handleParticipantChange(
                            "event3",
                            index,
                            "name",
                            e.target.value
                          )
                        }
                      />
                      <input
                        type="tel"
                        value={participant.contact}
                        className="shadow-sm px-6 rounded-xl bg-black mt-6 text-sm block w-full p-2.5 border-b-[1px] text-white outline-none pb-4"
                        placeholder={`Participant Contact`}
                        onChange={(e) =>
                          handleParticipantChange(
                            "event3",
                            index,
                            "contact",
                            e.target.value
                          )
                        }
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-opacity-20 rounded-lg py-8  mx-10 flex px-8 justify-evenly flex-col shadow-xl backdrop-blur-3xl border-[0.8]   hover:backdrop-blur-md transition-all duration-500 ">
                  <div className="flex justify-between gap-12 text-black-900 items-center">
                    <h1 className="font-megatron text-4xl">Prime Expo</h1>
                    <h1 className="text-2xl font-semibold font-gilroy">4/8</h1>
                  </div>
                  <div>
                    <h3 className="mt-2 font-gilroy-light text-white">
                      Gaming(2 make a team)
                    </h3>
                  </div>
                  {formFields.event4.participants.map((participant, index) => (
                    <div key={index}>
                      <input
                        type="text"
                        value={participant.name}
                        className="shadow-sm px-6 rounded-xl bg-black mt-6 text-sm block w-full p-2.5 border-b-[1px] text-white outline-none pb-4"
                        placeholder={`Participant ${index + 1} Name`}
                        onChange={(e) =>
                          handleParticipantChange(
                            "event4",
                            index,
                            "name",
                            e.target.value
                          )
                        }
                      />
                      <input
                        type="tel"
                        value={participant.contact}
                        className="shadow-sm px-6 rounded-xl bg-black mt-6 text-sm block w-full p-2.5 border-b-[1px] text-white outline-none pb-4"
                        placeholder={`Partcipant ${index + 1} Contact Number`}
                        onChange={(e) =>
                          handleParticipantChange(
                            "event4",
                            index,
                            "contact",
                            e.target.value
                          )
                        }
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-opacity-20 rounded-lg py-8  mx-10 flex px-8 justify-evenly flex-col shadow-xl backdrop-blur-3xl border-[0.8]   hover:backdrop-blur-md transition-all duration-500 ">
                  <div className="flex justify-between gap-12 text-black-900 items-center">
                    <h1 className="font-megatron text-4xl">Energeon Rhythm</h1>
                    <h1 className="text-2xl font-semibold font-gilroy">5/8</h1>
                  </div>
                  <div>
                    <h3 className="mt-2 font-gilroy-light text-white">
                      Coding(2 make a team)
                    </h3>
                  </div>
                  {formFields.event5.participants.map((participant, index) => (
                    <div key={index}>
                      <input
                        type="text"
                        value={participant.name}
                        className="shadow-sm px-6 rounded-xl bg-black mt-6 text-sm block w-full p-2.5 border-b-[1px] text-white outline-none pb-4"
                        placeholder={`Participant ${index + 1} Name`}
                        onChange={(e) =>
                          handleParticipantChange(
                            "event5",
                            index,
                            "name",
                            e.target.value
                          )
                        }
                      />

                      <input
                        type="tel"
                        value={participant.contact}
                        className="shadow-sm px-6 rounded-xl bg-black mt-6 text-sm block w-full p-2.5 border-b-[1px] text-white outline-none pb-4"
                        placeholder={`Partcipant ${index + 1} Contact Number`}
                        onChange={(e) =>
                          handleParticipantChange(
                            "event5",
                            index,
                            "contact",
                            e.target.value
                          )
                        }
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-opacity-20 rounded-lg py-8  mx-10 flex px-8 justify-evenly flex-col shadow-xl backdrop-blur-3xl border-[0.8]   hover:backdrop-blur-md transition-all duration-500 ">
                  <div className="flex justify-between gap-12 text-black-900 items-center">
                    <h1 className="font-megatron text-4xl">The Last Knight</h1>
                    <h1 className="text-2xl font-semibold font-gilroy">6/8</h1>
                  </div>
                  <div>
                    <h3 className="mt-2 font-gilroy-light text-white">
                      Web design(2 make a team)
                    </h3>
                  </div>
                  {formFields.event6.participants.map((participant, index) => (
                    <div key={index}>
                      <input
                        type="text"
                        value={participant.name}
                        className="shadow-sm px-6 rounded-xl bg-black mt-6 text-sm block w-full p-2.5 border-b-[1px] text-white outline-none pb-4"
                        placeholder={`Participant ${index + 1} Name`}
                        onChange={(e) =>
                          handleParticipantChange(
                            "event6",
                            index,
                            "name",
                            e.target.value
                          )
                        }
                      />
                      <input
                        type="tel"
                        value={participant.contact}
                        className="shadow-sm px-6 rounded-xl bg-black mt-6 text-sm block w-full p-2.5 border-b-[1px] text-white outline-none pb-4"
                        placeholder={`Partcipant ${index + 1} Contact Number`}
                        onChange={(e) =>
                          handleParticipantChange(
                            "event6",
                            index,
                            "contact",
                            e.target.value
                          )
                        }
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-opacity-20 rounded-lg py-8  mx-10 flex px-8 justify-evenly flex-col shadow-xl backdrop-blur-3xl border-[0.8]   hover:backdrop-blur-md transition-all duration-500 ">
                  <div className="flex justify-between gap-12 text-black-900 items-center">
                    <h1 className="font-megatron text-4xl">Battle Arena</h1>
                    <h1 className="text-2xl font-semibold font-gilroy">7/8</h1>
                  </div>
                  <div>
                    <h3 className="mt-2 font-gilroy-light text-white">
                      Photography and Videography(Individual)
                    </h3>
                  </div>
                  {formFields.event7.participants.map((participant, index) => (
                    <div key={index}>
                      <input
                        type="text"
                        value={participant.name}
                        className="shadow-sm px-6 rounded-xl bg-black mt-6 text-sm block w-full p-2.5 border-b-[1px] text-white outline-none pb-4"
                        placeholder={`Participant ${index + 1} Name`}
                        onChange={(e) =>
                          handleParticipantChange(
                            "event7",
                            index,
                            "name",
                            e.target.value
                          )
                        }
                      />
                      <input
                        type="tel"
                        value={participant.contact}
                        className="shadow-sm px-6 rounded-xl bg-black mt-6 text-sm block w-full p-2.5 border-b-[1px] text-white outline-none pb-4"
                        placeholder={`Partcipant ${index + 1} Contact Number`}
                        onChange={(e) =>
                          handleParticipantChange(
                            "event7",
                            index,
                            "contact",
                            e.target.value
                          )
                        }
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-opacity-20 rounded-lg py-8  mx-10 flex px-8 justify-evenly flex-col shadow-xl backdrop-blur-3xl border-[0.8]  hover:backdrop-blur-md transition-all duration-500 ">
                  <div className="flex justify-between gap-12 text-black-900 items-center">
                    <h1 className="font-megatron text-4xl">Cybernetics Lens</h1>
                    <h1 className="text-2xl font-semibold font-gilroy">8/8</h1>
                  </div>
                  <div>
                    <h3 className="mt-2 font-gilroy-light text-white">
                      Dance or Fashion Show(3-5 members)
                    </h3>
                  </div>
                  <h3 className="mb-5"></h3>
                  {formFields.event8.participants.map((participant, index) => (
                    <div key={index}>
                      <input
                        type="text"
                        value={participant.name}
                        className="shadow-sm px-6 rounded-xl bg-black mt-6 text-sm block w-full p-2.5 border-b-[1px] text-white outline-none pb-4"
                        placeholder={`Participant ${index + 1} Name`}
                        onChange={(e) =>
                          handleParticipantChange(
                            "event8",
                            index,
                            "name",
                            e.target.value
                          )
                        }
                        // required
                      />
                      <input
                        type="tel"
                        value={participant.contactNumber}
                        className="shadow-sm px-6 rounded-xl bg-black mt-6 text-sm block w-full p-2.5 border-b-[1px] text-white outline-none pb-4"
                        placeholder={`Participant ${index + 1} Contact Number`}
                        onChange={(e) =>
                          handleParticipantChange(
                            "event8",
                            index,
                            "contact",
                            e.target.value
                          )
                        }
                        // required
                      />

                      {index >= 3 && index <= 5 && (
                        <button
                          className="font-gilroy tracking-wider inline-flex h-12 w-full py-2.5 animate-shimmer items-center justify-center rounded-lg  mt-6 border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-yellow-100 transition-colors hover:outline-none hover:ring-1 hover:ring-yellow-400 hover:ring-offset-1 hover:ring-offset-yellow-50"
                          type="button"
                          onClick={() => removeParticipant(index)}
                        >
                          Remove Participant {index + 1}
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    className="font-gilroy tracking-wider inline-flex h-12 w-full py-2.5 animate-shimmer items-center justify-center rounded-lg mb-6 mt-6 border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-yellow-100 transition-colors hover:outline-none hover:ring-1 hover:ring-yellow-400 hover:ring-offset-1 hover:ring-offset-yellow-50"
                    type="button"
                    onClick={addParticipant}
                  >
                    Add Participant
                  </button>
                </div>
              </div>
              <div className="flex items-center  gap-11 bg-black flex-col mt-10 bg-opacity-50">
                <button
                  type="submit"
                  className="font-megatron text-3xl tracking-wider inline-flex h-12 px-12  py-8 animate-shimmer items-center justify-center rounded-lg mb-6 mt-6 border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium text-yellow-100 transition-colors hover:outline-none hover:ring-1 hover:ring-yellow-400 hover:ring-offset-1 hover:ring-offset-yellow-50"
                >
                  Submit
                </button>
              </div>
            </div>
            <div>
              <marquee
                behavior=""
                direction=""
                className="font-gilroy-light mt-1 font-bold "
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
                sit deserunt ex beatae dolore voluptatibus asperiores. Vero ab
                aliquid facere necessitatibus.
              </marquee>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
