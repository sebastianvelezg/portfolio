/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function Projects({}: Props) {
  const projects = [
    {
      id: 1,
      title: "Portfolio",
      image: "https://i.postimg.cc/DZYWDkd7/cv-mockup.png",
      summary:
        "This project is my personal portfolio, here you can view all my skills, projects, experiences and contact me!, I made the website in Next.js and react using various new libraries i haven't used, the design was intended to be as minimal and responsive as posible. all the css was made using tailwindCSS and the deployment was made in vercel.  ",
      technologies: [
        "https://fmontes.com/images/_logos/nextjs.svg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/480px-Tailwind_CSS_Logo.svg.png",
        "https://pbs.twimg.com/profile_images/778422085639032832/44mC-kJ3_400x400.jpg",
        "https://w7.pngwing.com/pngs/436/888/png-transparent-vercel-hd-logo.png",
      ],
    },
    {
      id: 1,
      title: "Netflix Clone",
      image: "https://i.postimg.cc/DZYWDkd7/cv-mockup.png",
      summary:
        "This project is a netflix clone, you can register and log in using firebase authentication, you can see the name title and description of a lot of movies also they are organized by categories, you can add a payment method to add a subscription to the app using stripe, all the movie information is beeing retrived using The Movie DB API wich lets you acces alot of information from allmost all movies. ",
      technologies: [
        "https://reactjs.org/logo-og.png",
        "https://colorlib.com/wp/wp-content/uploads/sites/2/creative-css3-tutorials.jpg",
        "https://daqxzxzy8xq3u.cloudfront.net/wp-content/uploads/2019/04/21032431/redux-cover-imgage-1024x768.jpg",
        "https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci8zMWEwMmRhMmMxMzAzYTYyY2FhZGExZDVjMDUyN2QwNT9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.tvEFzgHZirj_EgBw3nLm9A6xD_fuBiw9ONh-odh21Ss",
        "https://i.ytimg.com/vi/yfyedOKrZ6o/maxresdefault.jpg",
      ],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-left md:flex-row max-w-full h-screen justify-evenly mx-auto 
      items-center overflow-hidden z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20x] text-gray-500 text-2xl">
        Projects
      </h3>
      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 
      scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f05454]/80"
      >
        {projects.map((projects) => (
          <div
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center
            p-20 md:-44 h-screen"
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={projects.image}
              alt=""
              className="border-none object-cover w-1/4"
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#f05454]/50">
                  Project:{" "}
                </span>

                {projects.title}
              </h4>
              <div className="flex items-center space-x-2 justify-center">
                {projects.technologies.map((technology, i) => (
                  <img key={i} src={technology} alt="" className="h-10 w-10" />
                ))}
              </div>
              <p className="text-lg text-center">{projects.summary}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#f05454]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}
