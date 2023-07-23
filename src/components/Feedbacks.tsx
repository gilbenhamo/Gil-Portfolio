import React from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import SectionHead from "./UI/SectionHead";
import { testimonials } from "../constants";
import FeedbackCard from "./UI/FeedbackCard";
import { SectionWrapper } from "./hoc/SectionWrapper";

const Feedbacks = () => {
  return (
    <div className="mt-12 bg- rounded-[20px]">
      <div className={`${styles.padding} bg-c3 rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <SectionHead pText={"what others say"} headText={"Testimonials."} />
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((t, index) => (
          <FeedbackCard key={t.name} index={index} {...t} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
