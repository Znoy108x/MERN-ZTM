import React from 'react'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { event_data } from "../apis/Events"
import Navbar from "../components/Navbar"
import { Footer } from "../components/Footer"
import { Link, useNavigate } from "react-router-dom"
const Events = () => {
    const navigate = useNavigate()
    return (
        <div className="w-screen min-h-screen">
            <Navbar />
            <div className="w-screen flex flex-col pl-20 pr-12 pt-20 bg-white mb-24">
                <div className="flex bg-white">
                    <div className="flex flex-col space-y-4 w-2/3 pr-20 bg-white">
                        <span className="text-5xl font-bold ">
                        Coding Events & Hackathons
                        </span>
                        <p className="text-2xl text-gray-700 tracking-wider">
                        Work on exciting open-source projects with thousands of other developers by participating in Zero To Mastery developer community coding events and hackathons. No matter your skill level, you can participate in these coding events to accelerate your learning, practice working with others, and improve your coding skills and confidence.
                        </p>
                    </div>
                    <div className="flex flex-col w-1/3 shadow-2xl border-2 border-gray-100 bg-white p-10 space-y-6">
                        <p className="text-2xl font-bold ">
                        Join our next coding event by enrolling in the Zero To Mastery Academy today 👇
                        </p>
                        <button className="baby-btn" onClick={()=>navigate("/academy")}>JOIN ACCADEMY</button>
                    </div>
                </div>
            </div>
            <div className="min-h-screen w-screen px-20 grid grid-cols-3 gap-7 bg-baby_gray mb-32">
                {
                    event_data.map((ele)=>(
                        <div className="h-[500px] w-full flex flex-col space-y-4 p-5 shadow-2xl">
                            <img src={ele.image} alt="" className="w-full h-[250px]"/>
                            <div className="w-full h-full flex flex-col space-y-3 px-4">
                                <h1 className="font-semibold text-xl">{ele.title}</h1>
                                <p>{ele.description}</p>
                            </div>
                            <a className="ml-4 flex mt-3 space-x-2 relative bottom-1 cursor-pointer" href={`${ele.link}`}><OpenInNewIcon className="text-baby_blue"/><span className="font-light">github.com</span></a> 
                        </div>

                    ))
                }
            </div>
            <Footer />
        </div>
    )
}
export default Events