import React,{useState ,  useEffect} from 'react'
import Navbar from "../components/Navbar"
import {Footer} from "../components/Footer"
import {course_json} from "../apis/Course"
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import {useNavigate} from "react-router-dom"
export const Courses = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const navigate = useNavigate()
    const [btn , setBtn] = useState("")
    const check_function = (s) =>{
        if(s === "Beginner"){
            setBtn("<span className='rounded-2xl px-4 py-1 bg-baby_green text-white text-xl'>BEGINNER</span>")
        }else if(s === "Advanced"){
            setBtn("<span className='rounded-2xl px-4 py-1 bg-baby_red text-white text-xl'>ADVANCED</span>")
        }else if(s === "Intermediate"){
            setBtn("<span className='rounded-2xl px-4 py-1 bg-baby_blue text-white text-xl'>INTERMEDIATE</span>")
        }else{
            setBtn("<span className='rounded-2xl px-4 py-1 bg-baby_blue text-white text-xl'>NEW!</span>")
        }
        return 1;
    }
  return (
    <div className="w-screen min-h-screen ">
        <Navbar/>
        <div className="min-h-screen w-screen flex flex-col pl-20 pr-12 pt-20 bg-white">
            <div className="flex bg-white">
                <div className="flex flex-col space-y-4 w-3/5 pr-20 bg-white">
                    <span className="text-5xl font-bold ">
                        Zero To Mastery Academy Courses
                    </span>
                    <p className="text-2xl text-gray-700 tracking-wider">
                        There is a ZTM course for every step in your career. From coding bootcamps taking absolute beginners from zero to getting hired, to advanced courses that experienced professionals use to upskill and advance their career.
                    </p>
                </div>
                <div className="flex flex-col w-1/3 shadow-2xl border-2 border-gray-100 bg-white p-10 space-y-6">
                    <p className="text-2xl font-bold ">
                        Not sure what course to take? Not sure where to start? We'll help you find the right path 👇
                    </p>
                    <button className="baby-btn">HELP ME FIND THE RIGHT PATH</button>
                </div>
            </div>
            <div className="flex justify-between pr-56 pl-36 mt-20  bg-white">
                <div className="flex flex-col space-y-8 items-center bg-baby_gray">
                    <span className="text-6xl text-baby_pink">8,300+</span>
                    <span className="w-9 h-1 bg-gray-900 block"></span>
                    <span className="text-2xl text-gray-700">Lessons</span>
                </div>
                <div className="flex flex-col space-y-8 items-center bg-baby_gray">
                    <span className="text-6xl text-baby_pink">876</span>
                    <span className="w-9 h-1 bg-gray-900 block"></span>
                    <span className="text-2xl text-gray-700">Hours</span>
                </div>
                <div className="flex flex-col space-y-8 items-center bg-baby_gray">
                    <span className="text-6xl text-baby_pink">43+</span>
                    <span className="w-9 h-1 bg-gray-900 block"> </span>
                    <span className="text-2xl text-gray-700">Courses</span>
                </div>
            </div>
        </div>
        <div className="h-[40vh] w-screen px-20  overflow-hidden flex items-center">
            <div className="w-screen relative border-2 border-gray-200  rounded-2xl flex space-x-8 h-[140px] justify-center items-center shadow-sm bg-white">
                <div className="absolute -top-7 text-4xl font-bold left-[500px] bg-white px-10">
                    <h1 className="">Explore courses</h1>
                </div>
                <button className="baby-course">
                    ALL CATEGORIES
                </button>
                <button className="baby-course">
                    CODING
                </button>
                <button className="baby-course">
                    WEB3/BLOGCHAIN
                </button>
                <button className="baby-course">
                    ALL CATEGORIES
                </button>
                <button className="baby-course">
                    BUSINESS
                </button>
                <button className="baby-course">
                    DESIGN
                </button>
                <button className="baby-course">
                    LIFE SKILLS
                </button>
            </div>
        </div>
        <div className="w-screen min-h-screen ">
            <div className="grid grid-cols-3 gap-10 px-20">
            {
                course_json.map((course_ele)=>(
                    <div className="flex flex-col h-[670px] bg-baby_gray space-y-6 relative cursor-pointer group" onClick={()=>(navigate("/courses/mine" , {state : course_ele}))} key={course_ele.Title}>
                        <div className="absolute top-10 right-3 z-30">
                            {(() => {
                                let s = course_ele.Type;
                                if(s === "Beginner"){
                                    return <span className='rounded-2xl px-4 py-1 bg-baby_green text-white text-md'>BEGINNER</span>
                                }else if(s === "Advanced"){
                                    return <span className='rounded-2xl px-4 py-1 bg-baby_red text-white text-md'>ADVANCED</span>
                                }else if(s === "Intermediate"){
                                    return <span className='rounded-2xl px-4 py-1 bg-baby_blue text-white text-md'>INTERMEDIATE</span>
                                }else{
                                    return <span className='rounded-2xl px-4 py-1 bg-baby_blue text-white text-md'>NEW!</span>
                                }
                            })()}
                        </div>
                        <div className="overflow-hidden w-full">
                            <img src={course_ele.course_img} alt="" className='group-hover:scale-110 duration-300'/>
                        </div>
                        <span className="text-2xl font-semibold px-4">{course_ele.Title}</span>
                        <div className="flex space-x-2 items-center pl-2">
                            <span className="text-gray-600 flex items-center"><AccessTimeIcon className="text-baby_blue pr-3" fontSize='large'/> {course_ele.Duration}</span>
                            <span className="text-baby_blue">•</span>
                            <span>{course_ele.Lessons}</span>
                        </div>
                        <p className="text-black font-3xl mx-4 tracking-wide font-light">{course_ele.Description_one}</p>
                        <div className="absolute bottom-6  flex flex-col space-y-4 mt-3 px-3">
                            <div className="flex space-x-5 items-center px-4 ">
                                <img src="https://i.pinimg.com/736x/72/af/f0/72aff0eb4945d63727d9b1a2b7a421cf.jpg" alt="" className="w-8 rounded-full object-cover"/>
                                <span className='font-light'>{course_ele.Instructors[0].Name}</span>
                            </div>
                            <div className="flex space-x-9 w-full justify-center">
                                <button className="w-[190px] bg-baby_pink text-white px-4 py-1 rounded-xl text-md cursor-pointer hover:bg-baby_blue hover:scale-110 duration-200 active:scale-90">WATCH PREVIEW</button>
                                <button className="w-[190px] bg-baby_blue text-white px-4 py-1 rounded-3xl text-md cursor-pointer hover:bg-baby_pink hover:scale-110 duration-200 active:scale-90 ">COURSE DETAILS</button>
                            </div>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
        <div className="w-screen h-[40vh] flex items-center justify-center bg-baby_gray border-2 border-baby_gray">
            <div className="w-4/5 flex space-y-9 shadow-md p-10 items-center">
                <div className="flex flex-col space-y-2 w-3/5">
                    <span className="text-xl font-semibold ">Subscribe to get notified of new courses and special offers</span>
                    <span className="tracking-wider">No spam ever, unsubscribe anytime.</span>
                </div>
                <div className="flex space-x-5 w-2/5 items-center">
                    <input type = "email" className="border-2 border-gray-400 rounded-full h-10 px-10 py-1 text-baby_pink font-semibold" placeholder='Email'/>
                    <button className="border-2 border-baby_pink px-12 py-1 rounded-3xl hover:bg-baby_pink hover:text-white cursor-pointer duration-200 hover:scale-110 active:scale-75 font-semibold text-md text-baby_pink">SUBSCRIBE</button>
                </div>
            </div>
        </div>
        <div className="w-screen flex space-x-10 items-center justify-center p-16 bg-baby_blue text-white group">
            <h1 className="text-4xl tracking-wider">Not Sure <span className="text-baby_cyan font-bold">where to start</span> or <span className="text-baby_cyan font-bold">what to do next?</span></h1>
            <button className="px-6 py-4 text-white text-2xl border-2 border-white rounded-full cursor-pointer hover:border-baby_cyan hover:bg-baby_cyan group-hover:text-baby_blue group-hover:border-baby_cyan group-hover:bg-baby_cyan">FIND YOUR CAREER PATH</button>
        </div>
        <Footer/>
    </div>
  )
}