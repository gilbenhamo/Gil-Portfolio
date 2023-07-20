import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { services } from "../constants";
import { ServiceCard } from "./UI/ServiceCard";
import { SectionWrapper } from "./hoc/SectionWrapper";
import SectionHead from "./UI/SectionHead";

const About = () => {
  return (
    <>
      <SectionHead pText={"Introduction"} headText={"Overview."} />
      <motion.p
        variants={fadeIn("", "", 0.5, 0.2)}
        className="mt-2 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I define myself as a quick learner who is eager to acquire new knowledge
        and possess excellent problemsolving skills. As I embrace new
        challenges, I am seeking a junior developer position.
      </motion.p>
      <div className="md:mt-20 mt-10 flex flex-wrap gap-8 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
