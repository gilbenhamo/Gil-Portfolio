import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { SectionWrapper } from "./hoc/SectionWrapper";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import SectionHead from "./UI/SectionHead";
import EmailForm from "./EmailForm";
import EarthCanvas from "./canvas/EarthCanvas";

const Contact = () => {
  return (
    <div className="xl:mt-12 xl:flex-row flex-col flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "spring", 0.2, 1)}
        className="flex-[0.75] bg-c3 p-8 rounded-2xl"
      >
        <SectionHead pText={"Get in touch"} headText={"Contact."} />
        <EmailForm />
      </motion.div>
      <motion.div
        variants={slideIn("right", "spring", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
