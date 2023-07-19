import { styles } from "../styles";
import HeroCanvas2 from "./canvas/HeroCanvas2";
import { OvalNextSection } from "./UI/OvalNextSection";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`px-6 absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start justify-center gap-5 `}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-green-300" />
          <div className="w-1 sm:h-60 h-40 green-gradient" />
        </div>
        <div className="sm:backdrop-blur-[0px] backdrop-blur-sm">
          <h1 className={`${styles.heroHeadText} text-white_p`}>
            Hi, I'm
            <span className=" text-[#05386b]"> Gil</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-[#edf5e1]`}>
            Graduted software engineer,&nbsp;
            <br />
            with a specialization in cyber&nbsp;
            <br className="sm:block hidden"/>
            and knowledge across multiple fields.
          </p>
        </div>
      </div>
      <HeroCanvas2 />
      <OvalNextSection />
    </section>
  );
};

export default Hero;
