import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar/>
        <div>Hero</div>
      </div>
      <div>About</div>
      <div>Experience</div>
      <div>Tech</div>
      <div>Works</div>
      <div>Feedbakcs</div>

    </div>
    </BrowserRouter>
  );
}

export default App;
