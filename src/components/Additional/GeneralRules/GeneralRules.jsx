import React from "react";

const GeneralRules = () => {
  return (
    <div className="text-white  px-4 pb-4 py-24 capitalize">
      <div className="flex justify-center items-center flex-col gap-4 xl:mx-80 md:mx-32 lg:24">
        <h1 className="text-3xl text-center py-4 font-megatron sm:text-6xl">
          General Rules
        </h1>
        <div className="border p-6 rounded-[10px]">
          <ul className="flex flex-col gap-4 font-gilroy-light md:text-2xl ">
            <li>
              - “EKASHUNYAM” is open to BCA,BSC and BVOC [Software] students.
            </li>
            <li>- A maximum of 16 students are allowed per team.</li>
            <li>- Two teams can participate from each college.</li>
            <li>- The registration fees stands at 980 per team.</li>
            <li>- Teams must confirm their participation through website.</li>
            <li>- All participants must be present at 9.00 am.</li>
            <li>
              - Participants are advised to carry their college id card and
              permission letter on the day of the event.
            </li>
            <li>
              - For the overall championship a team must participate in all
              events.
            </li>
            <li>- Breakfast and lunch will be provided.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GeneralRules;
