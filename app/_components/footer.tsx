"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Footer = () => {
  const router = useRouter();
  const currentYear = new Date().getFullYear();
  const navList = [
    {
      name: "Home",
      href: "#home",
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
      name: "Community",
      href: "#community",
    },
    {
      name: "Executive",
      href: "#executive",
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

  return (
    <footer className="container py-16">
      <div
        className="relative bg-cover bg-center bg-no-repeat pt-16 pb-8 px-16  rounded-lg"
        style={{ backgroundImage: "url('assets/images/footer.png')" }}
      >
        <div className="flex items-center justify-between ">
          <Link className="block" href="/">
            <img
              src="assets/images/logo.webp"
              className="w-[160px] object-cover h-[40px]"
            />
          </Link>
          <ul className="block md:flex items-center gap-6 text-sm ">
            {navList.map((navItem) => (
              <li className="mb-2 md:mb-0 " key={navItem.name}>
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
        </div>

        <div
          className="h-[2px] w-full mt-8"
          style={{
            background: `linear-gradient(rgba(1, 28, 97, 0.1) 11.85%, rgba(41, 151, 255, 0.1) 91.9%), linear-gradient(118.36deg, rgba(255, 255, 255, 0.2) 58.48%, rgba(0, 0, 0, 0.2) 99.05%)`,
          }}
        />

        <div className="sm:flex sm:items-center sm:justify-center mt-8">
          <p className=" text-white text-center text-sm text-gray-500 sm:mt-0 sm:text-right">
            &copy;Copyright {currentYear}. All Rights Reserved by ClarityUI.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
