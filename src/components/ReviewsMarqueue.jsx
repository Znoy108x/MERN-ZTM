import React from 'react'
import Marquee from "react-fast-marquee";
import r1 from "../assets/images/r1.webp"
import r2 from "../assets/images/r2.webp"
import r3 from "../assets/images/r3.webp"
import r4 from "../assets/images/r4.webp"
const ReviewsMarqueue = () => {
    const review = [
        {
            desc : "I was asked a lot of security questions at my interview with Tesla and I was able to answer them because of Andrei’s course: Complete Junior to Senior Web Developer Roadmap. I would recommend his courses to anyone who wants to learn web dev inside and out.",
            name:"Olga Fomin",
            job:"Software Engineer",
            image: r1,
        },
        {
            desc : "ZTM was the key stepping stone to building my confidence, learning CS fundamentals, starting my own projects and ultimately passing the infamous Google coding interview and getting hired ahead of thousands with way more experience.",
            name:"Aradhya Bansal",
            job:"Web Development Intern",
            image: r2,
        },
        {
            desc : "Andrei is one of the best teachers & his courses were a big reason I was able to get internships at both JP Morgan and Amazon. 2020 UPDATE: I just got an offer from Amazon as a full-time engineer. I couldn't have done it without the foundations from ZTM.",
            name:"Justin Lin",
            job:"Software Engineer",
            image: r3,
        },
        {
            desc : "  Andrei’s course helped me to ace my Frontend Engineer interviews at places like Uber, Amazon India and Gojek. Can't thank you and the ZTM community enough!",
            name:"Karan Verma",
            job:"Software Engineer",
            image: r4,
        }
    ]
    return (
        <div className="w-screen min-h-screen mt-9  py-10 px-7 ">
            <h1 className="text-center text-5xl font-bold font-gray-900">What ZTM students are saying</h1>
            <h1 className="text-center text-xl  font-gray-900 px-72 mt-6 tracking-wide">Our courses and community have helped 1,000s of Zero To Mastery students go from zero to getting hired to levelling up their skills and advancing their careers to new heights.</h1>
            <Marquee speed={90} delay={0} gradientColor={[248, 251, 253]} gradientWidth={100}
                className="flex items-center mt-20 ">
                {
                    review.map((res) => (
                        <div className="w-[40vw] h-[50vh] flex flex-col justify-between p-10 rounded-2xl shadow-2xl mx-6 bg-white mb-10 border-2 border-gray-100">
                            <p className="text-xl font-gray-900  tracking-wide">{res.desc}</p>
                            <picture className="flex space-x-10 items-center mt-10">
                                <img src={res.image} alt="" className="rounded-3xl" />
                                <div className="flex flex-col space-y-2">
                                    <span className="font-xl text-black font-semibold tracking-wide">{res.name}</span>
                                    <span className="font-xl text-gray-600">{res.job}</span>
                                </div>
                            </picture>
                        </div>
                    ))
                }
            </Marquee>
        </div>
    )
}
export default ReviewsMarqueue