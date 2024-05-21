import { Navigation } from "lucide-react";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/Text-generate-effect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          fill="white"
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
        />
        <Spotlight
          fill="brown"
          className="top-10 left-full  h-[80vh] w-[50vw]"
        />
        <Spotlight fill="blue" className="top-28 left-80  h-[80vh] w-[50vw]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Bringing Web Ideas to Life
          </p>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Creating Experiences that Connect and Engage"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Samson, a passionate Frontend Developer crafting
            seamless user experiences with modern web technologies.
          </p>
          <a href="/about">
            <MagicButton
              title="Explore my projects"
              icon={<Navigation className="w-4 h-4" />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
