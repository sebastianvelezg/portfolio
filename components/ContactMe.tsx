import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function ContactMe({}: Props) {
  const {
    register,
    handleSubmit,

    formState: {},
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:sebastianvelezg42@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}, ${formData.message}, ${formData.email}`;
  };

  return (
    <div
      // initial={{ opacity: 0 }}
      // whileInView={{ opacity: 1 }}
      // transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-row text-center md:text-left xl:flex-row 
      max-w-7xl px-10 justify-center mx-auto items-center"
    >
      <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden"></div>
      <h3 className="absolute top-24 uppercase tracking-[20x] text-gray-500 text-2xl">
        Contact Me
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have got just what you need.
          <span className="decoration-[#f05454]/50 underline"> Lets Talk!</span>
        </h4>
        <motion.div
          initial={{
            x: -400,
            opacity: 0,
            scale: 0.5,
          }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          // viewport={{ once: true }}
          transition={{
            duration: 1.2,
          }}
          className="grid grid-cols-4 gap-5 "
        >
          <SocialIcon
            style={{ height: 100, width: 100 }}
            url="https://linkedin.com/in/sebastian-velez-galeano/"
          />
          <SocialIcon
            style={{ height: 100, width: 100 }}
            bgColor="#111111 "
            url="https://github.com/sebastianvelezg"
          />
          <SocialIcon
            style={{ height: 100, width: 100 }}
            url="https://linkedin.com/in/sebastian-velez-galeano/"
          />
          <SocialIcon
            style={{ height: 100, width: 100 }}
            url="https://instagram.com/sebastianvelezg"
          />
        </motion.div>
        <motion.div
          initial={{
            x: 400,
            opacity: 0,
            scale: 0.5,
          }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          // viewport={{ once: true }}
          transition={{
            duration: 1.2,
          }}
          className="grid grid-cols-4 gap-5 "
        >
          <SocialIcon
            style={{ height: 100, width: 100 }}
            url="https://stackoverflow.com/users/19636691/sebastian-velez"
          />
          <SocialIcon
            style={{ height: 100, width: 100 }}
            url="https://open.spotify.com/user/sebas.bmxyt1?si=e3d88569364547cd"
          />
          <SocialIcon
            style={{ height: 100, width: 100 }}
            url="https://s.team/p/prt-wmdt/VKQQRMMG"
          />
          <SocialIcon
            style={{ height: 100, width: 100 }}
            url="https://discord.gg/dj9csR6sz8"
          />
        </motion.div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#f05454] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
