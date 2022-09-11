import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import { Footer } from '../components/Footer'
const Blog = () => {
    const cat = [
        "All posts" ,
        "Must Read" ,
        "Beginner? Start Here" , 
        "Advance Your Career",
        "Success Stories" ,
        "AMA's"
    ]
    const blog_data = [
        {
            image : "https://images.ctfassets.net/aq13lwl6616q/2UOs7ibVOKvmKpZ5oPvzxY/cd20f437dd819089a1888e95e3e8897c/The_top_5_reasons_to_learn_cyber_security.png?w=300&h=225&q=100&fm=webp" ,
            date : "August 26th, 2022" ,
            title : "Top 5 Reasons To Learn Cyber Security" ,
            desc : "From getting paid to find exploits to defending against hackers, it's never a boring job in Cyber Security! Here are the top 5 reasons to learn cybersecurity." ,
            author : {
                image :"https://images.ctfassets.net/aq13lwl6616q/4FspsBfwVhhEEUfVsGqP7r/999047fdbe2a8a5a3770e3824a16ccda/Aleksa_circle.png?w=35&fm=webp",
                name : "Aleksa Tom"
            }
        }
    ]
  return (
    <div className="w-screen min-h-screen">
            <Navbar />
            <div className=" w-screen flex flex-col pl-20 pr-12 pt-20 bg-white mb-20">
                <div className="flex bg-white">
                    <div className="flex flex-col space-y-4 w-1/2 pr-20 bg-white">
                        <span className="text-5xl font-bold ">
                        Zero To Mastery Blog
                        </span>
                        <p className="text-2xl text-gray-700 tracking-wider">
                        Free posts, guides, tutorials, and newsletters to help you learn in-demand skills, get hired, and advance your career.
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
            </div>
            <div className="w-screen min-h-screen px-20 flex flex-col">
                <span className="font-semibold text-3xl">Most Recent</span>
                <div className="w-4/5 flex  space-x-10 mt-4 ">
                    {
                        cat.map((ele)=>(
                            <div key={ele} className=' flex flex-col space-y-3 cursor-pointer group'>
                                <span className='group-active:bg-baby_pink group-hover:bg-baby_pink block  h-1'></span>
                                <span className="font-semibold tracking-wider text-md">{ele}</span>
                            </div>
                        ))
                    }
                </div>
                <div className="w-full grid grid-cols-3 my-10 gap-y-5 ">
                    {
                        blog_data.map((ele)=>(
                            <div className="flex flex-col space-y-5 w-[400px] bg-baby_gray shadow-2xl p-4 rounded-lg">
                                <img src={ele.image} alt="" className="w-[400px]"/>
                                <div className="mx-2 flex flex-col ">
                                    <span className=" text-md">{ele.date}</span>
                                    <span className="font-semibold text-xl mt-2">{ele.title}</span>
                                    <span className="mt-2 font-light">{ele.desc}</span>
                                    <div className="flex space-x-4 items-center mt-4">
                                        <img src={ele.author.image} alt="" />
                                        <span className="text-sm">{ele.author.name}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                     {
                        blog_data.map((ele)=>(
                            <div className="flex flex-col space-y-5 w-[400px] bg-baby_gray shadow-2xl p-4 rounded-lg">
                                <img src={ele.image} alt="" className="w-[400px]"/>
                                <div className="mx-2 flex flex-col ">
                                    <span className=" text-md">{ele.date}</span>
                                    <span className="font-semibold text-xl mt-2">{ele.title}</span>
                                    <span className="mt-2 font-light">{ele.desc}</span>
                                    <div className="flex space-x-4 items-center mt-4">
                                        <img src={ele.author.image} alt="" />
                                        <span className="text-sm">{ele.author.name}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                     {
                        blog_data.map((ele)=>(
                            <div className="flex flex-col space-y-5 w-[400px] bg-baby_gray shadow-2xl p-4 rounded-lg">
                                <img src={ele.image} alt="" className="w-[400px]"/>
                                <div className="mx-2 flex flex-col ">
                                    <span className=" text-md">{ele.date}</span>
                                    <span className="font-semibold text-xl mt-2">{ele.title}</span>
                                    <span className="mt-2 font-light">{ele.desc}</span>
                                    <div className="flex space-x-4 items-center mt-4">
                                        <img src={ele.author.image} alt="" />
                                        <span className="text-sm">{ele.author.name}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                     {
                        blog_data.map((ele)=>(
                            <div className="flex flex-col space-y-5 w-[400px] bg-baby_gray shadow-2xl p-4 rounded-lg">
                                <img src={ele.image} alt="" className="w-[400px]"/>
                                <div className="mx-2 flex flex-col ">
                                    <span className=" text-md">{ele.date}</span>
                                    <span className="font-semibold text-xl mt-2">{ele.title}</span>
                                    <span className="mt-2 font-light">{ele.desc}</span>
                                    <div className="flex space-x-4 items-center mt-4">
                                        <img src={ele.author.image} alt="" />
                                        <span className="text-sm">{ele.author.name}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                     {
                        blog_data.map((ele)=>(
                            <div className="flex flex-col space-y-5 w-[400px] bg-baby_gray shadow-2xl p-4 rounded-lg">
                                <img src={ele.image} alt="" className="w-[400px]"/>
                                <div className="mx-2 flex flex-col ">
                                    <span className=" text-md">{ele.date}</span>
                                    <span className="font-semibold text-xl mt-2">{ele.title}</span>
                                    <span className="mt-2 font-light">{ele.desc}</span>
                                    <div className="flex space-x-4 items-center mt-4">
                                        <img src={ele.author.image} alt="" />
                                        <span className="text-sm">{ele.author.name}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                   
                    <div className="bg-white flex flex-col justify-center shadow-2xl p-5 h-[300px] w-[400px]">
                        <span className="font-light text-4xl ">
                            Subscribe to get our monthly newsletter for developers!
                        </span>
                        <div className="flex space-x-4 mt-3">
                            <input type="email" className="border-2 border-gray-200 px-4 py-2 rounded-3xl outline-none" placeholder='Email'/>
                            <button className="baby-btn px-3 py-1">Subscribe</button>
                        </div>
                        <span className="font-light mt-5 text-sm ml-3">Join 100,000+ devs. Unsub anytime.</span>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
  )
}
export default Blog