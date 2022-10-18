/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";

type Props = {};

function WorkExperience({}: Props) {
  const experience = [
    {
      id: 1,
      jobTitle: "CEO of google",
      company: "Google",
      image:
        "https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw",
      dateStarted: "02/09/2021",
      dateEnded: "05/10/2022",
      isCurrentlyWorking: "no",
      technologies: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png",
      ],
      points: [
        "1. I worked as a freelancer for about 1 and a halt years",
        "2. primarily working on ui/ux components",
        "3. Using react/react native, next.js, node, taillwind css and php",
        "4. Making things like login pages, langing pages, comment secctions, admin pannels etc...",
      ],
    },
    {
      id: 1,
      jobTitle: "CEO of google",
      company: "Google",
      image:
        "https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw",
      dateStarted: "02/09/2021",
      dateEnded: "05/10/2022",
      isCurrentlyWorking: "no",
      technologies: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
      ],
      points: [
        "1. I worked as a freelancer for about 1 and a halt years",
        "2. primarily working on ui/ux components",
        "3. Using react/react native, next.js, node, taillwind css and php",
        "4. Making things like login pages, langing pages, comment secctions, admin pannels etc...",
      ],
    },
    {
      id: 1,
      jobTitle: "CEO of google",
      company: "Google",
      image:
        "https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw",
      dateStarted: "02/09/2021",
      dateEnded: "05/10/2022",
      isCurrentlyWorking: "no",
      technologies: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png",
      ],
      points: [
        "1. I worked as a freelancer for about 1 and a halt years",
        "2. primarily working on ui/ux components",
        "3. Using react/react native, next.js, node, taillwind css and php",
        "4. Making things like login pages, langing pages, comment secctions, admin pannels etc...",
      ],
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row
      max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20x] text-gray-500 text-2xl mb-10">
        Experience
      </h3>
      <div
        className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory 
      scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f05454]/80"
      >
        {experience.map((experience, i) => (
          <article
            key={experience.id}
            className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
            w-[400px] h-[800px] md:w-[550px] xl:w-[800px] snap-center bg-[#292929] p-10 hover:opacity-100 
            opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden pt-5"
          >
            <motion.img
              initial={{
                y: -50,
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
              src="https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw"
              alt=""
            />
            <div className="px-0 md:px-10">
              <h4 className="text-4xl font-light">{experience.jobTitle}</h4>
              <p className="font-bold text-2xl mt-1">{experience.company}</p>
              <div className="flex space-x-2 my-2">{/* tech used */}</div>
              <p className="uppercase py-5 text-gray-300">
                Started in: {experience.dateStarted} - Ended in:{" "}
                {experience.dateEnded}
              </p>
              <div className="flex items-center space-x-2 justify-center">
                {experience.technologies.map((technology, i) => (
                  <img key={i} src={technology} alt="" className="h-10 w-10" />
                ))}
              </div>
              <ul className="list-disc space-y-4 ml-5 text-lg h-90 max-w-6/7 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#f05454]/80">
                {experience.points.map((points, i) => (
                  <li key={i}>{points}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </motion.div>
  );
}

export default WorkExperience;
