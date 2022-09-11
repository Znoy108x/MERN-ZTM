import React , {useState} from 'react'
import ztm from "../assets/images/logo.png"
import { Link, useNavigate } from "react-router-dom"
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
const Navbar = () => {
  const [mouse , setMouseHover] = useState(false)
  const navigate = useNavigate()
  return (
    <div className="w-screen flex justify-between items-center px-16  sticky top-0 z-50 backdrop-blur-md bg-white/30 h-[80px]" onMouseLeave={()=>(setMouseHover(false))}>
      <img src={ztm} alt="" className="h-12 cursor-pointer" onClick={() => (navigate("/"))} />
      <div className="h-full flex items-center space-x-6 text-gray-900 font-2xl font-semibold ml-48">
        <span className="block h-full w-2 "
        onMouseEnter={()=>(setMouseHover(false))} >
        </span>
        <div className="cursor-pointer h-full hover:text-baby_pink group  flex items-center" 
        onMouseEnter={()=>(setMouseHover(true))}>
          Academy
          <KeyboardArrowUpOutlinedIcon className="group-hover:rotate-180 duration-200 " />
        </div>
        {
          mouse&&<div className="opacity-100 absolute top-[70px] left-[380px] flex flex-col  bg-baby_gray w-[240px] h-[200px] text-black text-md tracking-wide font-light z-10 shadow-lg" onMouseLeave={()=>(setMouseHover(false))} onMouseEnter={()=>(setMouseHover(true))}>
          <div className="h-1/3 flex space-x-10 border-b-2 border-gray-200 group ">
              <span className="h-full block w-2 group-hover:bg-baby_pink">
              </span>
            <Link to="/courses" className="px-3 flex items-center">Courses</Link>
          </div>
          <div className="h-1/3 flex space-x-10 border-b-2 border-gray-200 group">
            <span className="h-full block w-2 group-hover:bg-baby_pink">
            </span>
            <Link to="/career-paths" className="px-3 flex items-center">Career Paths</Link>
          </div>
          <div className="h-1/3 flex space-x-10 group">
            <span className="h-full block w-2 group-hover:bg-baby_pink">
            </span>
            <Link to="/events" className="px-3 flex items-center">Events</Link>
          </div>
        </div>
        }
        <Link to="/testimonials" className="cursor-pointer hover:text-baby_pink" onMouseEnter={()=>(setMouseHover(false))}>Testimonials</Link>
        <Link to="/blog" className="cursor-pointer hover:text-baby_pink" onMouseLeave={()=>(setMouseHover(false))}>Blog</Link>
        <Link to="/community" className="cursor-pointer hover:text-baby_pink" onMouseLeave={()=>(setMouseHover(false))}>Community</Link>
      </div>
      <div className="flex space-x-5">
        <button className="border-2 border-baby_pink px-12 py-1 rounded-3xl hover:bg-baby_pink hover:text-white cursor-pointer duration-200 hover:scale-110 active:scale-75 font-semibold text-md text-baby_pink " onClick={() => navigate("/login")}>Sign In</button>
        <button className=" bg-baby_pink px-12 py-2 rounded-3xl   text-white hover:border-baby_pink hover:text-pink-500 hover:bg-white cursor-pointer duration-200 hover:scale-105 active:scale-75 font-semibold text-md" onClick={()=>navigate("/academy")}>Join Accademy</button>
      </div>
    </div>
  )
}

export default Navbar