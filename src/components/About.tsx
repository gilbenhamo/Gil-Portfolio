import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { services } from "../constants";
import { ServiceCard } from "./UI/ServiceCard";
import { SectionWrraper } from "./hoc/SectionWrraper";
import SectionHead from "./UI/SectionHead";

const About = () => {
  return (
    <>
      <SectionHead pText={'Introduction'} headText={"Overview."}/>
      <motion.p
        variants={fadeIn("", "", 0.5, 0.2)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially
      </motion.p>
      <div className="md:mt-20 mt-10 flex flex-wrap gap-8 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrraper(About, "about");
