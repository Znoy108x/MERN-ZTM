import React, { useState, useEffect, useRef } from 'react'
import { Parallax } from 'react-scroll-parallax';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link, useNavigate } from "react-router-dom"
import ReviewsMarqueue from "./ReviewsMarqueue"
import MarqueueComp from './MarqueueComp';
// images
import h1 from "../assets/images/h1.webp"
import h2 from "../assets/images/h2.webp"
import h3 from "../assets/images/h3.webp"
import i1 from "../assets/images/i1.webp"
import i2 from "../assets/images/i2.webp"
import i3 from "../assets/images/i3.webp"
import i4 from "../assets/images/i4.webp"
import i5 from "../assets/images/i5.webp"
import i6 from "../assets/images/i6.webp"
import i7 from "../assets/images/i7.webp"
import i8 from "../assets/images/i8.webp"
import i9 from "../assets/images/i9.webp"
import i10 from "../assets/images/i10.webp"
import i11 from "../assets/images/i11.webp"
import b1 from "../assets/images/b1.webp"
import b2 from "../assets/images/b2.webp"
import b3 from "../assets/images/b3.webp"
import b4 from "../assets/images/b4.webp"
import a1 from "../assets/images/a1.webp"
import a2 from "../assets/images/a2.webp"
import a3 from "../assets/images/a3.svg"
import g1 from "../assets/images/g1.webp"
import g2 from "../assets/images/g2.webp"
import g3 from "../assets/images/g3.webp"
import g4 from "../assets/images/g4.png"
import g5 from "../assets/images/g4.webp"
import w1 from "../assets/images/w1.webp"
import w2 from "../assets/images/w2.svg"
import w3 from "../assets/images/w3.webp"
import andrie from "../assets/images/andrie.webp"
import Typed from "typed.js";
const Hero = () => {
  const hearo_icons_lst = [
    { image: i1, key: 1 },
    { image: i2, key: 2 },
    { image: i3, key: 3 },
    { image: i4, key: 4 },
    { image: i5, key: 5 },
    { image: i6, key: 6 },
    { image: i7, key: 7 },
    { image: i8, key: 8 },
    { image: i9, key: 9 },
    { image: i10, key: 10 },
    { image: i11, key: 11 },
  ]

  const benifits = [
    {
      icons: b1,
      title: "Build a portfolio of projects that make you stand out",
      desc: "The projects we'll help you build are professional, real-world apps that will make your portfolio stand out and impress potential employers.",
      key: 1
    },
    {
      icons: b2,
      title: "Get hired, in record time",
      desc: "Stop wasting time on endless tutorials. Our step-by-step Career Paths give you an exact roadmap to go from any background to getting hired. No CS degree required.",
      key: 2
    },
    {
      icons: b3,
      title: "Get promoted, become top 10%",
      desc: "Our intermediate and advanced courses help you continue to build your skills so that you can land senior roles and be recognized as a top tech professional.",
      key: 3
    },
    {
      icons: b4,
      title: "Gain the freedom to work anytime, anywhere",
      desc: "We can give you a curated roadmap to build your dream career and become your own boss, no matter your experience level.",
      key: 4
    },
  ]



  const navigate = useNavigate()
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Get promoted.", "Be your own boss.", "Build your career.", "Get Hired."],
      typeSpeed: 50,
      backSpeed: 20,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: "_"
    });
    return () => {
      typed.destroy();
    }
  }, []);
  return (
    <>
      <div className="h-[80vh] w-screen flex flex-col items-center justify-center space-y-14 overflow-x-hidden bg-baby_gray">
        <div className="flex flex-col items-center justify-center space-y-5">
          <h1 className="text-7xl tracking-wide text-black font-black">Learn to code.</h1>
          <div className="w-full h-[70px]">
            <span className=" text-7xl  text-baby_pink font-bold" ref={el} ></span>
          </div>
        </div>
        <h1 className="text-center text-3xl text-gray-700 mx-64 ">The most efficient and supportive way for you to learn in-demand skills, get hired, and advance your career.</h1>
        <div className="flex space-x-10">
          <button className="border-2 bg-baby_pink px-16 py-3 rounded-3xl hover:border-2  text-white hover:border-baby_pink hover:text-baby_pink hover:bg-white cursor-pointer duration-200 hover:scale-105 active:scale-75 font-semibold text-2xl" onClick={() => navigate("/academy")}>Join Accademy</button>
          <button className="hover:underline text-baby_pink text-xl" onClick={() => (navigate("/courses"))}>See All Courses</button>
        </div>
      </div>
      <div className="w-screen min-h-screen  bg-[#fdfdfe]">
        <picture className="flex items-center justify-center relative mt-5 ">
          <img src={h1} alt="" className="w-[1100px] h-[600px]" />
          <Parallax speed={10} className="absolute left-16 bottom-16">
            <img src={h2} alt="" className="w-[430px] " />
          </Parallax>

          <Parallax speed={15} className="absolute right-28 bottom-22">
            <img src={h3} alt="" className="w-[430px] " />
          </Parallax>
        </picture>
        <div className=" w-screen flex justify-center items-center space-x-8 py-7 bg-[#f7f7fc]">
          {
            hearo_icons_lst.map((res) => (
              <div key={res.key} className="bg-white p-1 rounded-3xl shadow-2xl border-2 border-[#fdfdfe] ">
                <img src={res.image} alt="" className="h-16" />
              </div>

            ))
          }
        </div>
        <MarqueueComp />
      </div>
      <div className="w-screen min-h-screen bg-[#4c0ffb] flex flex-col">
        <div className="flex flex-col space-y-7 mt-16">
          <h1 className="text-white text-5xl text-center font-black tracking-wide">
            Benefits of joining Zero to Mastery
          </h1>
          <h1 className="text-white text-xl text-center mx-80">
            We help you at every step of your learning and career journey. From beginner to getting hired to advancing your skills and having a successful, rewarding career.
          </h1>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-5  mx-20 mt-16 pb-32">
          {
            benifits.map((res) => (
              <div className="flex space-x-10 p-4" key={res.key}>
                <picture>
                  <img src={res.icons} alt="" />
                </picture>
                <div className="flex flex-col space-y-10 w-4/5">
                  <h1 className="text-2xl font-bold text-white tracking-wide">{res.title}</h1>
                  <h1 className="text-2xl  text-white">{res.desc}</h1>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className="w-screen h-[84vh]   flex flex-col items-center bg-[#f7f7fc]">


        <Parallax speed={10} className="h-[500px] w-4/5 rounded-3xl bg-white relative -top-20 p-10 flex shadow-2xl">
          <div className="flex flex-col w-3/5">
            <h1 className="text-gray-900 text-5xl tracking-wide font-bold">
              We can help you build your dream career, <span className="text-[#4c0ffb] text-5xl tracking-wide font-bold">even if ...</span>
            </h1>
            <div className="flex flex-col space-y-4 mt-11 text-gray-600 p-5">
              <h1 className=''><FiberManualRecordOutlinedIcon className="mr-2 text-[#4c0ffb]" /><span className="text-xl tracking-wide">You're <span className="text-gray-800 font-bold">completely new</span> to technology and have never written a line of code before!</span></h1>

              <h1><FiberManualRecordOutlinedIcon className="mr-2 text-[#4c0ffb]" /><span className="text-xl tracking-wide">You're You've <span className="text-gray-800 font-bold">struggled</span> with coding in the past.</span></h1>

              <h1><FiberManualRecordOutlinedIcon className="mr-2 text-[#4c0ffb]" /><span className="text-xl tracking-wide">
                You've wondered "am I <span className="text-gray-800 font-bold">too old</span> to start something new?"
              </span>
              </h1>

              <h1><FiberManualRecordOutlinedIcon className="mr-2 text-[#4c0ffb]" /><span className="text-xl tracking-wide">You're completely <span className="text-gray-800 font-bold">overwhelmed</span> and have no idea where to start.</span></h1>
            </div>
          </div>
          <div className="w-2/5 bg-[#4c0ffb] h-full 
                    rounded-3xl flex flex-col justify-center items-center ">
            <span className="text-[#9BF9FF] text-5xl font-bold">Sound like you?</span>
            <h1 className="text-white tracking-wider text-xl mx-16">If so, take our Tech Career Path Quiz now to get a <span className="font-bold">personalized</span>, <span className="font-bold">step-by-step roadmap</span> to achieving your dream career</h1>
            <button className="border-2 border-[#9BF9FF] text-white  font-semibold px-4 py-3 rounded-3xl mt-5 hover:bg-[#9BF9FF]  hover:text-[#4c0ffb]" onClick={() => navigate("/tech-career-path-quiz")}>CREATE MY CAREER PATH</button>
          </div>
        </Parallax>



        <h1 className="text-5xl font-bold tracking-wide">Everything you need to reach your career goals</h1>
      </div>
      <div className="w-screen min-h-screen flex space-x-7 px-24 ">
        <div className="w-1/2 h-full flex flex-col space-y-5 mt-20">
          <h1 className="text-gray-900 text-xl font-semibold">OUR ACADEMY</h1>
          <h1 className="text-3xl text-gray-900 font-bold">Learn to code, on your schedule</h1>
          <p className="tracking-wider text-xl text-gray-700 ">Our comprehensive courses have 800+ hours (and counting) of lessons available 24/7, you'll learn everything from beginner programming fundamentals to the most advanced concepts.</p>
          <div className="flex flex-col space-y-4 mt-4 ">
            <Link to="" className="text-baby_blue text-xl font-semibold hover:underline flex items-center">
              <span>VIEW OUR COURSES</span>
              <KeyboardArrowRightIcon />
            </Link>
            <Link to="" className="text-baby_blue text-xl font-semibold hover:underline flex items-center">
              <span >VIEW OUR CAREER PATHS</span>
              <KeyboardArrowRightIcon />
            </Link>
            <span className="block bg-baby_blue w-10 h-1"></span>
          </div>
          <div className="">
            <picture className="flex relative">
              <img src={a2} alt="" className="rounded-full" />
              <div className="rounded-full  bg-gray-200 w-[60px] h-[60px] flex items-center justify-center absolute left-14 -bottom-6">
                <img src={a3} alt="" className="w-16 
                            "/>
              </div>
            </picture>
            <div className="mt-10">
              <span className="text-black text-2xl font-bold">Olga Fomin</span>
              <h1 className="text-xl text-gray-700">Software Engineer</h1>
            </div>
            <h1 className="text-black text-xl font-bold pr-36 mt-5">"I would recommend ZTM courses to anyone who wants to learn web dev inside and out."</h1>
          </div>
        </div>
        <picture className="w-1/2 h-full flex flex-col items-center">
          <img src={a1} alt="" />
          <Parallax speed={7}>
            <div className="flex space-x-20 mt-10">
              <div className="flex flex-col items-center space-y-5">
                <span className="text-baby_blue text-7xl">43</span>
                <span className="bg-black block w-7 h-1"></span>
                <span className="font-bold text-black text-xl">COURSES</span>
              </div>
              <div className="flex flex-col items-center space-y-5">
                <span className="text-baby_blue text-7xl">21</span>
                <span className="bg-black block w-7 h-1"></span>
                <span className="font-bold text-black text-xl">CAREER PATHS</span>
              </div>
              <div className="flex flex-col items-center space-y-5">
                <span className="text-baby_blue text-7xl">6</span>
                <span className="bg-black block w-7 h-1"></span>
                <span className="font-bold text-black text-xl">WORKSHOPS</span>
              </div>
            </div>
          </Parallax>
        </picture>
      </div>
      <div className="min-h-screen w-screen flex mt-10 pl-20 pr-10">
        <picture className="w-1/2 h-full flex items-center justify-center relative">
          <img src={g1} alt="" className="w-[400px]" />
          <Parallax className="rounded-full absolute left-24 " speed={5}>
            <img src={g2} alt="" className="rounded-full" />
          </Parallax>

          <Parallax className=" absolute right-20 top-20" speed={5}>
            <img src={g5} alt="" className="rounded-full" />
          </Parallax>
          <Parallax className=" bg-gray-700 w-72 rounded-xl text-center p-2 text-white absolute left-6 bottom-44" speed={5}>
            <span className="">
              Reach out to the recruiter for any details then checkout my workshop on FAANG interview prep! Happy to discuss further!
            </span>
          </Parallax>
          <Parallax className="absolute top-44 right-1 w-72 bg-gray-700  rounded-xl text-center p-2 text-white " speed={5}>
            <span className="">
              Hi! I have an online technical interview this week... what should I expect and be prepared for? 😰
            </span>
          </Parallax>
          <div className="flex flex-col space-y-5 text-white absolute top-72 right-24 text-md">

            <Parallax className="bg-gray-700 w-36 rounded-xl text-center p-2" speed={5}>
              <span >
                # dev-resources
              </span>
            </Parallax>
            <Parallax className="bg-gray-700 rounded-xl text-center w-28 p-2" speed={5}>
              <span >
                # portfolios
              </span>
            </Parallax>

            <Parallax className="bg-gray-700 rounded-xl text-center w-28 p-2" speed={5}>
              <span >
                # job-hunting
              </span>
            </Parallax>
            <Parallax className="bg-gray-700 rounded-xl text-center w-20 p-2" speed={5}>
              <span >
                + more
              </span>
            </Parallax>
          </div>
        </picture>
        <div className="w-1/2 h-full flex flex-col space-y-5 px-20">
          <h1 className="text-gray-900 text-xl font-semibold">OUR COMMUNITY</h1>
          <h1 className="text-3xl text-gray-900 font-bold">Learn together, grow together</h1>
          <p className="tracking-wider text-xl text-gray-700 ">Our instructors, TAs, Mentors, Alumni and fellow students go above and beyond to help guide you and ensure you're on the right path to achieve your goals. Our private ZTM Discord server is a key factor in taking your skills, confidence and career to the next level.</p>
          <div className="flex flex-col space-y-4 mt-4 ">
            <Link to="/community" className="text-baby_blue text-xl font-semibold hover:underline flex items-center">
              <span>CHECK OUT OUR COMMUNITY</span>
              <KeyboardArrowRightIcon />
            </Link>
            <Link to="" className="text-baby_blue text-xl font-semibold hover:underline flex items-center">
              <span >TOUR OUR DISCORD COMMUNITY</span>
              <KeyboardArrowRightIcon />
            </Link>
            <span className="block bg-baby_blue w-10 h-1"></span>
          </div>
          <div className="">
            <picture className="flex relative">
              <img src={g3} alt="" className="rounded-full" />
              <div className="rounded-full  bg-gray-200 w-[60px] h-[60px] flex items-center justify-center absolute left-14 -bottom-6">
                <img src={g4} alt="" className="w-16 
                            "/>
              </div>
            </picture>
            <div className="mt-10">
              <span className="text-black text-2xl font-bold">Adam Szwaba</span>
              <h1 className="text-xl text-gray-700">Frontend Programmer</h1>
            </div>
            <h1 className="text-black text-xl font-bold pr-36 mt-5">"I learnt so much here and plan on staying here to further the fantastic ZTM discord community we have."</h1>
          </div>
        </div>
      </div>
      <div className="w-screen min-h-screen flex mt-28">
        <div className="w-1/2 h-full flex flex-col space-y-5  pl-24 pr-28">
          <h1 className="text-gray-900 text-xl font-semibold">OUR WORLD CLASS INSTRUCTORS</h1>
          <h1 className="text-3xl text-gray-900 font-bold">Learn from, and with the best</h1>
          <p className="tracking-wider text-xl text-gray-700 ">We're Zero To Mastery. Our learning platform is built based on the experience of our world-class instructors and our supportive Discord community of 300,000+ students, alumni and mentors from top companies.</p>
          <div className="flex flex-col space-y-4 mt-4 ">
            <Link to="/about" className="text-baby_blue text-xl font-semibold hover:underline flex items-center">
              <span>MEET OUR INSTRUCTOR</span>
              <KeyboardArrowRightIcon />
            </Link>
            <span className="block bg-baby_blue w-10 h-1"></span>
          </div>
          <div className="">
            <picture className="flex relative">
              <img src={w1} alt="" className="rounded-full" />
              <div className="rounded-full  bg-gray-100 w-[60px] h-[60px] flex items-center justify-center absolute left-14 -bottom-6">
                <img src={w2} alt="" className="w-16 
                                "/>
              </div>
            </picture>
            <div className="mt-10">
              <span className="text-black text-2xl font-bold">Damon Clemons</span>
              <h1 className="text-xl text-gray-700">Software Engineer</h1>
            </div>
            <h1 className="text-black text-xl font-bold pr-36 mt-5">"I want to thank Andrei, Yihua and the entire ZTM community for building such an amazing platform."</h1>
          </div>
        </div>
        <div className="w-1/2 h-screen pr-32 relative mb-20">
          <img src={w3} alt="" />

          <Parallax className="flex flex-col font-xl absolute px-4 py-2 rounded-3xl top-28 bg-white -left-10 shadow-2xl" speed={5}>
            <span className="text-baby_blue font-semibold">Andrei Neagoie</span>
            <span className="text-gray-900">Lead Instructor</span>
          </Parallax>
          <Parallax className="flex flex-col font-xl absolute px-4 py-2 rounded-3xl top-10 bg-white right-14 shadow-2xl" speed={5}>
            <span className="text-baby_blue font-semibold">Yihua Zhang</span>
            <span className="text-gray-900">React Instructor</span>
          </Parallax>

          <Parallax speed={4} className="flex flex-col font-xl absolute px-4 py-2 rounded-3xl bottom-16 bg-white left-3 shadow-2xl">
            <span className="text-baby_blue font-semibold">Daniel Schifano</span>
            <span className="text-gray-900">Design Instructor</span>
          </Parallax>
          <Parallax speed={4} className="flex flex-col font-xl absolute px-4 py-2 rounded-3xl bottom-36 bg-white right-32 shadow-2xl">
            <span className="text-baby_blue font-semibold">Daniel Bourke</span>
            <span className="text-gray-900">Machine Learning Instructor</span>
          </Parallax>
        </div>
      </div>
      <ReviewsMarqueue />
      <div className="w-screen h-[130vh] bg-baby_blue flex pb-10 relative">
        <picture className="w-1/2 h-full flex flex-col space-y-6 items-center pt-20 ">
          <img src={andrie} alt="" className="w-[300px] rounded-full" />
          <button className="w-[250px] border-2 border-[#9BF9FF] text-white  font-semibold px-4 py-3 rounded-3xl mt-5 hover:bg-[#9BF9FF]  hover:text-[#4c0ffb]">SEE MY BIO & COURSES !</button>
        </picture>
        <div className="w-1/2 h-full flex flex-col  space-y-10 pr-16 pt-20">
          <h1 className="text-5xl text-white font-bold">
            👋 From the founder
          </h1>
          <p className="text-white text-xl tracking-wider">
            Hi there, I'm Andrei Neagoie. I have taken all that I have learned working as a Senior Software Developer over the years and now dedicate 100% of my time teaching others valuable software development skills and help them break into the tech industry, continue to level up their skills and advance their careers. Since 2018, over 750,000 students around the world have taken our courses and many of them are now working at top tier companies like
            <span className="font-bold underline underline-offset-2 mx-2 ">
              Apple, Google, Amazon, Tesla, IBM, UNIQLO, Facebook, Shopify
            </span>
            , just to name a few.
          </p>
          <p className="text-white text-xl tracking-wider">
            Being a self-taught programmer, I understand that there is an overwhelming number of online courses, tutorials and books. There are some great ones. But most of them are outdated, overly complicated and don't teach proper skills. Most people feel paralyzed and don't know where to start when learning complex topics and many don't have $8,000+ to spend on a coding bootcamp.
            <span className="font-bold  mx-2">
              Programming & tech skills
            </span>
            should be affordable and open to all. And educational materials should teach real-life skills that are current and not waste your valuable time.
          </p>
          <p className="text-white text-xl tracking-wider">
            By joining the
            <span className="font-bold underline underline-offset-2 ml-1">
              Zero To Mastery Academy
            </span> and putting in the work, you’ll have the opportunity to take control of your life, work in an exciting industry with infinite possibilities and <span className="font-bold ">
              live the life you want.
            </span>
          </p>
          <div className="flex flex-col space-y-2 left-0">
            <h1 className="text-white text-xl tracking-wider">
              See you inside,
            </h1>
            <h1 className="text-white text-xl tracking-wider">
              Andrei
            </h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero