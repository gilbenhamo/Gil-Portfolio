import { motion } from "framer-motion";
import React from "react";

export const OvalNextSection = () => {
  return (
    <div className="absolute sm:bottom-10 bottom-16 w-full flex justify-center items-center">
      <a href="#about">
        <div className="w-[35px] h-[64px] rounded-3xl border-4  border-secondary flex justify-center items-start p-2">
            <motion.div 
            animate={{
                y:[0,24]
            }}
            transition={{
                duration:1,
                repeat:Infinity,
                repeatType:'mirror',
                ease:'backOut'
            }}
            className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
        </div>
      </a>
    </div>
  );
};
