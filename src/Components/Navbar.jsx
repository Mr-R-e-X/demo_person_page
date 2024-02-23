import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMEnu] = useState(true);
  const toggleMenu = () => {
    setOpenMEnu(!openMenu);
  };
  return (
    <>
      <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
        <img
          src={
            openMenu
              ? "https://cdn-icons-png.flaticon.com/128/9868/9868357.png"
              : "https://cdn-icons-png.flaticon.com/128/2763/2763138.png"
          }
          className="min-w-8 h-10 right-3 top-3 z-10 absolute"
          alt="Icon"
        />
      </div>
      <div
        className={`${
          openMenu ? "hidden" : "absolute bg-neutral-600 z-10 text-xs"
        } lg:flex bg-slate-800 text-white font-medium flex-col justify-evenly px-4 mx-2 min-w-max max-w-[20vw] min-h-[98vh] mt-[1vh] mb-[1vh] rounded-xl`}
      >
        <div className="px-1 py-2 top-10">
          <ul className="text-lg">
            <Link to="/">
              <li className="py-2 cursor-pointer hover:border-b-2 hover:bg-slate-950 hover:px-2 hover:rounded-md hover:text-base hover:text-center transition-all ease-in-out duration-200">
                Home
              </li>
            </Link>
            <Link to="/people">
              <li className="py-2 cursor-pointer hover:border-b-2 hover:bg-slate-950 hover:px-2 hover:rounded-md hover:text-base hover:text-center transition-all ease-in-out duration-200">
                People
              </li>
            </Link>
            <Link to="/alumni">
              <li className="py-2 cursor-pointer hover:border-b-2 hover:bg-slate-950 hover:px-2 hover:rounded-md hover:text-base hover:text-center transition-all ease-in-out duration-200">
                Alumni
              </li>
            </Link>
            <Link to="/research">
              <li className="py-2 cursor-pointer hover:border-b-2 hover:bg-slate-950 hover:px-2 hover:rounded-md hover:text-base hover:text-center transition-all ease-in-out duration-200">
                Researchs
              </li>
            </Link>
            <Link to="/projects">
              <li className="py-2 cursor-pointer hover:border-b-2 hover:bg-slate-950 hover:px-2 hover:rounded-md hover:text-base hover:text-center transition-all ease-in-out duration-200">
                Projects
              </li>
            </Link>
            <Link to="/aboutme">
              <li className="py-2 cursor-pointer hover:border-b-2 hover:bg-slate-950 hover:px-2 hover:rounded-md hover:text-base hover:text-center transition-all ease-in-out duration-200">
                About Me
              </li>
            </Link>
          </ul>
        </div>
        <div className="px-1 py-2">
          <ul className="text-lg">
            <li className="py-2 cursor-pointer hover:border-b-2 hover:bg-slate-950 hover:px-2 hover:rounded-md hover:text-base hover:text-center transition-all ease-in-out duration-200">
              Publications
            </li>
            <li className="py-2 cursor-pointer hover:border-b-2 hover:bg-slate-950 hover:px-2 hover:rounded-md hover:text-base hover:text-center transition-all ease-in-out duration-200">
              Recognition
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
