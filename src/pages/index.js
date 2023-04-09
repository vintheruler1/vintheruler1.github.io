import Head from "next/head";
import {BsFillMoonStarsFill} from "react-icons/bs";
import {AiFillTwitterCircle, AiFillMail, AiFillGithub} from "react-icons/ai";
import Image from "next/image";
import deved from "public/pfp.jpg";
import design from "public/design.png";
import code from "public/code.png";
import consulting from "public/consulting.png";
import web1 from "public/web1.png";
import web2 from "public/web2.png";
import web3 from "public/web3.png";
import web4 from "public/web4.png";
import web5 from "public/web5.png";
import web6 from "public/web6.png";
import {useState} from "react";


export default function Home() {
  const [darkMode, setdarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark": ""}>
      <Head>
        <title className="dark:bg-white">Vinesh Ramroop Portfolio</title>
        <meta name="description" content="Vinesh Ramroop's portfolio." />
        <link rel="icon" href="/pfp.jpg" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:40px dark:bg-black">
        <section className="h-screen">
          <nav className="py-8 mb-12 flex justify-between">
            <h1 className="text-xl dark:text-white">Vinesh</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill onClick={() => setdarkMode(!darkMode)} className="cursor-pointer text-2xl"/>
                </li>
              <li>
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" 
                href="#"
                >
                  Resume
                  </a>
                </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Vinesh Ramroop</h2>
            <h3 className="text-2xl py-2 md:text-3xl text-blue-500 ">Developer and Designer.</h3>
            <p className="text-md py-5 leading-8 text-black md:text-xl max-w-lg mx-auto dark:text-white">
              A person who likes programming and learning new things.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 text-black">
            <a href="https://twitter.com/Vintheruler1R" target="_blank">
              <AiFillTwitterCircle />
            </a> 

            <a href="mailto:vramroop6@gmail.com" target="_blank">
              <AiFillMail/>
            </a>

            <a href="https://github.com/vintheruler1" target="_blank">
              <AiFillGithub/>
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 py-10 bottom-22 overflow-hidden">
            <Image src={deved} layout="fill" objectFit="cover"/>
          </div>
        </section>
        
        <section>
          <div>
            <h3 className="text-3xl py-4 dark:text-white">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-black dark:text-white">
              I offer a wide range of services such as <span className="text-teal-500"> Discord Bots</span>,<span className="text-teal-500"> Websites </span>, and <span className="text-teal-500">AI/Machine Learning</span>.
            </p>
          </div>

          <div className="lg: flex gap-2">
            <div className="text-center shadow-lg p-9 rounded-xl my-10 dark:bg-gray-500">
              <Image src={code} width={100} height={100}/>
              <h3 className = "text-lg font-medium pt-8 pb-2">Discord Bots</h3>
              <p className = "py-2">
                Creating usable and customizable Discord Bots to suite your needs.
              </p>
              <h4 className="text-lg py-4 text-teal-600">Tools I use</h4>
              <p className="text-black py-1">VS Code</p>
              <p className="text-black py-1">Python</p>
              <p className="text-black py-1">Nextcord</p>
            </div>

            <div className="text-center shadow-lg p-9 rounded-xl my-10 dark:bg-gray-500">
              <Image src={design} width={100} height={100}/>
              <h3 className = "text-lg font-medium pt-8 pb-2">Websites</h3>
              <p className = "py-2">
                Modern and simple websites that display information.
              </p>
              <h4 className="text-lg py-4 text-teal-600">Tools I use</h4>
              <p className="text-black py-1">VS Code</p>
              <p className="text-black py-1">React.js</p>
              <p className="text-black py-1">Tailwind CSS</p>
            </div>

            <div className="text-center shadow-lg p-9 rounded-xl my-10 dark:bg-gray-500">
              <Image src={consulting} width={100} height={100}/>
              <h3 className = "text-lg font-medium pt-8 pb-2">AI/Machine Learning</h3>
              <p className = "py-2">
                AI/Machine Learning algorithms ready to be deployed.
              </p>
              <h4 className="text-lg py-4 text-teal-600">Tools I use</h4>
              <p className="text-black py-1">VS Code</p>
              <p className="text-black py-1">Python</p>
              <p className="text-black py-1">Tensorflow</p>
            </div>
          </div>

        </section>

        <section>
        <div>
          <h3 className="text-3xl py-1">Portofolio</h3>
          <p className="text-md py-2 leading-8 text-black dark:text-white">
              I offer a wide range of services such as <span className="text-teal-500"> Discord Bots</span>,<span className="text-teal-500"> Websites </span>, and <span className="text-teal-500">AI/Machine Learning</span>.
          </p>
          <p className="text-md py-2 leading-8 text-black dark:text-white">
          FillerFillerFillerFillerFillerFillerFillerFillerFillerFillerFillerFillerFillerFillerFiller
          </p>
        </div>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <div className="basis-1/3 flex-1">
            <Image src={web1} className="rounded-lg object-cover" width={'100%'} height={"100%"} layout="responsive"/>
          </div>
          <div className="basis-1/3 flex-1">
            <Image src={web2} className="rounded-lg object-cover" width={'100%'} height={"100%"} layout="responsive"/>
          </div>
          <div className="basis-1/3 flex-1">
            <Image src={web3} className="rounded-lg object-cover" width={'100%'} height={"100%"} layout="responsive"/>
          </div>
          <div className="basis-1/3 flex-1">
            <Image src={web4} className="rounded-lg object-cover" width={'100%'} height={"100%"} layout="responsive"/>
          </div>
          <div className="basis-1/3 flex-1">
            <Image src={web5} className="rounded-lg object-cover" width={'100%'} height={"100%"} layout="responsive"/>
          </div>
          <div className="basis-1/3 flex-1">
            <Image src={web6} className="rounded-lg object-cover" width={'100%'} height={"100%"} layout="responsive"/>
          </div>
        </div>
        </section>
      </main>
    </div>
  );
}