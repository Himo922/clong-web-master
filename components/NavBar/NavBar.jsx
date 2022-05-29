import React, { useRef, useCallback, useState, useEffect } from "react";
import Link from "next/link";
import clsx from "clsx";
import { useWindowSize } from "./useWindowSize";

export const NavBar = () => {
  const [isActive, setIsActive] = useState(false);
  const { width, height } = useWindowSize();
  const mobileMenu = useRef();

  const MenuStatus = () => {
    if (isActive) {
      console.log("Moved");
      return `translate-x-0`;
    }
    return "translate-x-[120vw]";
  };

  useEffect(() => {
    console.log("Added");
  }, []);

  return (
    <nav className="nav-section-container w-full border-gray-200 fixed top-0 z-1000 ">
      <div className="nav-section-blur"></div>
      <div className="container flex flex-wrap justify-between items-center max-w-[1500px] mx-auto px-10 py-2.5 ">
        <Link href="https://www.clong.pro">
          <a className="flex items-center">
            <img
              src="/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Clong Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              CLong
            </span>
          </a>
        </Link>

        <button
          type="button"
          onClick={() => {
            setIsActive(!isActive);
            console.log(isActive);
          }}
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          Menu
        </button>

        {/*         
           {(isActive || width > 768) && ( */}
        <div
          ref={mobileMenu}
          className={clsx(
            "nav-menu w-full md:w-auto",
            " bg-white-900 h-screen top-0 -z-1 absolute md:relative ease-in-out",
            MenuStatus()
          )} //added by me
          id="mobile-menu"
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:mt-[30px]">
            <li>
              <Link
                href="/about"
                className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
              >
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link
                href="/project"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                <a>Project</a>
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
