"use client";

import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navList = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Services",
      href: "#services",
    },
    {
      name: "History",
      href: "#history",
    },
    {
      name: "Executive",
      href: "#executive",
    },
    {
      name: "Community",
      href: "#community",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    if (href === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 60;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <header className="fixed top-0 w-screen z-50 ">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6  py-8">
        <div className="flex items-center justify-between card-gradient md:p-6 px-2 py-1 rounded-md">
          <div className="">
            <Link className="block" href="/">
              <span className="sr-only">Home</span>

              <img
                src="assets/images/logo.webp"
                className="w-[120px] md:w-[160px] object-cover h-[50px]"
              />
              {/* <h1
                className="text-white text-4xl font-semibold
"
              >
                Dimtech
              </h1> */}
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                {navList.map((navItem) => (
                  <li key={navItem.name}>
                    <Link
                      className="text-white text-size20 font-medium"
                      href={navItem.href}
                      onClick={(e) => handleScroll(e, navItem.href)}
                    >
                      {navItem.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex items-center gap-4 lg:hidden ">
              <div className="block rounded bg-gray-100 pt-3.5 text-gray-600 transition hover:text-gray-600/75">
                <button
                  onClick={toggleMenu}
                  className="text-white focus:outline-none mb-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="25"
                    viewBox="0 0 14 12"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.5508 4.67721C13.5508 4.52311 13.4896 4.37532 13.3806 4.26635C13.2716 4.15738 13.1238 4.09617 12.9697 4.09617H6.98029C6.82618 4.09617 6.67839 4.15738 6.56942 4.26635C6.46045 4.37532 6.39924 4.52311 6.39924 4.67721C6.39924 4.83132 6.46045 4.97911 6.56942 5.08808C6.67839 5.19705 6.82618 5.25826 6.98029 5.25826H12.9697C13.1238 5.25826 13.2716 5.19705 13.3806 5.08808C13.4896 4.97911 13.5508 4.83132 13.5508 4.67721ZM13.5508 2.35302C13.5508 2.19892 13.4896 2.05113 13.3806 1.94216C13.2716 1.83319 13.1238 1.77197 12.9697 1.77197H4.83506C4.68095 1.77197 4.53316 1.83319 4.42419 1.94216C4.31522 2.05113 4.25401 2.19892 4.25401 2.35302C4.25401 2.50712 4.31522 2.65492 4.42419 2.76388C4.53316 2.87285 4.68095 2.93407 4.83506 2.93407H12.9697C13.1238 2.93407 13.2716 2.87285 13.3806 2.76388C13.4896 2.65492 13.5508 2.50712 13.5508 2.35302ZM13.5508 7.00141C13.5508 6.8473 13.4896 6.69951 13.3806 6.59054C13.2716 6.48158 13.1238 6.42036 12.9697 6.42036H4.83506C4.68095 6.42036 4.53316 6.48158 4.42419 6.59054C4.31522 6.69951 4.25401 6.8473 4.25401 7.00141C4.25401 7.15551 4.31522 7.3033 4.42419 7.41227C4.53316 7.52124 4.68095 7.58246 4.83506 7.58246H12.9697C13.1238 7.58246 13.2716 7.52124 13.3806 7.41227C13.4896 7.3033 13.5508 7.15551 13.5508 7.00141ZM13.5508 9.3256C13.5508 9.1715 13.4896 9.02371 13.3806 8.91474C13.2716 8.80577 13.1238 8.74455 12.9697 8.74455H6.98029C6.82618 8.74455 6.67839 8.80577 6.56942 8.91474C6.46045 9.02371 6.39924 9.1715 6.39924 9.3256C6.39924 9.4797 6.46045 9.6275 6.56942 9.73646C6.67839 9.84543 6.82618 9.90665 6.98029 9.90665H12.9697C13.1238 9.90665 13.2716 9.84543 13.3806 9.73646C13.4896 9.6275 13.5508 9.4797 13.5508 9.3256Z"
                      fill="white"
                      width="30px"
                      height="30px"
                    />
                  </svg>
                </button>
              </div>

              <div
                className={`fixed top-[-32px] left-[-16px] w-screen h-screen bg-gradient-to-b from-blue-900 to-blue-600 backdrop-blur-[100px] z-50 transform transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "opacity-100 translate-x-0 visible"
                    : "opacity-0 -translate-x-full invisible"
                } lg:static lg:flex lg:bg-transparent lg:h-auto lg:w-auto lg:translate-x-0 lg:opacity-100 lg:visible`}
              >
                <button
                  onClick={closeMenu}
                  className="absolute top-4 right-4 text-gray-700 focus:outline-none lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0,0,256,256"
                    width="30px"
                    height="30px"
                    fillRule="nonzero"
                  >
                    <g
                      fill="#ffffff"
                      fillRule="nonzero"
                      stroke="none"
                      strokeWidth="1"
                      strokeLinecap="butt"
                      strokeLinejoin="miter"
                      strokeMiterlimit="10"
                      strokeDasharray=""
                      strokeDashoffset="0"
                      fontFamily="none"
                      fontWeight="none"
                      fontSize="none"
                      textAnchor="none"
                    >
                      <g transform="scale(5.12,5.12)">
                        <path d="M9.15625,6.3125l-2.84375,2.84375l15.84375,15.84375l-15.9375,15.96875l2.8125,2.8125l15.96875,-15.9375l15.9375,15.9375l2.84375,-2.84375l-15.9375,-15.9375l15.84375,-15.84375l-2.84375,-2.84375l-15.84375,15.84375z" />
                      </g>
                    </g>
                  </svg>
                </button>
                <ul className="flex flex-col justify-center items-center space-y-8 h-full lg:flex-row lg:space-y-0 lg:space-x-6">
                  {navList.map((link, ids) => (
                    <li key={ids}>
                      <Link
                        href={link.href}
                        prefetch={false}
                        className="text-[16px] text-white font-medium"
                        onClick={(e) => {
                          handleScroll(e, link.href);
                          closeMenu();
                        }}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
