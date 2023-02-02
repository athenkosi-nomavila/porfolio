import Head from "next/head";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import athi from "../public/avatar.png";
import java from "../public/java.png";
import javascript from "../public/js.png";
import html from "../public/html.png";
import css from "../public/css.png";
import python from "../public/python.png";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Athenkosi Nomavila Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-gradient-to-b from-blue-300 text- to-cyan-600 px-10 dark: sm:px-10 md:px-20 lg:px-96">
        <section>
          <nav className="py-10  flex justify-between dark:text-white">
            <div className="md:text-4xl lg:text-6xl flex justify-center gap-10 pl-5  py-2 text-gray-800 dark:text-white">
              <a href="https://github.com/Athenksoi-Nomavila/porfolio">
                <AiFillGithub />
              </a>

              <a href="https://www.linkedin.com/in/athenkosi-nomavila">
                <AiFillLinkedin />
              </a>
            </div>
            <ul className="md:text-4xl lg:text-7xl flex justify-center pr-5 py-3">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer md:text-2xl lg:text-5xl"
                />
              </li>
            </ul>
          </nav>
          <div className="text-center shadow-2xl p-10 py-20">
            <h2 className="text-5xl py-2 text-blue-500 font-medium dark:text-teal-400 lg:text-8xl md:text-6xl">
              Athenkosi Nomavila
            </h2>
            <h3 className="text-2xl py-2 dark:text-white lg:text-6xl md:text-3xl">
              Fullstack Developer.
            </h3>
            <div className=" text-center mx-auto shadow-2xl rounded-full w-80 h-80 relative overflow-hidden mt-10 lg:h-fit lg:w-fit md:h-96 md:w-96">
              <Image src={athi} />
            </div>
          </div>
        </section>

        <section className="shadow-2xl text-center  p-10 py-10">
          <div>
            <h2 className="text-5xl pt-20 py-2 font-medium dark:text-teal-400 lg:text-8xl md:text-6xl">
              About
            </h2>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto lg:text-2xl md:text-xl pb-20">
              I am a young software developer who is looking to challenge
              himself in different parts of his life. I am awaiting graduation
              from We Think Code after studying software development. I chose a
              career in software development as a result of my interest in tech
              and my hunger to have an impact in the world. I have been exposed
              to different kinds of people who have vastly different
              perspectives. I believe in a sense of community and teamwork and
              that could be adopted and used to better the workplace, South
              Africa, and beyond.
            </p>
            <i class="uil uil-html5"></i>
          </div>
        </section>

        <section className="shadow-2xl pb-10 text-center">
          <div className="text-center pt-20">
            <h2 className="text-5xl font-medium dark:text-teal-400 lg:text-8xl md:text-6xl">
              Skills
            </h2>
          </div>
          <div className="mx-auto w-20 h-20 mt-5 md:h-46 md:w-46">
            <h2 className=" font-bold ">Java</h2>
            <Image src={java} />
          </div>

          <div className="mx-auto w-20 h-20 mt-5 md:h-46 md:w-46">
            <h2 className=" font-bold ">Javascript</h2>
            <Image src={javascript} />
          </div>

          <div className="mx-auto w-20 h-20 mt-7 md:h-46 md:w-46">
            <Image src={html} />
          </div>

          <div className="mx-auto w-20 h-20 mt-4 md:h-46 md:w-46">
            <Image src={css} />
          </div>

          <div className=" mx-auto w-20 h-20 mt-4 md:h-46 md:w-46">
            <h2 className=" font-bold ">python</h2>
            <Image src={python} />
          </div>
        </section>

        <section className="shadow-2xl p-10 py-10">
          <div className="text-center">
            <h2 className="text-5xl pt-20 py-2 font-medium dark:text-teal-400 lg:text-8xl md:text-6xl">
              Projects
            </h2>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl pb-20 lg:text-2xl">
              These are two of the projects of which I am most proud. Throughout
              In my journey to make them, I was faced with a lot of challenges.
              That brought me out of my comfort zone and forced me to think in
              ways I never thought I could. They brought about exponential
              growth, for which I could say it is only the beginning.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
