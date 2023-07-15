import { motion } from "framer-motion";
import { styles } from "../styles";
import { experiences } from "../constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import SectionHead from "./UI/SectionHead";
import { SectionWrraper } from "./hoc/SectionWrraper";
import ExperienceCard from "./UI/ExperienceCard";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => (
  <>
    <SectionHead pText={"what i've done so far"} headText={"Experience."} />
    <div className="mt-20 flex flex-col">
      <VerticalTimeline>
        {experiences.map((e, index) => (
          <ExperienceCard key={index} experience={e} />
        ))}
      </VerticalTimeline>
    </div>
  </>
);

export default SectionWrraper(Experience, "work");
