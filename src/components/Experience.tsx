import { motion } from "framer-motion";
import { styles } from "../styles";
import { experiences } from "../constants";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import SectionHead from "./UI/SectionHead";
import { SectionWrraper } from "./hoc/SectionWrraper";
import ExperienceCard from "./UI/ExperienceCard";
import 'react-vertical-timeline-component/style.min.css';


const Experience = () => (
  <>
    <SectionHead pText={"Introduction"} headText={"Overview."} />
    <div className="mt-20 flex flex-col">
      <VerticalTimeline>
      {experiences.map((e, index) => (

         <ExperienceCard key={index}/>
        ))}
      </VerticalTimeline>
    </div>
  </>
);

export default SectionWrraper(Experience, "work");
