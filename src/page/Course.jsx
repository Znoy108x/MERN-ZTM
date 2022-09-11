import React, { useEffect , useRef } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Navbar from '../components/Navbar';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ArticleIcon from '@mui/icons-material/Article';
import MonitorIcon from '@mui/icons-material/Monitor';
import DoneIcon from '@mui/icons-material/Done';
import { Footer } from '../components/Footer';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Cost from "../components/Cost"
import AssignmentIcon from '@mui/icons-material/Assignment';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
const Course = () => {

    const reviews_dummy =  [
        {
            "name": "Alex Corvin",
            "description": "You're not just getting a coding bootcamp course here. You're getting a great educational experience and also becoming a part of a wonderful community which pushes your education and career even further.",
            "image": "https://i.pinimg.com/564x/bb/2a/93/bb2a93fd5356e62db3033ae3dbefa4a7.jpg"
        },
        {
            "name": "Akshay Sathiya",
            "description": "This course was absolutely amazing! Andrei helped me learn the concepts of web development and new libraries by working on actual projects. I am so much more confident in my skills and career now, thanks Andrei!",
            "image": "https://i.pinimg.com/564x/bb/2a/93/bb2a93fd5356e62db3033ae3dbefa4a7.jpg"
        },
        {
            "name": "Olga Fomin",
            "description": "This course is well structured and is updated timely. Andrei is truly passionate about web development and explains everything clearly. I would recommend this course to anyone who wants to know web dev in and out and expand their coding skills.",
            "image": "https://i.pinimg.com/564x/bb/2a/93/bb2a93fd5356e62db3033ae3dbefa4a7.jpg"
        },
        {
            "name": "Alexander Chia",
            "description": "This course is so valuable. I feel that the knowledge I have attained from this course is worth more than my 2 degrees combined. It is complete and always being updated to the latest trends of the industry. This was the best investment I ever made.",
            "image": "https://i.pinimg.com/564x/bb/2a/93/bb2a93fd5356e62db3033ae3dbefa4a7.jpg"
        },
        {
            "name": "Mikhail Chudakov",
            "description": "All the course information is perfectly structured and explained in clear and simple terms. Tons of useful references, great support, and timely corrections and updates. Really easy to follow the instructions for all platforms. Definitely recommend it!",
            "image": "https://i.pinimg.com/564x/bb/2a/93/bb2a93fd5356e62db3033ae3dbefa4a7.jpg"
        },
        {
            "name": "Richard Campbell",
            "description": "I can't rave enough about this course. I went into it with a basic knowledge of HTML, CSS and JavaScript. But Andrei taught me how to be a Full Stack Developer, with a thorough knowledge of coding, problem-solving and logical thinking.",
            "image": "https://i.pinimg.com/564x/bb/2a/93/bb2a93fd5356e62db3033ae3dbefa4a7.jpg"
        }
    ]
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const scrollEle = (whichRef) => {
        const tabs = whichRef.current
        if (tabs) {
          tabs.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
        }
      }
    const  overviewRef = useRef();
    const  projectRef = useRef();
    const  reviewsRef = useRef();
    const  curruculumRef = useRef();
    const  instructorRef = useRef();
    const  faqRef = useRef();
    const  pricingRef = useRef();
    const navigate = useNavigate()
    const data = useLocation().state
    console.log(data)
    const images_links = [
        "https://i.pinimg.com/236x/c6/d0/dc/c6d0dc88459262f3a289ae9bb8d0b7b0.jpg",
        "https://i.pinimg.com/236x/a1/81/ae/a181ae5bade8652053100d50c92dba78.jpg",
        "https://i.pinimg.com/236x/d7/4e/a6/d74ea6b08aa295db51af746905a5667a.jpg",
        "https://i.pinimg.com/236x/fa/03/81/fa03812c1c95340b7f3243693ef98ec9.jpg",
        "https://i.pinimg.com/236x/9a/58/3d/9a583d19733072aa29ffa7f754e0cee4.jpg",
        "https://i.pinimg.com/236x/f7/24/91/f724918e8a28c8ed98641fa554ef1dbb.jpg",
        "https://i.pinimg.com/236x/f2/98/87/f298879f942ac9b8f323a9a8b8012c69.jpg",
        "https://i.pinimg.com/236x/ac/32/e9/ac32e9cfeba099499e598a9da2396107.jpg",
        "https://i.pinimg.com/236x/82/5d/0d/825d0d365c2136630021b53db85dfbb4.jpg",
        "https://i.pinimg.com/236x/3b/99/5d/3b995d18f3c2fb3c3fa85a102f2e44a6.jpg",
        "https://i.pinimg.com/236x/90/70/2d/90702d46d896adf960b7df4ba8e03365.jpg",
        "https://i.pinimg.com/236x/46/b7/f8/46b7f89ad0f5fe6fad6b3faf3a809341.jpg",
        "https://i.pinimg.com/236x/b1/70/7d/b1707d06293e11ad2f15d401679d6396.jpg",
        "https://i.pinimg.com/236x/44/b6/21/44b621a6bb70f993febb5c6f7cb19248.jpg",
        "https://i.pinimg.com/236x/72/ee/99/72ee996878a0fc1144a560b8fac7f0ab.jpg"
    ]
    return (
        <div className="w-screen h-screen">
            <Navbar />
            <div className="w-screen h-[60vh] bg-baby_slate pl-36 flex flex-col relative">
                <div className=" w-4/5 h-full flex flex-col space-y-4 pr-52  pt-16">
                    <div className="text-white font-bold text-2xl flex items-center">
                        <KeyboardArrowLeftIcon />
                        BACK TO COURSE
                    </div>
                    <h1 className=" text-5xl text-white font-bold tracking-wide w-[800px]">
                        {data.Title}
                    </h1>
                    <p className="w-[800px] text-white text-lg ">
                        {data.Description_two}
                    </p>
                    <div className="flex items-center space-x-5">
                        <div className="flex space-x-8 items-center">
                            <img src="https://i.pinimg.com/736x/a4/c5/5f/a4c55fb00849ce80632b3d68e4d270e7.jpg" alt="" className="h-16 w-16 rounded-full object-cover" />
                            <span className="text-white">Taught by :
                                <span className="underline">
                                    {data.Instructors[0].Name}</span> </span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <CalendarMonthIcon className="text-white" />
                            <span className="text-white">Last updated :
                                <span className="underline">{data.Last_Updated}</span></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-20 flex space-x-10 bg-baby_gray pl-28 pt-5" >
                <div className="flex flex-col items-between group w-1/7 space-y-5">
                    <span className="w-full text-md font-bold text-xl hover:text-gray-700 cursor-pointer" onClick={()=>scrollEle(overviewRef)}>
                        Overview
                    </span>
                    <span className="h-1 w-full group-hover:bg-baby_pink block bg-baby_gray">
                    </span>
                </div>
                <div className="flex flex-col items-between group w-1/7 space-y-5">
                    <span className="w-full text-md font-bold text-xl hover:text-gray-700 cursor-pointer" onClick={()=>scrollEle(projectRef)}>
                        Projects
                    </span>
                    <span className="h-1 w-full group-hover:bg-baby_pink block bg-baby_gray">
                    </span>
                </div>
                <div className="flex flex-col items-between group w-1/7 space-y-5">
                    <span className="w-full text-md font-bold text-xl hover:text-gray-700 cursor-pointer" onClick={()=>scrollEle(reviewsRef)}>
                        Reviews
                    </span>
                    <span className="h-1 w-full group-hover:bg-baby_pink block bg-baby_gray">
                    </span>
                </div>
                <div className="flex flex-col items-between group w-1/7 space-y-5">
                    <span className="w-full text-md font-bold text-xl hover:text-gray-700 cursor-pointer" onClick={()=>scrollEle(curruculumRef)}>
                        Curriculum
                    </span>
                    <span className="h-1 w-full group-hover:bg-baby_pink block bg-baby_gray">
                    </span>
                </div>
                <div className="flex flex-col items-between group w-1/7 space-y-5">
                    <span className="w-full text-md font-bold text-xl hover:text-gray-700 cursor-pointer" onClick={()=>scrollEle(instructorRef)}>
                        Instructor
                    </span>
                    <span className="h-1 w-full group-hover:bg-baby_pink block bg-baby_gray">
                    </span>
                </div>
                <div className="flex flex-col items-between group w-1/7 space-y-5">
                    <span className="w-full text-md font-bold text-xl hover:text-gray-700 cursor-pointer" onClick={()=>scrollEle(faqRef)}>
                        FAQs
                    </span>
                    <span className="h-1 w-full group-hover:bg-baby_pink block bg-baby_gray">
                    </span>
                </div>
                <div className="flex flex-col items-between group w-1/7 space-y-5">
                    <span className="w-full text-md font-bold text-xl hover:text-gray-700 cursor-pointer" onClick={()=>scrollEle(pricingRef)}>
                        Pricing
                    </span>
                    <span className="h-1 w-full group-hover:bg-baby_pink block bg-baby_gray">
                    </span>
                </div>
            </div>
            <div className="w-[30vw] h-[120vh] absolute right-16 top-[150px] shadow-md border-1 border-gray-100 overflow-hidden bg-gray-50">
                <img src={data.course_img} alt="" />
                <h1 className="text-center font-bold text-black px-4 text-2xl mt-3">Join 750,000+ students enrolled in ZTM courses!</h1>
                <div className="w-full flex justify-center mt-3">
                    <button className="baby-btn">START LEARNING NOW!</button>
                </div>
                <div className="h-[300px] flex flex-col space-y-3  mx-3 py-4 mt-4 pl-6 border-t-2 border-gray-200">
                    <span><span className="text-baby_blue pr-2 font-bold">-</span> Access to exclusive ZTM community</span>
                    <span><span className="text-baby_blue pr-2 font-bold">-</span> Certificate of Completion</span>
                    <span><span className="text-baby_blue pr-2 font-bold">-</span> Learn and master beginner, intermediate and advanced React topics</span>
                    <span><span className="text-baby_blue pr-2 font-bold">-</span> Unlimited access to all courses, workshops, career paths and resources</span>
                    <div className="flex flex-wrap px-2">
                        <span><AccessAlarmIcon className="text-baby_blue mr-2 font-thin" /> {data.Duration}</span>
                        <span><ArticleIcon className="text-baby_blue mr-2 ml-10 font-thin" />{data.Contents.resources}</span>
                        <span className="mt-2"><MonitorIcon className="text-baby_blue mr-2 " />{data.Contents.projects}</span>
                    </div>
                </div>
                <div className="border-t-2 border-gray-200 mx-7 overflow-hidden">
                    <h1 className=" text-black font-bold text-2xl text-center  mt-3">Prerequisites:</h1>
                    <div className="mt-3">
                        {
                            data.Prerequisites.map((res) => (
                                <span className="flex">
                                    <span className="text-baby_blue mr-2">-</span>
                                    <h1 className="font-light">{res}</h1>
                                </span>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="w-3/5 mt-10" ref= {overviewRef}>
                <h1 className="text-center text-black font-bold text-5xl">Course Overview</h1>
                <p className="text-light tracking-wider text-md px-20 mt-5">{data.Overview}</p>
                <div className="w-full ml-14 px-10 bg-baby_gray rounded-3xl mt-20 border-2 border-baby_gray">
                    <h1 className="text-2xl text-baby_blue font-bold text-center pt-10">WHAT YOU'LL LEARN</h1>
                    <div className="grid grid-cols-2 gap-5 mt-10 py-7">
                        {
                            data.Topics_You_Will_Learn.map((res) => (
                                <div className="flex">
                                    <DoneIcon className="text-baby_blue mr-5" fontSize="large" />
                                    <div className="tracking-wide font-light">
                                        {res}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="w-screen min-h-screen bg-black pt-7 mt-28 pb-20" ref={projectRef}>
                <h1 className="text-white font-bold text-3xl text-center">WHAT YOU'LL LEARN</h1>
                <h1 className="text-white text-center px-72 mt-7 text-xl">
                    The best way you learn is by doing. Not just watching endless tutorials. That's why a key part of this course is the real-world projects that you'll get to build. Plus they'll look great on your portfolio.
                </h1>
                <div className="grid grid-cols-3 gap-10 px-32 mt-20">
                    {
                        data.Project.map((res) => (
                            <a href={`${res.link}`} className="cursor-pointer group">
                                <div className="w-full h-[200px] overflow-hidden">
                                    <img src={res.image} alt="" className="group-hover:scale-105 duration-300" />
                                </div>
                                <h1 className="text-white font-bold tracking-wide text-2xl text-center mt-5">{res.title}</h1>
                                <p className="text-white mt-3">{res.description}</p>
                            </a>
                        ))
                    }
                </div>
            </div>
            <div className="w-screen min-h-screen mt-20" ref={reviewsRef}>
                <h1 className=" font-bold text-5xl text-center">Don't just take our word for it</h1>
                <h1 className="font-light text-center px-72 mt-7 text-xl">Our courses and community have helped 1,000s of Zero To Mastery students go from zero to getting hired to levelling up their skills and advancing their careers to new heights.</h1>
                <div className="w-full grid grid-cols-3 gap-10 px-28 mt-20">
                    {
                        data.reviews.length>0 ? data.reviews.map((res) => (
                            <div className="bg-baby_gray rounded-2xl border-2 border-gray-100 p-5 shadow-lg ">
                                <div className="flex space-x-8 items-center">
                                    <img src={images_links[Math.floor(Math.random() * images_links.length)]} alt="" className="rounded-full h-16 w-16 object-cover" />
                                    <h1 className="text-xl font-bold tracking-wide">{res.name}</h1>
                                </div>
                                <p className="mt-4 font-light  tracking-wide break-all">{res.description}</p>
                            </div>
                        )) : reviews_dummy.map((res) => (
                            <div className="bg-baby_gray rounded-2xl border-2 border-gray-100 p-5 shadow-lg ">
                                <div className="flex space-x-8 items-center">
                                    <img src={images_links[Math.floor(Math.random() * images_links.length)]} alt="" className="rounded-full h-16 w-16 object-cover" />
                                    <h1 className="text-xl font-bold tracking-wide">{res.name}</h1>
                                </div>
                                <p className="mt-4 font-light  tracking-wide break-all">{res.description}</p>
                            </div>
                        ))
                    }
                    
                </div>
            </div>
            <div className="w-screen min-h-screen bg-baby_sky mt-10" ref={curruculumRef}>
                <h1 className="font-bold text-5xl text-center pt-10">
                    Course curriculum
                </h1>
                <h1 className="font-light text-center px-72 mt-7 text-xl">
                    To make sure this course is a good fit for you, you <span className="font-bold text-gray-700 mx-2">can start learning to code for free right now</span> by clicking any of the PREVIEW links below.
                </h1>
                <div className="flex justify-center">
                    <div className=" my-20 w-[64vw] h-[70vh] flex items-center justify-center  overflow-y-scroll bg-baby_gray pb-10">
                        <div className=" mt-28 flex flex-col space-y-10 bg-baby_gray pt-[320px] ">
                            {
                                data.videos.map((ele) => (
                                    <div className="flex flex-col rounded-2xl shadow-lg p-10 border-2 border-gray-100 scroll-smooth bg-white cursor-pointer">
                                        <h1 className="text-2xl text-baby_blue font-bold tracking-tight">{ele.Lectures_Name}</h1>
                                        <span className="font-light text-md mt-2">{ele.Lecture_Duration}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-screen min-h-screen bg-baby_blue  pb-20" ref={instructorRef}>
                <h1 className=" font-bold text-5xl text-center pt-10 text-white">
                    Meet your instructor
                </h1>
                <h1 className="font-light text-center px-80 mt-7 text-xl text-white">
                    Your instructor (Abhay) isn't just an expert with years of real-world professional experience. He has been in your shoes. He makes learning fun. He makes complex topics feel simple. He will motivate you. He will push you. And he will go above and beyond to help you succeed.
                </h1>
                <div className=" h-[500px] flex justify-center mt-16">
                    {
                        data.Instructors.map((res) => (
                            <div className="w-1/3 h-full rounded-3xl bg-white p-4 relative px-12">
                                <img src={res.instructor_img} alt="" className="w-20 h-20 object-cover rounded-full absolute -top-6 left-6" />
                                <h1 className="my-2 font-bold text-3xl text-baby_blue mt-16">
                                    Hi, I'm {res.Name}
                                </h1>
                                <p className="text-xl my-2">
                                    {res.Description}
                                </p>
                                <div className="border-t-2 border-gray-200 mx-2 mt-10">
                                    <h1 className="text-2xl font-bold mt-3">{res.Name}</h1>
                                    <h1 className="text-xl font-light mt-1">{res.Profile}</h1>
                                    <div className="flex space-x-6 mt-4">
                                        <a href={res.Github}><GitHubIcon className="hover:scale-125 active:scale-95 cursor-pointer p-1 duration-300 text-baby_blue  border-2 border-baby_blue rounded-full " fontSize="large" /></a>
                                        <a href={res.Linkedin}><LinkedInIcon className="hover:scale-125 active:scale-95 cursor-pointer p-1 duration-300 text-baby_blue  border-2 border-baby_blue rounded-full " fontSize="large" /></a>
                                        <a href={res.Youtube}><YouTubeIcon className="hover:scale-125 active:scale-95 cursor-pointer p-1 duration-300 text-baby_blue  border-2 border-baby_blue rounded-full " fontSize="large" /></a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="w-screen min-h-screen bg-baby_sky mt-10" ref={faqRef}>
                <h1 className="font-bold text-5xl text-center pt-10">
                    Frequently asked questions
                </h1>
                <div className="flex justify-center">
                    <div className=" my-20 w-[65vw] h-[70vh] flex items-center justify-center  overflow-y-scroll bg-baby_gray pb-10
                     ">
                        <div className="w-[60vw] mt-28 flex flex-col space-y-10 bg-baby_gray pt-[320px] ">
                            {
                                data.Qna.map((ele) => (
                                    <div className="flex flex-col rounded-2xl shadow-lg p-10 border-2 border-gray-100  bg-white cursor-pointer">
                                        <h1 className="text-2xl text-baby_blue font-bold tracking-tight">{ele.question}</h1>
                                        <div className="flex flex-col space-y-3">
                                            {
                                                ele.answers.map((ans) => (
                                                    <span className="flex  text-sm mt-2 items-center">
                                                        <PlayArrowIcon className="text-baby_blue mr-2" fontSize="small"/>{ans}
                                                    </span>
                                                ))
                                            }
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Cost pricingRef={pricingRef}/>
            <Footer />
        </div>
    )
}
export default Course