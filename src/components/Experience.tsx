import { experiences } from "../constants";
import {
  VerticalTimeline,
} from "react-vertical-timeline-component";
import SectionHead from "./UI/SectionHead";
import { SectionWrapper } from "./hoc/SectionWrapper";
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

export default SectionWrapper(Experience, "work");
