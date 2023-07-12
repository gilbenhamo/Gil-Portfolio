import { styles } from "../styles";
import HeroCanvas from "./HeroCanvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`px-6 absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start justify-center gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-green-300" />
          <div className="w-1 sm:h-60 h-40 green-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm
            <span className=" text-green-300"> Gil</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Recently gradute software engineer, <br className="sm:block hidden"/>
            Full stack developer 
          </p>
        </div>
      </div>
    <HeroCanvas/>
    </section>
  );
};

export default Hero;
