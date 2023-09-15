import Head from "next/head";
import {AiFillTwitterCircle, AiFillMail, AiFillGithub} from "react-icons/ai";
import Image from "next/image";
import deved from "public/pfp.png";
import design from "public/design.png";
import code from "public/code.png";
import consulting from "public/consulting.png";
import {useState} from "react";


export default function Home() {
  const [darkMode, setdarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark": ""}>
      <Head>
        <title className="dark:bg-white">Vinesh Ramroop Portfolio</title>
        <meta name="description" content="Vinesh Ramroop's portfolio." />
        <link rel="icon" href="/pfp.png" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:40px dark:bg-black">
        <section className="h-screen">
          <nav className="py-8 mb-12 flex justify-between">
            <h1 className="text-xl dark:text-white">Vinesh</h1>
            <ul className="flex items-center">
            <li>
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"  
                href="./#">Home</a>
              </li>
              <li>
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"  
                href="./projects">Projects</a>
              </li>
              <li>
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"  
                href="./resume">Resume</a>
              </li>
              <li>
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"  
                href="./contact">Contact</a>
              </li>
              <li>
                {/* <BsLightbulb onClick={() => setdarkMode(!darkMode)} className="cursor-pointer text-2xl ml-8 dark:fill-white"/> */}
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Projects</h2>
            <p className="text-md py-5 leading-8 text-black md:text-xl max-w-lg mx-auto dark:text-white">
              goofy ahhh projects
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}