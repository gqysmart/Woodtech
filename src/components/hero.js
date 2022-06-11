import React from "react"
import ReactTyped from "react-typed"
const Hero = () => {
  return (
    <div className=" max-w-[800px]  w-full h-screen mx-auto text-center flex flex-col justify-center">
      <p className=" text-[#00df9a] font-bold p-2">
        growing with data alalytics
      </p>
      <h1 className="lg:text-7xl md:text-6xl text-4xl font-bold lg:py-6">
        grow with data.
      </h1>
      <div className="flex justify-center ">
        <p> fast ,flexible finacing for </p>
        <ReactTyped
          className="lg:text-5xl sm:text-4xl text-xl font-bold"
          strings={["bye", "bya", "byb"]}
          backSpeed={140}
          typeSpeed={120}
          loop
        ></ReactTyped>
      </div>
    </div>
  )
}

export default Hero
