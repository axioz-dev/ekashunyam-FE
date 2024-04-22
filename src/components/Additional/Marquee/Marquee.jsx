import React from "react";

const Marquee = () => {
  return (
    <>
      <marquee
        loop="-1"
        behavior="scroll"
        direction="left"
        scrollamount="10"
        className="text-black text-lg font-gilroy bg-yellow-400 p-2 m-0"
      >
        <p>
          Time's ticking! Secure your spot now – registration closes on April
          29th !
          <span className="ml-56">
            Time's ticking! Secure your spot now – registration closes on April
            29th !
          </span>
          <span className="ml-56">
            Time's ticking! Secure your spot now – registration closes on April
            29th !
          </span>
          <span className="ml-56">
            Time's ticking! Secure your spot now – registration closes on April
            29th !
          </span>
          <span className="ml-56">
            Time's ticking! Secure your spot now – registration closes on April
            29th !
          </span>
          <span className="ml-56">
            Time's ticking! Secure your spot now – registration closes on April
            29th !
          </span>
          <span className="ml-56">
            Time's ticking! Secure your spot now – registration closes on April
            29th !
          </span>
        </p>
      </marquee>
    </>
  );
};

export default Marquee;
