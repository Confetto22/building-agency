import { useState } from "react";

const HeroCard = () => {
  const [btnHovered, setBtnHovered] = useState(false);
  return (
    <section className="hero_card  h-[90vh] w-full">
      <div className="hero_cover bg-[#2609099b] w-full h-full text-stone-100 flex flex-col items-center justify-center text-center px-7 py-12 gap-7">
        <p className="uppercase font-semibold">
          we help your electrical services
        </p>
        <h1 className="text-[3rem] capitalize font-bold leading-[3rem] md:text-[4.5rem] md:leading-[4.4rem]">
          we build quality <br /> electrical engineers.
        </h1>
        <button
          onMouseOver={() => setBtnHovered(true)}
          onMouseOut={() => setBtnHovered(false)}
          className={`uppercase relative  bg-red-600 text-[.9rem] px-6 py-3 font-semibold tracking-wide mt-4 `}
        >
          <div
            className={`animated_hover ease-in-out duration-300 w-full bg-stone-100 absolute left-0 right-0 bottom-0 top-0  text-red-600 flex items-center justify-center ${
              btnHovered ? "h-[100%] text-[.9rem]" : "h-[0%] text-[0px]"
            }`}
          >
            {/* <p className="text-red-600 uppercase text-[.9rem] px-6 py-3 font-semibold tracking-wide mt-4"> */}
            contact us now
            {/* </p> */}
          </div>
          contact us now
        </button>
      </div>
    </section>
  );
};

export default HeroCard;
