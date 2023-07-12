import { useState } from "react";
import { styles } from "../styles";
import { Link } from "react-router-dom";
import { logo } from "../assets";
import { navLinks } from "../constants";
import { Twirl } from "hamburger-react";
import { MobileNavLink } from "./MobileNavLink";

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [active, setActive] = useState("");
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            window.scrollTo(0, 0);
            setActive("");
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Gil Ben Hamo &nbsp;
            <span className="sm:block hidden">| &nbsp;Software Engineer</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}> {link.title} </a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <Twirl rounded toggled={isOpen} toggle={setOpen} />
          <MobileNavLink
            isOpen={isOpen}
            active={active}
            setActive={setActive}
            setOpen={setOpen}
          />
        </div>
      </div>
    </nav>
  );
};
