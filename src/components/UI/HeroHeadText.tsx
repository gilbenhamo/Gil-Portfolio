import React from "react";
import { styles } from "../../styles";
import { motion } from "framer-motion";
import {
  staggerChildren,
  staggerContainer,
  staggerContainer2,
} from "../../utils/motion";

const HeroHeadText = () => {
  const variants = staggerContainer2();
  return (
    <div
      className={`px-8 mt-28 sm:mt-24 xl:mt-0 inset-0 max-w-7xl mx-auto flex flex-row justify-center items-center gap-2 `}
    >
      <div className="flex flex-col justify-center items-center mt-5">
        <div className="w-5 h-5 rounded-full bg-green-300" />
        <div className="w-1 sm:h-40 h-32 green-gradient" />
      </div>
      <div className="sm:backdrop-blur-[0px] backdrop-blur-sm">
        <h1 className={`${styles.heroHeadText}`}>
          Hey, I'm
          <span className=" text-[#05386b]"> Gil</span>
        </h1>
        <motion.ul
          variants={variants}
          initial="hidden"
          animate="show"
          className={`${styles.heroSubText} `}
        >
          <motion.li className="list-none" variants={staggerChildren}>
            Graduted software engineer,&nbsp;
          </motion.li>
          <motion.li className="list-none" variants={staggerChildren}>
            with a specialization in cyber&nbsp;
            <br className="sm:block hidden" />
          </motion.li>
          <motion.li className="list-none" variants={staggerChildren}>
            and knowledge across multiple fields.
          </motion.li>
        </motion.ul>
      </div>
    </div>
  );
};

export default HeroHeadText;
