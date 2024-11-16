import SecHeading from "./common/SecHeading";
import WeDoImage from "../assets/service1-1.jpg";
import WeDoImage1 from "../assets/service1-2.jpg";
import WeDoImage2 from "../assets/service1-3.jpg";
import { LuArrowUpRight } from "react-icons/lu";
import { useState } from "react";
import wedoIcon from "../assets/circuit-board.png";
import meterIcon from "../assets/electric-meter.png";
import voltageIcon from "../assets/high-voltage.png";
import arrowDown from "../assets/icon-arrow.png";
import { Link } from "react-router-dom";

const WhatWeDo = () => {
  const [activeHovered, setActiveHovered] = useState("");
  const weDoList = [
    {
      image: WeDoImage,
      name: "house maintenance",
      desc: "We offer end-to-end logistics tailored for specific markets. providing solution",
      link: "#",
      icon: (
        <img
          src={wedoIcon}
          alt="house maintenance"
          className="bg-[#C90F16] border-none max-w-[4rem] p-[1rem]"
        />
      ),
    },
    {
      image: WeDoImage1,
      name: " Electric Panel Repair",
      desc: "We offer end-to-end logistics tailored for specific markets. providing solution",
      link: "#",
      icon: (
        <img
          src={meterIcon}
          alt="house maintenance"
          className="bg-[#C90F16] border-none max-w-[4rem] p-[1rem]"
        />
      ),
    },
    {
      image: WeDoImage2,
      name: "Air Conditioning ",
      desc: "We offer end-to-end logistics tailored for specific markets. providing solution",
      link: "#",
      icon: (
        <img
          src={voltageIcon}
          alt="house maintenance"
          className="bg-[#C90F16] border-none max-w-[4rem] p-[1rem]"
        />
      ),
    },
  ];
  return (
    <section className="py-[3rem] px-4 flex flex-col  gap-8">
      <SecHeading
        divstyle={"flex flex-col items-center justify-center text-center"}
        mainhead={"what we do"}
        subhead={"We Offer Cost Efficient Electrical Services"}
        substyle={"text-[1.5rem]"}
      />
      <div className="allwedo grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3">
        {weDoList.map((singleDo) => (
          <Link
            to={singleDo.link}
            className="wedo_container relative overflow-hidden aspect-[9/8] max-w-[500px] "
            key={singleDo.name}
            onMouseOver={() => setActiveHovered(singleDo.name)}
            onMouseOut={() => setActiveHovered("")}
          >
            <img
              src={singleDo.image}
              alt={singleDo.name}
              className={`w-[93%] h-full ease-in-out duration-300 object-cover ${
                activeHovered === singleDo.name ? "scale-110" : " scale-100"
              }`}
            />
            <button
              className={` absolute w-[20%]  right-0 top-[20%] flex items-center justify-center gap-2 ease-in-out duration-500 ${
                activeHovered === singleDo.name
                  ? "bg-[#24201F] text-stone-100"
                  : "bg-[#f3f4f7]"
              } `}
            >
              {" "}
              read more{" "}
              <LuArrowUpRight className="font-bold text-red-600 text-[1.1rem]" />
            </button>
            <div
              className={`wedocard_text px-6 capitalize py-4 bg-white w-full absolute bottom-0  border border-[#dddddd] ease-in-out duration-500 flex flex-col items-start gap-5  ${
                activeHovered === singleDo.name ? "h-[60%]" : "h-[6rem]"
              }`}
            >
              <p className=" font-bold text-[1.3rem] max-w-[250px] flex items-center gap-4">
                {singleDo.icon}
                {singleDo.name}
              </p>
              <p className="font-light text-sm text-stone-500">
                {singleDo.desc}
              </p>
              <img
                src={arrowDown}
                alt="arrow down"
                className="absolute right-[6%]"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;
