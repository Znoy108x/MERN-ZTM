import React from 'react'
import Navbar from "../components/Navbar"
import { Footer } from "../components/Footer"
import { Link } from "react-router-dom"
const Community = () => {
    const community = [
        {
            name: "Open Source Projects",
            link: "https://github.com/Znoy108x",
            btnName: "GET INVOLVED"
        },
        {
            name: "Events",
            link: "/events",
            btnName: "JOIN OUR EVENTS"
        },
    ]
    return (
        <div className="w-screen min-h-screen">
            <Navbar />
            <div className="min-h-screen w-screen flex flex-col pl-20 pr-12 pt-20 bg-white">
                <div className="flex bg-white">
                    <div className="flex flex-col space-y-4 w-1/2 pr-20 bg-white">
                        <span className="text-5xl font-bold ">
                            Our Community
                        </span>
                        <p className="text-2xl text-gray-700 tracking-wider">
                            The Zero To Mastery developer community is where thousands of students, alumni, TAs, Instructors and mentors from top companies come together to support each other so that everyone can take their skills to next level, achieve their goals and grow their career faster.
                        </p>
                    </div>
                    <div className="flex flex-col w-1/2 shadow-2xl border-2 border-gray-100 bg-white p-10 space-y-6">
                        <p className="text-2xl font-bold ">
                            Join thousands of devs & other tech professionals getting exclusive ZTM community content and offers 👇
                        </p>
                        <div className="flex space-x-4 justify-between">
                            <input type="email" placeholder='Email' className="w-4/5 px-4 outline-none py-2 rounded-3xl border-2 border-gray-200" />
                            <button className="baby-btn ">SUBSCRIBE</button>
                        </div>
                        <span className="text-sm font-light">Join 100,000+ tech professionals. Unsubscribe anytime.</span>
                    </div>
                </div>
                <div className="flex space-x-10 w-full mt-20">
                    {
                        community.map((ele) => (
                            <>
                                {
                                    ele.link.includes("https") ? <a href={ele.link} className="flex flex-col space-y-20 w-1/3 shadow-2xl border-2 border-gray-200 p-10 bg-white ">
                                        <span className="text-3xl font-semibold">{ele.name}</span>
                                        <button className="baby-course rounded-sm">{ele.btnName}</button>
                                    </a> : <Link to={ele.link} className="flex flex-col space-y-20 w-1/3 shadow-2xl border-2 border-gray-200 p-10 bg-white ">
                                        <span className="text-3xl font-semibold">{ele.name}</span>
                                        <button className="baby-course rounded-sm">{ele.btnName}</button>
                                    </Link>
                                }
                            </>
                        ))
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Community