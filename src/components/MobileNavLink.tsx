import React from "react";
import { navLinks } from "../constants";

interface Props {
  isOpen: boolean;
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MobileNavLink = ({
  isOpen,
  active,
  setActive,
  setOpen,
}: Props) => {
  return (
    <div
      className={`${
        !isOpen ? "hidden" : "flex"
      } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
    >
      <ul className="list-none flex justify-end items-start flex-col gap-4">
        {navLinks.map((link) => (
          <li
            key={link.id}
            className={`${
              active === link.title ? "text-white" : "text-secondary"
            } font-poppins font-medium cursor-pointer hover:text-white text-[16px]`}
            onClick={() => {
              setActive(link.title);
              setOpen(!isOpen);
            }}
          >
            <a href={`#${link.id}`}> {link.title} </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
