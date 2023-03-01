import React, { useState } from "react";
import { AiFillEnvironment } from "react-icons/ai";
import { BsArrowLeftShort, BsSearch } from "react-icons/bs";
import { NavLink, useLocation } from "react-router-dom";

interface RouteProps {
  path: string;
  name: string;
  icon: JSX.Element;
  component: JSX.Element;
  layout: string;
}

interface SideBarProps {
  routes: RouteProps[];
}

const SideBars = (props: SideBarProps) => {
  const [open, setOpen] = useState(true);
  const location = useLocation();
  const activeRoute = (routeName: string): boolean =>
    location.pathname === routeName;

  const createLinks = (appRoutes: RouteProps[]): any =>
    appRoutes.map((appRoute: RouteProps) => {
      const isActive = activeRoute(appRoute.layout + appRoute.path);

      return (
        <li
          key={appRoute.path}
          className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md`}
        >
          <NavLink
            to={appRoute.layout + appRoute.path}
            className="decoration-none"
          >
            <span
              className={`${
                isActive ? "text-[#F5433A]" : "text-black"
              } text-2xl block float-left`}
            >
              {appRoute.icon}
            </span>
            <span
              className={`${
                isActive ? "text-[#F5433A]" : "text-black"
              } text-base font-medium flex-1 duration-200 ${!open && "hidden"}`}
            >
              {appRoute.name}
            </span>
          </NavLink>
        </li>
      );
    });

  return (
    <div
      className={`bg-green-500 h-screen p-5 pt-8 ${
        open ? "w-72" : "w-20"
      } duration-300 relative`}
    >
      <BsArrowLeftShort
        className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer ${
          !open && "rotate-180"
        }`}
        onClick={() => setOpen(!open)}
      />

      <div className="inline-flex">
        <AiFillEnvironment
          className={`bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${
            open && "rotate-[360deg]"
          }`}
        />

        <div className={`text-left font-bold ${!open && "scale-0"}`}>
          <span className="text-white-500">Company</span>Name
        </div>
      </div>

      <div
        className={`flex items-center rounded-md bg-light-white mt-6 ${
          !open ? "px-2.5" : "px-4"
        } py-2`}
      >
        <BsSearch
          className={`text-white text-lg block float-left cursor-pointer ${
            !open && "mr-2"
          }`}
        />
        <input
          type="search"
          placeholder="Search"
          className={`text-base bg-transparent w-full text-white focus:outline-none ${
            !open && "hidden"
          }`}
        />
      </div>

      <ul className="pt-2">{createLinks(props.routes)}</ul>
    </div>
  );
};

export default SideBars;
