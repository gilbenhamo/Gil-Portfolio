import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { SectionWrapper } from "./hoc/SectionWrapper";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import SectionHead from "./UI/SectionHead";
import EmailForm from "./EmailForm";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const handleChange = (e: Event) => {};
  const handleSubmit = (e: Event) => {};

  return (
    <div className="xl:mt-12 x:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "spring", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <SectionHead pText={"Get in touch"} headText={"Contact."} />
        <EmailForm loading={loading}/>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
