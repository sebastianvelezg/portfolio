import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20x] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        src="https://media-exp1.licdn.com/dms/image/C5603AQH5VO4llF2grw/profile-displayphoto-shrink_800_800/0/1657068953958?e=1671667200&v=beta&t=MHh1dIQElP4WINTKJHb3-8CivttZL_LSv8KIMsIibeE"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 rounded-full object-cover md:rounded-lg md:h-95 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#f05454]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          I am a person who really likes to learn new things, I consider myself
          a very curious, creative, and active person, I`m someone who loves
          learning new things, and I`m also very passionate about the things I
          do. I`m someone responsible for carrying out each of my tasks. and
          with good abilities to work in teams.
        </p>
      </div>
    </motion.div>
  );
}
