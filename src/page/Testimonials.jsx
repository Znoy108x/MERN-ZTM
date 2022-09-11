import React from 'react'
import Navbar from '../components/Navbar'
import { Footer } from '../components/Footer'
import {testimonial_data} from "../apis/Testimonial"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import BookIcon from '@mui/icons-material/Book';
const Testimonials = () => {
  return (
    <div className="w-screen min-h-screen">
        <Navbar />
        <div className=" w-screen flex flex-col pl-20 pr-12 pt-20 bg-white mb-20">
            <div className="flex bg-white w-full justify-between items-center">
                <div className="flex flex-col space-y-4 w-3/5 pr-20 bg-white">
                    <span className="text-5xl font-bold ">
                    Zero To Mastery Student Testimonials
                    </span>
                    <p className="text-2xl text-gray-700 tracking-wider">
                    Nothing makes us happier than the success of our students. These are just a few of the thousands of success stories from real ZTM students who are now working at world-class companies around the world.
                    </p>
                </div>
                <div className="flex flex-col w-2/5 shadow-2xl border-2 border-gray-100 bg-white p-10 space-y-6 mr-10">
                    <p className="text-2xl font-bold ">
                    Join the Zero To Mastery Academy and you will be next 👇
                    </p>
                    <button className="baby-btn">TAKE YOUR FIRST STEP NOW</button>
                </div>
            </div>

        </div>
        <h1 className="text-5xl font-semibold text-center">ZTM students get hired.</h1>
        <div className="w-full  min-h-screen grid grid-cols-4 px-20 mt-20 mb-20 gap-y-20 gap-x-6 bg-baby_gray">
            {
                testimonial_data.map((ele)=>(
                    <div className="h-[490px] flex flex-col px-4 pt-16  space-y-3 items-center shadow-2xl bg-white relative border-2 border-baby_gray">
                        <img src={ele.person_img} alt="" className="rounded-full w-24 h-24 object-cover absolute -top-10"/>
                        <h1 className=" font-semibold text-xl">{ele.name}</h1>
                        <h1 className="text-md">{ele.role}</h1>
                        <img src={ele.company_logo} alt="" className="w-[170px] h-[40px]"/>
                        <p className="mx-2 mb-4">{ele.description}</p>
                        <div className="w-full flex space-x-4 justify-center absolute bottom-3 ">
                            {
                                ele.git_hub && <a href={ele.git_hub} className="rounded-full p-1 border-2 border-baby_blue flex items-center justify-center"><GitHubIcon className="text-baby_blue" fontSize="small"/></a>
                            }
                            {
                                ele.linked_in && <a href={ele.linked_in} className="rounded-full p-1 border-2 border-baby_blue flex items-center justify-center"><LinkedInIcon className="text-baby_blue" fontSize="small"/></a>
                            }
                            {
                                ele.mediam&& <a className="rounded-full p-1 border-2 border-baby_blue flex items-center justify-center" href={ele.mediam}>
                                    <BookIcon className="text-baby_blue" fontSize="small"/>
                                </a>
                            }
                            {
                                ele.twitter && <a href={ele.twitter} className="rounded-full p-1 border-2 border-baby_blue flex items-center justify-center">
                                    <TwitterIcon className="text-baby_blue" fontSize="small"/>
                                </a>
                            }
                        </div>
                    </div>
                ))   
            }
        </div>
        <h1 className="text-2xl font-light text-center mt-24 mb-28">Has ZTM helped you? We'd love to hear from you. <a href="/" className="text-baby_pink hover:text-baby_blue underline hover:decoration-dotted tracking-wider font-light">Tell us about your experience here.</a></h1>
        <Footer />
    </div>
  )
}
export default Testimonials