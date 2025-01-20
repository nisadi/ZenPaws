import React from "react";
import Herogif from "../../assets/Untitled design.gif"
import {motion} from "framer-motion";
import {FadeRight} from "../../utility/animation";

const Hero = () => {
  return <section>
    <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
       <div className="flex flex-col justify-center py-12 md:py-1 relative z-10">
        <div className="text-center md:text-left space-y-8 lg:max-w-[450px]">
          <motion.h1
          variants = {FadeRight(0.6)}
          initial="hidden"
          animate = "visible"
          className="text 5xl lg:text-6xl font bold xl:leading leading-loose font-averia">Relax and Heal 
          <br/>
          with
          <br/>
           <span className="text-orange-600">Our Pet Therapy Services!</span></motion.h1>
           <motion.p 
           variants = {FadeRight(0.9)}
           initial="hidden"
           animate = "visible"
           className="text-gray-600 font-bold">"Welcome to our pet therapy services! Relax and feel calm with our friendly cats, happy dogs, and peaceful fish. Spend time with our pets and enjoy a break from stress. Let them help you feel happy and refreshed."</motion.p>
           <motion.p 
           variants = {FadeRight(1.2)}
           initial="hidden"
           animate = "visible"
           className="text-2xl tracking-wide text-red-950 font-bold"> Book Your Therapy Session Now </motion.p>

           <motion.div 
           variants = {FadeRight(1.5)}
           initial="hidden"
           animate = "visible"
           className="flex justify-center md:justify-start">
            <button className="primary-btn"> Book Now </button>
           </motion.div>
        </div>
       </div>
       <div className="flex justify-center items-center">
        <motion.img 
        initial = {{opacity:0, x:200, rotate:75}}
        animate = {{opacity:1, x:0, rotate:0}}
        transsition = {{duration: 1.5, delay:0.2}}
        src={Herogif} alt=""className="w-[750px] "/>
       </div>
    </div>
  </section>
};
 
export default Hero;
