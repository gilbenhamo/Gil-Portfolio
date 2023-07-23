import { motion } from "framer-motion";
import { projects } from "../constants";
import { fadeIn } from "../utils/motion";
import ProjectTile from "./UI/ProjectTile";
import SectionHead from "./UI/SectionHead";
import { SectionWrapper } from "./hoc/SectionWrapper";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const Projects = () => {
  return (
    <>
      <SectionHead pText={"My Work"} headText={"Projects"} />
      <section id="projects">
        <div className="w-full flex">
          <motion.p
            variants={fadeIn("right", "", 0.2, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            In my journey as a software engineer, I have passionately taken on
            various projects that encompass a wide array of technologies. From
            building dynamic front-end interfaces with React, JavaScript, and
            TypeScript to architecting robust back-end solutions using Python,
            Django, and SQL, each project has been a unique opportunity to grow.
          </motion.p>
        </div>
        {/* HEADINGS */}

        {/* PROJECTS */}
        <div className="flex justify-center pt-10">
          <motion.div
            className="grid xl:grid-cols-3 md:grid-cols-2 gap-3 md:gap-0 grid-cols-1 m"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* ROW 1 */}
            <div
              className="flex justify-center text-center items-center p-10 bg-c2
              text-2xl font-playfair font-semibold"
            >
              FULL STACK PROJECTS
            </div>
            {projects.map((project, index) => (
              <ProjectTile
                index={index}
                key={`project-${index}`}
                {...project}
              />
            ))}

            <div
              className="flex justify-center text-center items-center p-10 bg-c3
              text-2xl font-playfair font-semibold"
            >
              VARIOUS TECHNOLOGIES
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default SectionWrapper(Projects, "");
