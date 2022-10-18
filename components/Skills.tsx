/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
};

export default function Skills({ directionLeft }: Props) {
  const skill = [
    {
      id: 1,
      name: "JavaScript",
      progress: "75",
      image:
        "https://diegoboscan.com/static/738155fe5ef8b31a8de213cbd0295fc8/743e0/js-1.png",
    },
    {
      id: 2,
      name: "Typescript",
      progress: "50",
      image:
        "https://lineadecodigo.com/wp-content/uploads/2017/08/typescript.png",
    },
    {
      id: 1,
      name: "HTML",
      progress: "65",
      image:
        "https://pixelmechanics.com.sg/wp-content/uploads/2019/06/html5-logo-for-web-development.png",
    },
    {
      id: 2,
      name: "CSS",
      progress: "80",
      image:
        "https://colorlib.com/wp/wp-content/uploads/sites/2/creative-css3-tutorials.jpg",
    },
    {
      id: 1,
      name: "react",
      progress: "65",
      image: "https://reactjs.org/logo-og.png",
    },
    {
      id: 2,
      name: "next.js",
      progress: "50",
      image:
        "https://soshace.com/wp-content/uploads/2019/10/Getting-Started-with-NextJS.jpg",
    },
    {
      id: 1,
      name: "laravel",
      progress: "55",
      image:
        "https://cms-assets.tutsplus.com/uploads/users/769/posts/25334/preview_image/get-started-with-laravel-6-400x277.png",
    },
    {
      id: 2,
      name: "node",
      progress: "65",
      image: "https://miro.medium.com/max/554/1*42aKSdKAWZ3VtqT5ICd82w.png",
    },
    {
      id: 1,
      name: "npm",
      progress: "80",
      image: "https://somospnt.com/images/blog/cover/Que_es_npm.png",
    },
    {
      id: 2,
      name: "github",
      progress: "85",
      image:
        "https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU",
    },
    {
      id: 1,
      name: "firebase",
      progress: "45",
      image: "https://i.ytimg.com/vi/yfyedOKrZ6o/maxresdefault.jpg",
    },
    {
      id: 2,
      name: "MySQL",
      progress: "40",
      image:
        "https://t1.uc.ltmcdn.com/es/posts/0/0/3/como_encontrar_mi_version_de_mysql_1300_600.jpg",
    },
    {
      id: 1,
      name: "mongodb",
      progress: "55",
      image:
        "https://live.mrf.io/statics/i/ps/www.muylinux.com/wp-content/uploads/2019/01/mongodb.png?width=1200&enable=upscale",
    },
    {
      id: 2,
      name: "azure",
      progress: "65",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png",
    },
    {
      id: 1,
      name: "python",
      progress: "55",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/1200px-Python.svg.png",
    },
    {
      id: 2,
      name: "vueJs",
      progress: "30",
      image: "https://vuejs.org/images/logo.png",
    },
  ];
  return (
    // <motion.div
    //   initial={{ opacity: 0 }}
    //   whileInView={{ opacity: 1 }}
    //   transition={{ duration: 1.5 }}
    //   className="flex relative flex-col text-center md:text-left xl:flex-row
    //  max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    // >
    //   <h3 className="absolute top-24 uppercase tracking-[20x] text-gray-500 text-2xl">
    //     Skills
    //   </h3>
    //   <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
    //     Hover over a skill for current proficiency
    //   </h3>
    //   {skill.map((skill) => (
    //     <div key={skill.id} className="grid grid-cols-1 grid-rows-3 gap-5">
    //       <div className="group relative flex cursor-pointer">
    //         <motion.img
    //           initial={{
    //             x: directionLeft ? -100 : 100,
    //             opacity: 0,
    //           }}
    //           transition={{ duration: 1 }}
    //           whileInView={{ opacity: 1, x: 0 }}
    //           src={skill.image}
    //           className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32
    //     filter group-hover:grayscale transition duration-300 ease-in-out"
    //         />
    //         <div
    //           className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out
    //   group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0"
    //         >
    //           <div className="flex items-center justify-center h-full">
    //             <p className="text-3xl font-bold text-black opacity-100">
    //               {skill.progress}%
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   ))}
    // </motion.div>

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row
     max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20x] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current proficiency
      </h3>
      <div className="grid grid-cols-4 gap-5">
        {skill.map((skill) => (
          <div key={skill.id}>
            <div className="group relative flex cursor-pointer">
              <motion.img
                initial={{
                  x: directionLeft ? -100 : 100,
                  opacity: 0,
                }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                src={skill.image}
                className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32
         filter group-hover:grayscale transition duration-300 ease-in-out"
              />
              <motion.div
                initial={{
                  x: directionLeft ? -100 : 100,
                }}
                transition={{ duration: 1 }}
                whileInView={{ x: 0 }}
                className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out
       group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0"
              >
                <div className="flex items-center justify-center h-full">
                  <p className="text-3xl font-bold text-black opacity-100">
                    {skill.progress}%
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
