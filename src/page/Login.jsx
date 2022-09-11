import React ,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col w-screen h-screen pb-5">
      <div className="flex flex-row justify-center h-screen w-screen ">
        <div className="flex flex-col items-center space-y-14 pt-3">
          <img src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=height:60/https://www.filepicker.io/api/file/62HZfRHyQieUquIdz539" alt="logo" className=" cursor-pointer w-[130px]" onClick={()=>(navigate("/"))}/>
          <div className=" w-[400px]  h-[440px] flex flex-col p-10  border-2 border-gray-200 shadow-2xl bg-white">
            <h1 className="text-3xl text-center font-light">Log In</h1>
            <div className="flex flex-col space-y-3 mt-6">
              <h1>Email</h1>
              <input type="text" className="w-[310px] py-1 rounded-xl border-2 border-gray-300 px-4 outline-none tracking-wide" placeholder='Enter your email' />
            </div>
            <div className="flex flex-col space-y-3 mt-4">
              <h1>Password</h1>
              <input type="text" className="w-[310px] px-4  py-1 rounded-xl border-2 border-gray-300 outline-none" placeholder='Enter your password' />
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-row items-center justify-center space-x-3">
                <input type="checkbox" name="" id="" />
                <h1 className="text-sm font-light">
                  Remember Me
                </h1>
              </div>
              <h1 className="text-baby_light_green text-light text-sm my-6 text-right hover:text-baby_pink cursor-pointer ">Forgot Password</h1>
            </div>
            <button className="bg-baby_light_green text-white py-3 px-2 rounded-3xl hover:scale-105 duration-200 hover:bg-baby_pink">Log in</button>
          </div>
        </div>
      </div>
      <h1 className="text-center text-thin font-xl text-gray-500">© Zero To Mastery Academy 2022</h1>
    </div>
  )
}
export default Login