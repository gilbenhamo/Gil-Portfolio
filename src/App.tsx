import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import StartsCanvas from "./components/canvas/StartsCanvas";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Projects />
        <Experience />
        {/* <Feedbacks /> */}
        <div className="relative z-0 pb-32">
          <Contact />
          <StartsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
