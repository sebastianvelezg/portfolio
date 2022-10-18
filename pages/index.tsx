/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import WorkExperience from "../components/WorkExperience";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Home: NextPage = () => {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f05454]/80"
    >
      {/* className=" text-white h-screen" */}
      {/* className="bg-[#171717] text-white h-screen" */}
      <Head>
        <title>Sebastian`s portfolio</title>
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="contactMe" className="snap-end">
        <ContactMe />
      </section>
      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src="https://media-exp1.licdn.com/dms/image/C5603AQH5VO4llF2grw/profile-displayphoto-shrink_800_800/0/1657068953958?e=1669852800&v=beta&t=NyJg8WGfhyti4eXissd07W7pCSU2K5BZOihx7-09X5k"
              alt=""
            />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;
