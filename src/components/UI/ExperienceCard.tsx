import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { experienceType } from "../../utils/types";

const ExperienceCard = ({ experience }: { experience: experienceType }) => {
  return (
      <VerticalTimelineElement
        contentStyle={{ background: "#F76C6C", color: "#fff" }}
        contentArrowStyle={{ borderRight: "tpx solid #232631" }}
        date={experience.date}
        iconStyle={{ background: experience.iconBg }}
        icon={
          <div className="flex justify-center items-center w-full h-full">
            <img
              src={experience.icon}
              alt={experience.company_name}
              className="w-[70%] h-[70%] object-contain"
            />
          </div>
        }
      >
        <div>
          <h3 className="text-white text-[24px] font-bold">
            {experience.title}
          </h3>
          <p
            className="text-secondary text-[16px] font-semibold"
            style={{ margin: 0 }}
          >
            {experience.company_name}
          </p>
        </div>

        <ul className="mt-5 list-disc ml-5 space-y-2">
          {experience.points.map((p, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-white-100 text-[14px] pl-1 tracking-wider"
            >
              {p}
            </li>
          ))}
        </ul>
      </VerticalTimelineElement>
  );
};

export default ExperienceCard;
