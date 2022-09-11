import React , {useEffect} from 'react'
import Cost from "../components/Cost"
import Navbar from "../components/Navbar"
import {Footer} from "../components/Footer"
import MarqueueComp from "../components/MarqueueComp"
import {Link} from "react-router-dom"
import ReviewsMarqueue from '../components/ReviewsMarqueue'
const Academy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const features = [
    {
      icon: <svg width="62" height="75" viewBox="0 0 62 75" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 27C0 25.3431 1.34315 24 3 24H45C46.6569 24 48 25.3431 48 27V58.5C48 60.1569 46.6569 61.5 45 61.5H3C1.34315 61.5 0 60.1569 0 58.5V27ZM45 27L3 27V58.5H45V27Z" fill="white"></path><path d="M61.5 60C61.5 68.2843 54.7843 75 46.5 75C38.2157 75 31.5 68.2843 31.5 60C31.5 51.7157 38.2157 45 46.5 45C54.7843 45 61.5 51.7157 61.5 60Z" fill="#4C0FFB"></path><path opacity="0.4" d="M61.5 60C61.5 68.2843 54.7843 75 46.5 75C38.2157 75 31.5 68.2843 31.5 60C31.5 51.7157 38.2157 45 46.5 45C54.7843 45 61.5 51.7157 61.5 60Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M55.7236 52.5301C56.2981 53.127 56.2799 54.0766 55.6831 54.651L43.4382 66.4368C42.8574 66.9958 41.9386 66.9958 41.3578 66.4368L36.4598 61.7225C35.8629 61.148 35.8448 60.1984 36.4193 59.6015C36.9938 59.0047 37.9433 58.9865 38.5402 59.561L42.398 63.2741L53.6027 52.4896C54.1995 51.9151 55.1491 51.9332 55.7236 52.5301Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M24 3C18.201 3 13.5 7.70101 13.5 13.5V25.5C13.5 26.3284 12.8284 27 12 27C11.1716 27 10.5 26.3284 10.5 25.5V13.5C10.5 6.04416 16.5442 0 24 0C31.4558 0 37.5 6.04416 37.5 13.5V14.25C37.5 15.0784 36.8284 15.75 36 15.75C35.1716 15.75 34.5 15.0784 34.5 14.25V13.5C34.5 7.70101 29.799 3 24 3Z" fill="white"></path></svg>,
      title : "Unlimited access to all courses, workshops and career paths" ,
      description :"With 800+ hours of lessons available 24/7, you'll learn everything from beginner fundamentals to advanced topics that will help take you career to new heights." ,
      links : [
        {
          name : "VIEW OUR COURSES",
          path : "/courses"
        },{
          name :"VIEW OUR CAREER PATHS",
          path : "/career-paths"
        },
        {
          name : "VIEW OUR WORKSHOPS & MORE",
          path : "/workshop-and-more"
        }
      ]
    },
    {
      icon: <svg width="75" height="75" viewBox="0 0 75 53" fill="none"><g opacity="0.4"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 26.3633C5.37258 26.3633 0 31.7359 0 38.3633V45.608C0 45.8629 0.15168 46.0919 0.392506 46.1755C1.53872 46.5731 5.23499 47.636 12 47.636C18.765 47.636 22.4613 46.5731 23.6075 46.1755C23.8483 46.0919 24 45.8629 24 45.608V38.3633C24 31.7359 18.6274 26.3633 12 26.3633Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M11.8616 24.6377C15.9037 24.6377 19.1804 21.361 19.1804 17.3189C19.1804 13.2768 15.9037 10 11.8616 10C7.81949 10 4.54272 13.2768 4.54272 17.3189C4.54272 21.361 7.81949 24.6377 11.8616 24.6377Z" fill="white"></path></g><g opacity="0.4"><path fill-rule="evenodd" clip-rule="evenodd" d="M63 21.8633C56.3726 21.8633 51 27.2359 51 33.8633V41.108C51 41.3629 51.1517 41.5919 51.3925 41.6755C52.5387 42.0731 56.235 43.136 63 43.136C69.765 43.136 73.4613 42.0731 74.6075 41.6755C74.8483 41.5919 75 41.3629 75 41.108V33.8633C75 27.2359 69.6274 21.8633 63 21.8633Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M62.8616 20.1377C66.9037 20.1377 70.1804 16.861 70.1804 12.8189C70.1804 8.77677 66.9037 5.5 62.8616 5.5C58.8195 5.5 55.5427 8.77677 55.5427 12.8189C55.5427 16.861 58.8195 20.1377 62.8616 20.1377Z" fill="white"></path></g><path fill-rule="evenodd" clip-rule="evenodd" d="M50.9996 48.3455V40C50.9996 32.5442 44.9555 26.5 37.4996 26.5C30.0438 26.5 23.9996 32.5442 23.9996 40V48.3455C26.2459 48.9269 30.6373 49.75 37.4996 49.75C44.362 49.75 48.7534 48.9269 50.9996 48.3455ZM37.4996 23.5C28.3869 23.5 20.9996 30.8873 20.9996 40V49.9615C20.9996 50.312 21.2082 50.6269 21.5393 50.7418C23.1154 51.2886 28.1977 52.75 37.4996 52.75C46.8015 52.75 51.8839 51.2886 53.4599 50.7418C53.7911 50.6269 53.9996 50.312 53.9996 49.9615V40C53.9996 30.8873 46.6123 23.5 37.4996 23.5Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M37.3093 17.1269C41.2103 17.1269 44.3727 13.9645 44.3727 10.0634C44.3727 6.16241 41.2103 3 37.3093 3C33.4083 3 30.2458 6.16241 30.2458 10.0634C30.2458 13.9645 33.4083 17.1269 37.3093 17.1269ZM37.3093 20.1269C42.8672 20.1269 47.3727 15.6213 47.3727 10.0634C47.3727 4.50555 42.8672 0 37.3093 0C31.7514 0 27.2458 4.50555 27.2458 10.0634C27.2458 15.6213 31.7514 20.1269 37.3093 20.1269Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M44.5345 34.4138C45.1344 34.9851 45.1575 35.9346 44.5862 36.5345L36.0148 45.5345C35.7317 45.8318 35.3391 46 34.9286 46C34.5181 46 34.1255 45.8318 33.8424 45.5345L30.4138 41.9345C29.8425 41.3346 29.8656 40.3851 30.4655 39.8138C31.0654 39.2425 32.0149 39.2656 32.5862 39.8655L34.9286 42.325L42.4138 34.4655C42.9851 33.8656 43.9346 33.8425 44.5345 34.4138Z" fill="white"></path></svg>,
      title : "Taught by world-class instructors with real-world experience" ,
      description :"Our instructors are industry veterans with years of practical, real-world experience. They teach you only what matters and don't waste your time on things that don't." ,
      links : [
        {
          name : "CHECK OUT OUR INSTRUCTORS",
          path : "/about"
        }
      ]
    },
    {
      icon: <svg width="75" height="75" viewBox="0 0 75 50" fill="none"><path opacity="0.4" d="M34.2111 24.5778H18.1995L13.0366 29.7082C12.3648 30.3726 11.2249 29.8967 11.2249 28.9519V24.5778C5.02556 24.5778 -3.8147e-06 19.5522 -3.8147e-06 13.3529V12.2889C-3.8147e-06 5.50193 5.50193 0 12.2889 0H22.4768H34.2111C40.9981 0 46.5 5.50193 46.5 12.2889C46.5 19.0759 40.9981 24.5778 34.2111 24.5778Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M48.24 50.3824H37.9412C29.4133 50.3824 22.5 43.4691 22.5 34.9412C22.5 26.4132 29.4133 19.5 37.9412 19.5H56.5588C65.0868 19.5 72 26.4132 72 34.9412C72 43.4691 65.0867 50.3824 56.5588 50.3824H54.72V55.1107C54.72 55.8015 53.8815 56.1437 53.3982 55.6501L48.24 50.3824ZM57.72 53.3464C67.3638 52.7472 75 44.736 75 34.9412C75 24.7564 66.7436 16.5 56.5588 16.5H37.9412C27.7564 16.5 19.5 24.7564 19.5 34.9412C19.5 45.126 27.7564 53.3824 37.9412 53.3824H46.9788L51.2547 57.749C53.6186 60.1631 57.72 58.4894 57.72 55.1107V53.3464Z" fill="white"></path><path d="M39.2109 35.1191C39.2109 36.42 38.1564 37.4746 36.8555 37.4746C35.5546 37.4746 34.5 36.42 34.5 35.1191C34.5 33.8182 35.5546 32.7637 36.8555 32.7637C38.1564 32.7637 39.2109 33.8182 39.2109 35.1191Z" fill="white"></path><path d="M49.541 35.1191C49.541 36.42 48.4864 37.4746 47.1855 37.4746C45.8847 37.4746 44.8301 36.42 44.8301 35.1191C44.8301 33.8182 45.8847 32.7637 47.1855 32.7637C48.4864 32.7637 49.541 33.8182 49.541 35.1191Z" fill="white"></path><path d="M59.8716 35.1191C59.8716 36.42 58.817 37.4746 57.5161 37.4746C56.2152 37.4746 55.1606 36.42 55.1606 35.1191C55.1606 33.8182 56.2152 32.7637 57.5161 32.7637C58.817 32.7637 59.8716 33.8182 59.8716 35.1191Z" fill="white"></path></svg>,
      title : "Learn alongside your peers in our private Discord community" ,
      description :"Learning alone is hard. The ZTM Discord helps solve this. Our instructors, TAs, mentors, alumni and fellow students help guide you and make sure you're on the right path to achieve your goals and take your skills, confidence and career to the next level." ,
      links : [
        {
          name : "CHECK OUT OUR COMMUNITY",
          path : "/community"
        }
      ]
    }
  ]
  return (
    <div className="w-screen min-h-screen ">
        <Navbar/>
        <Cost/>
        <MarqueueComp/>
        <div className="w-screen h-screen bg-baby_blue py-10">
          <h1 className="text-white font-bold text-5xl tracking-wide text-center">You'll take your career to the next level with ZTM</h1>
          <div className="flex space-x-10 w-full  h-full justify-center mt-10 px-20">
            {
              features.map((ele)=>(
                <div className="w-1/3 h-full flex flex-col space-y-5 mt-10">
                  <span >{ele.icon}</span>
                  <span className="text-white text-2xl font-semibold">{ele.title}</span>
                  <p className=" text-white text-xl font-light">{ele.description}</p>
                  <div className="flex flex-col space-y-3 mt-4">
                    {
                      ele.links.map((res)=>(
                        <Link to={res.path} className="text-white font-xl font-bold">{res.name}</Link>
                      ))
                    }
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <ReviewsMarqueue/>
        <Footer/>
    </div>
  )
}

export default Academy