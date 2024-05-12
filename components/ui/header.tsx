"use client";

import { useState, useEffect } from "react";
import texts from "@/components/utils/sections.json";
import logo from "@/public/images/OptiLogo.png";
import Image from "next/image";

export default function Header() {
  const [top, setTop] = useState<boolean>(true);

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top ? "bg-white backdrop-blur-sm shadow-lg" : ""
      }`}
      style={{ paddingTop: "30px" }}
    >
      <div className="max-w-7xl mx-auto  ">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="">
            <a href="/">
              <Image src={logo} alt="logo" width={250} />
            </a>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <a
                  href="#hero"
                  className="font-medium text-gray-600 hover:text-[#0a9f00] px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  {texts["section-one"].item1}
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  {texts["section-one"].item2}
                </a>
              </li>

              <li>
                <a
                  href="https://optimoveinnovations.blog.jumpylife.com/"
                  rel="noreferrer"
                  target="_blank"
                  className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  {texts["section-one"].item3}
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  {texts["section-one"].item4}
                </a>
              </li>
              <li>
                <a
                  href="#contact-us"
                  className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  {texts["section-one"].item5}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
