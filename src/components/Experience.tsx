import { motion } from "framer-motion";
import { styles } from "../styles";
import { experiences } from "../constants";
import SectionHead from "./UI/SectionHead";
import { SectionWrraper } from "./hoc/SectionWrraper";

const Experience = () => (
    <>
        <SectionHead pText={"Introduction"} headText={"Overview."} />
        <div className="mt-20 flex flex-col">
        </div>
    </>
);

export default SectionWrraper(Experience,'work');
