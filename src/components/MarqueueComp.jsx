import React from 'react'
import m1 from "../assets/images/m1.svg"
import m2 from "../assets/images/m2.svg"
import m3 from "../assets/images/m3.svg"
import m4 from "../assets/images/m4.svg"
import m5 from "../assets/images/m5.svg"
import m6 from "../assets/images/m6.svg"
import m7 from "../assets/images/m7.svg"
import m8 from "../assets/images/m8.svg"
import m9 from "../assets/images/m9.svg"
import m10 from "../assets/images/m10.svg"
import m11 from "../assets/images/m11.svg"
import m12 from "../assets/images/m12.svg"
import Marquee from "react-fast-marquee";
const MarqueueComp = () => {
    const marqueue_images = [
        {image : m1, key:1},
        {image : m2, key:2},
        {image : m3, key:3},
        {image : m4, key:4},
        {image : m5, key:5},
        {image : m6, key:6},
        {image : m7, key:7},
        {image : m8, key:8},
        {image : m9, key:9},
        {image : m10, key:10},
        {image : m11, key:11},
        {image : m12, key:12},
    ]
    return (
        <div className="w-screen h-[500px] flex flex-col items-center justify-center bg-[#f7f7fc]">
            <h1 className="text-center text-black text-5xl font-bold tracking-wide mx-48">Our students are getting hired by top companies. We can help you too.</h1>
            <Marquee speed={90} delay={0} gradientColor={[248, 251, 253]} gradientWidth={100}
                className="flex items-center mt-20">
                {
                    marqueue_images.map((res) => (
                        <img src={res.image} alt="" key={res.key} className="h-12 mx-10" />
                    ))
                }
            </Marquee>
        </div>
    )
}
export default MarqueueComp