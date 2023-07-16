import { motion } from "framer-motion";
import React from "react";
import { fadeIn } from "../../utils/motion";
import { Tilt } from "react-tilt";
import { github } from "../../assets";
interface Props {
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: string;
  source_code_link: string;
  index: number;
}

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  index,
}: Props) => {
  return (
    <motion.div variants={fadeIn("up", "spring", 0.5 + index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 20, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex m-3 card-img_hover justify-end ">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer border-2 border-indigo-500"
            >
              <img src={github} className="w-3/4 h-3/4 object-contain" />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;
