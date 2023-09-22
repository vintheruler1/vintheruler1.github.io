import Head from "next/head";
import { AiFillTwitterCircle, AiFillMail, AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import deved from "public/pfp.png";
import design from "public/design.png";
import code from "public/code.png";
import consulting from "public/consulting.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Vinesh Ramroop Portfolio</title>
        <meta name="description" content="Vinesh Ramroop's portfolio." />
        <link rel="icon" href="/pfp.png" />
      </Head>

      <main className="bg-white px-5 md:px-20 lg:px-40 dark:bg-black">
        <section className="h-screen">
          <nav className="py-8 mb-12 flex justify-center md:justify-between">
            <h1 className="text-xl dark:text-white">Vinesh</h1>
            <ul className="flex items-center">
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md"
                  href="./#"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md"
                  href="./projects"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md"
                  href="./resume"
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md"
                  href="./contact"
                >
                  Contact
                </a>
              </li>
              <li>
                {/* <BsLightbulb onClick={() => setdarkMode(!darkMode)} className="cursor-pointer text-2xl ml-8 dark:fill-white"/> */}
              </li>
            </ul>
          </nav>
          <div className="text-center p-5 md:p-10">
            <h2 className="text-3xl md:text-6xl py-2 text-teal-600 font-medium">
              Vinesh Ramroop
            </h2>
            <h3 className="text-xl md:text-3xl py-2 text-blue-500">
              Developer and Designer.
            </h3>
            <p className="text-sm md:text-lg py-5 leading-6 text-black dark:text-white">
              A person who likes programming and learning new things.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 mt-2 mb-5 text-black">
        

            <a href="https://github.com/vintheruler1" target="_blank">
              <AiFillGithub className="dark:fill-white" />
            </a>
          </div>
          <div className="relative mx-auto my-auto mt-10 bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 overflow-hidden">
            <Image src={deved} layout="fill" objectFit="cover" />
          </div>
        </section>

        <section>
          <div className="mt-8">
            <h3 className="text-2xl md:text-3xl py-4 dark:text-white">
              Services I offer
            </h3>
            <p className="text-md md:text-lg py-2 leading-7 text-black dark:text-white">
              I offer a wide range of services such as{" "}
              <span className="text-teal-500"> Discord Bots</span>,{" "}
              <span className="text-teal-500"> Websites </span>, and{" "}
              <span className="text-teal-500">AI/Machine Learning</span>.
            </p>
          </div>

          <div className="lg:flex gap-2 justify-center">
            <div className="text-center shadow-lg p-9 rounded-xl my-10 dark:bg-gradient-to-r from-blue-400 to-blue-600">
              <Image src={code} width={120} height={120} />
              <h3 className="text-lg font-medium pt-8 pb-2">Discord Bots</h3>
              <p className="py-2 flex-wrap text-center">
                Highly customizable and reliable Discord Bots for your Discord
                server.
              </p>
              <h4 className="text-lg py-4 text-teal-600">Tools I use</h4>
              <p className="text-black py-1">Python</p>
              <p className="text-black py-1">Nextcord</p>
              <p className="text-black py-1">Lightbulb Hosting</p>
            </div>

            <div className="text-center shadow-lg p-9 rounded-xl my-10 dark:bg-gradient-to-r from-blue-600 to-purple-400">
              <Image src={design} width={120} height={120} />
              <h3 className="text-lg font-medium pt-8 pb-2">Websites</h3>
              <p className="py-2 flex-wrap text-center">
                Modern and simple websites that display information for
                companies or individuals.
              </p>
              <h4 className="text-lg py-4 text-teal-600">Tools I use</h4>
              <p className="text-black py-1">React.js</p>
              <p className="text-black py-1">Tailwind CSS</p>
              <p className="text-black py-1">Vercel/Github</p>
            </div>

            <div className="text-center shadow-lg p-9 rounded-xl my-10 dark:bg-gradient-to-r from-purple-400 to-purple-700">
              <Image src={consulting} width={120} height={120} />
              <h3 className="text-lg font-medium pt-8 pb-2">AI/Machine Learning</h3>
              <p className="py-2 flex-wrap text-center">
                AI/Machine Learning algorithms ready to be deployed in your
                projects.
              </p>
              <h4 className="text-lg py-4 text-teal-600">Tools I use</h4>
              <p className="text-black py-1">Python</p>
              <p className="text-black py-1">PyTorch</p>
              <p className="text-sm text-black"></p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}