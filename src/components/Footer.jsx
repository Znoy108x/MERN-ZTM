import React from 'react'
import {Link} from "react-router-dom"
import logo from "../assets/images/logo2.png"
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

export const Footer = () => {
  const links_json = [
    {
      name:"Quick Links",
      link:[
        {
          name :"Home",
          lnk : "/"
        },
        {
          name :"Pricing",
          lnk : "/pricing"
        },
        {
          name :"Testimonials",
          lnk : "/testimonials"
        },
        {
          name :"Blog",
          lnk : "/blog"
        },
        {
          name :"Community",
          lnk : "/community"
        },
      ]
    },
    {
      name:"The Academy",
      link:[
        {
          name :"Courses",
          lnk : "/courses"
        },
        {
          name :"Career Paths",
          lnk : "/career-paths"
        },
        {
          name :"Workshops & More",
          lnk : "/workshops-more"
        },
        {
          name :"Career Path Quiz",
          lnk : "/career-path-quiz"
        },
        {
          name :"Free Resources",
          lnk : "/free-resources"
        },
      ]
    },
    {
      name:"Company",
      link:[
        {
          name :"About Ztm",
          lnk : "/about"
        },
        {
          name :"Ambassadors",
          lnk : "/ambassadors"
        },
        {
          name :"Contack Us",
          lnk : "/contact"
        }
      ]
    }
  ]
  return (
    <div className="w-screen h-[60vh] bg-black flex flex-col text-white justify-between pb-10">
      <div className="flex justify-between px-20 pt-10">
        <div className="w-1/3">
          <img src={logo} alt="" className="h-20"/>
        </div>
        <div className="grid grid-cols-3 w-1/2">
          {
            links_json.map((res)=>(
              <div className="flex flex-col" key={res.name}>
                <span className="font-bold text-2xl tracking-wide">{res.name}</span>
                <div className="flex flex-col tex-md space-y-2 mt-4 justify-center">
                  {
                    res.link.map((ele)=>(
                      <Link to={`${ele.lnk}`} key={ele.name} className="text-xl hover:underline">{ele.name}</Link>
                    ))
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className="flex justify-between px-10">
        <div className="flex space-x-6">
          <GitHubIcon className="hover:scale-125 active:scale-95 cursor-pointer border-2 border-white rounded-full p-2" fontSize="large"/>
          <TwitterIcon className="hover:scale-125 active:scale-95 cursor-pointer border-2 border-white rounded-full p-2" fontSize="large"/>
          <LinkedInIcon className="hover:scale-125 active:scale-95 cursor-pointer border-2 border-white rounded-full p-2" fontSize="large"/>
          <FacebookIcon className="hover:scale-125 active:scale-95 cursor-pointer border-2 border-white rounded-full p-2" fontSize="large"/>
          <InstagramIcon className="hover:scale-125 active:scale-95 cursor-pointer border-2 border-white rounded-full p-2" fontSize="large"/>
          <YouTubeIcon className="hover:scale-125 active:scale-95 cursor-pointer border-2 border-white rounded-full p-2" fontSize="large" />
        </div>
        <div className="flex space-x-12 pr-36">
          <Link to="/privacy" className="text-md hover:underline">Privacy</Link>
          <Link to="/terms" className="text-md hover:underline">Terms</Link>
          <Link to="/cookies" className="text-md hover:underline">Cookies</Link>
          <span className="text-bold font-xl">Copyright © 2022, Zero To Mastery Inc.</span>
        </div>
      </div>
    </div>
  )
}
