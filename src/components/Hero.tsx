import { motion } from "framer-motion";
import { styles } from "../styles";
import HeroCanvas2 from "./canvas/HeroCanvas2";
import { SectionWrapper } from "./hoc/SectionWrapper";
import HeroHeadText from "./UI/HeroHeadText";
import { OvalNextSection } from "./UI/OvalNextSection";
import { slideFadeIn, slideIn } from "../utils/motion";

const Hero = () => {
  return (
    <div className="relative flex-col flex h-screen xl:grid xl:grid-cols-2">
      <motion.div
        initial={{ scale: 0 }}
        animate={{
          scale: 1,
          transition: {
            type: "spring",
            delay: 0.5,
            duration: 0.5,
          },
        }}
        className="flex justify-center items-center"
      >
        <HeroHeadText />
      </motion.div>
      <HeroCanvas2 />
      <OvalNextSection />
    </div>
  );
};
export default Hero;
