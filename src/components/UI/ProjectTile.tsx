import { motion } from "framer-motion";
import { github, link } from "../../assets";
import CircleTileButton from "./CircleTileButton";

interface Props {
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: string;
  source_code_link: string;
  index: number;
}

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const ProjectTile = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  index,
}: Props) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-gray-100 z-30 flex flex-col justify-center items-center text-center p-8 text-c3`;

  return (
    <motion.div
     variants={projectVariant} className="relative">
      <motion.div
      className={overlayStyles}>
        <div className="absolute inset-0 flex m-3 card-img_hover justify-end gap-[1px]">
          <CircleTileButton
            source_code_link={source_code_link}
            src={link}
            alt={"vzou"}
          />
          <CircleTileButton
            source_code_link={source_code_link}
            src={github}
            alt={"github"}
          />
        </div>
        <p className="text-2xl font-playfair">{name}</p>
        <p className="mt-4">{description}</p>
        <div className="mt-4 flex flex-wrap gap-1">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </motion.div>
      <img className="" src={image} alt={name} />
    </motion.div>
  );
};

export default ProjectTile;
