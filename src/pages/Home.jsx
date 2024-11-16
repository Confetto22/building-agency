import HeroCard from "../components/common/HeroCard";
import WhatWeDo from "../components/WhatWeDo";
import weAreIllus from "../assets/about2-1.jpg";
import "../styles/Home.css";
import SecHeading from "../components/common/SecHeading";
import electrician from "../assets/electrician.png";
import electricianWhite from "../assets/electrician-white.png";
import plug from "../assets/plug.png";
import plugWhite from "../assets/plug-white.png";
import { useState } from "react";
const Home = () => {
  const [activePoint, setActivePoint] = useState("");

  const weArePoints = [
    {
      name: "Expert Electricians",
      icon: electrician,
      hoverIcon: electricianWhite,
    },
    {
      name: "Safety Assurance",
      icon: plug,
      hoverIcon: plugWhite,
    },
  ];

  return (
    <section className="homepage">
      <HeroCard />
      <WhatWeDo />
      <section className=" we_are flex flex-col md:flex-row md:items-center p-7 gap-5 bg-[#16171A]">
        <div className="relative px-9 md:w-[50%]">
          <div className="absolute w-[60%] h-[90%] top-0 left-4 bottom-0 my-auto bg-[#E0274E] z-[1] rotate-[-7deg]"></div>
          <img
            src={weAreIllus}
            alt="who we are"
            className="w-full h-full relative z-[2]"
          />
          <p className="experience_years bg-white absolute z-[4] text-center px-11 py-5 capitalize leading-7 bottom-6 left-14 text-stone-700 text-sm rounded-sm border-[15px] border-[#b9b8b882]">
            <span className="font-bold text-[3rem] text-black">14+</span> <br />{" "}
            years of experience
          </p>
        </div>
        <div className="we_are_text flex flex-col items-start gap-6 md:w-[50%] md:gap-9">
          <SecHeading
            divstyle={"flex flex-col items-start justify-center "}
            mainhead={"who we are"}
            mainstyle={"text-[#E0274E]"}
            subhead={"Providing High Quality Electrical Solutions"}
            substyle={
              "text-[1.5rem] md:text-[2rem] lg:text-[2.7rem] text-stone-100"
            }
          />
          <p className="text-[#E0274E] underline leading-8 text-[1.2rem] cursor-pointer">
            Our operations span the globe and encompass diverse sectors within
            the electrical industry.
          </p>
          <p className="text-[.9rem] md:text-[1rem] text-stone-300 max-w-[90%]">
            With over four decades of specialized expertise in Electrical
            services, catering to large-scale enterprises worldwide, we provide
            tailored end-to-end solutions crafted for you.
          </p>
          <div className="we_are_points flex items-center justify-start gap-8 border-b border-[#5b5b5b] pb-6  w-full">
            {weArePoints.map((point) => (
              <div
                className="point flex items-center gap-2"
                key={point.name}
                onMouseOver={() => setActivePoint(point.name)}
                onMouseOut={() => setActivePoint("")}
              >
                <img
                  src={
                    activePoint === point.name ? point.hoverIcon : point.icon
                  }
                  alt={point.name}
                  className={`${
                    activePoint === point.name ? "bg-[#E0274E]" : "bg-white"
                  }  p-3 max-w-[70px] ease-in-out duration-500`}
                />

                <p className="text-stone-100 font-semibold text-[1.1rem] max-w-[140px] ">
                  {point.name}
                </p>
              </div>
            ))}
          </div>
          <button className="bg-[#E0274E] uppercase px-6 py-3 text-[.8rem] text-white hover:bg-white hover:text-[#E0274E] ease-in-out duration-300">
            Know More
          </button>
        </div>
      </section>
    </section>
  );
};

export default Home;
