"use client";

import { useState, useEffect } from "react";
import texts from "@/components/utils/sections.json";

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
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div
            className=""
            style={{
              fontSize: "30px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>{texts["section-one"].title}</span>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <a
                  href="#hero"
                  className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
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
                  href="#sellers"
                  className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  {texts["section-one"].item3}
                </a>
              </li>
              <li>
                <a
                  href="#buyers"
                  className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  {texts["section-one"].item4}
                </a>
              </li>
              <li>
                <a
                  href="/#"
                  rel="noreferrer"
                  target="_blank"
                  className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  {texts["section-one"].item8}
                </a>
              </li>
              <li>
                <a
                  href="/#"
                  className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  {texts["section-one"].item5}
                </a>
              </li>
              <li>
                <a
                  href="/#"
                  className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  {texts["section-one"].item6}
                </a>
              </li>
              <li>
                <a
                  href="#contact-us"
                  className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  {texts["section-one"].item7}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
