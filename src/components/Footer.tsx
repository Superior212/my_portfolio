import React from "react";
import MagicButton from "./ui/MagicButton";
import { Navigation } from "lucide-react";
import { socialMedia } from "../../data";

const Footer = () => {
  return (
    <footer className="w-full mb-[100px] md:mb-10 pb-10 " id="contact">
      {/* <div className="w-full absolute left-0 -bottom-72 min-h-96s">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div> */}
      <div className="flex flex-col items-center">
        <h1 className="heading max-w-[65vw]">
          Want to boost your <span className="text-[#64ffda]">digital</span>{" "}
          footprint?
        </h1>
        <p className="text-center text-white-200 md:mt-10 my-5 ">
          Contact me now. Let&apos;s talk about your goals and make them happen!
        </p>
        <a href="mailto:samsonaderonmu2021@gmail.com">
          <MagicButton
            title="Get in Touch Today!"
            position="right"
            icon={<Navigation />}
          />
        </a>
      </div>
      <div className=" flex mt-16 md:flex-row flex-col gap-y-6 md:gap-y-0 justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light ">
          Copyright © 2024 Samson Aderonmu
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-blur-lg bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
              <a href={profile.link}>
                <img
                  src={profile.img}
                  height={20}
                  width={20}
                  alt={profile.id}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
