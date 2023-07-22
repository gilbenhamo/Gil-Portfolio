import { motion } from "framer-motion";
import { ComponentType } from "react";
import { staggerContainer } from "../../utils/motion";
import { styles } from "../../styles";

export const SectionWrapper = (Component: ComponentType, idName: string) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer(true)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };
