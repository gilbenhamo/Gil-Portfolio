import { useState } from "react";
import { styles } from "../styles";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { Twirl } from "hamburger-react";
import { MobileNavLink } from "./MobileNavLink";
import { motion } from "framer-motion";
import { while_hover_repeat } from "../utils/motion";

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [active, setActive] = useState("");
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-green_p`}
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
          {/* <img src={logo} alt="logo" className="w-9 h-9 object-contain" /> */}
          <motion.p
            whileHover={while_hover_repeat}
            className="text-white_p text-[18px] font-bold cursor-pointer flex hover:text-c2"
          >
            Gil Ben Hamo &nbsp;
            <span className="md:block hidden">| &nbsp;Software Engineer</span>
          </motion.p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <motion.li
              key={link.id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.7 }}
              className={`${
                active === link.title ? "text-blue_p" : "text-secondary"
              } hover:text-c2 text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}> {link.title} </a>
            </motion.li>
          ))}
        </ul>
        {/* Mobile Scetion*/}
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
