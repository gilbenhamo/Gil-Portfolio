import { motion } from "framer-motion";
import { SectionWrapper } from "./hoc/SectionWrapper";
import SectionHead from "./UI/SectionHead";
import { fadeIn } from "../utils/motion";
import { projects } from "../constants";
import ProjectCard from "./UI/ProjectCard";
import Projects from "./Projects";

const Works = () => {
  return (
    <>
      <SectionHead pText={"My Work"} headText={"Projects"} />
      {/* <div className="w-full flex">
        <motion.p
        variants={fadeIn("right","",0.2,1)}
        className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Hampden-Sydney College in Virginia, looked up one of the more
          obscure Latin words, consectetur, from a Lorem Ipsum passage, and
          going through the cites of the word in classical literature,
          discovered the undoubtable source.
        </motion.p>
      </div>
      <div className=" mt-20 flex flex-wrap gap-7 justify-center">
      {
        projects.map((project,index)=>(
          <ProjectCard key={`project-${index}`}
          index={index}
          {...project}
          />
        ))
      }
      </div> */}
      <Projects/>
    </>
  );
};

export default SectionWrapper(Works, "");
