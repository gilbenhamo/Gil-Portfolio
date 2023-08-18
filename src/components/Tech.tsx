import { SectionWrapper } from "./hoc/SectionWrapper";
import { technologies } from "../constants";
import BallCanvas from "./canvas/BallCanvas";
import { motion } from "framer-motion";
import { slideFadeIn } from "../utils/motion";

const Tech = () => {
  return (
    <motion.div
      variants={slideFadeIn("up", "spring", 0.5, 2)}
      className="flex flex-row flex-wrap justify-center gap-10"
    >
      {technologies.map((tech) => (
        <div className="w-28 h-28" key={tech.name}>
          <BallCanvas icon={tech.icon} />
        </div>
      ))}
    </motion.div>
  );
};

export default SectionWrapper(Tech, "Tech");
