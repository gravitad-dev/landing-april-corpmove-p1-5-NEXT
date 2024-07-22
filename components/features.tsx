"use client";

import texts from "@/components/utils/sections.json";
import { IoMdPaper } from "react-icons/io";
import { HiOutlineLightBulb } from "react-icons/hi";
import { ImStatsBars } from "react-icons/im";
import { useState, useRef, useEffect } from "react";

export default function Features() {
  const [tab, setTab] = useState<number>(1);

  const tabs = useRef<HTMLDivElement>(null);

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement)
      tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <section className="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div className="pt-12 md:pt-20">
        <div className="text-left ">
          <h3 className="text-center pb-6">
            {texts["section-three"].subtitle}
          </h3>
          <h1 className="h2 mb-4  text-center">
            {texts["section-three"].title}
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-14">
            {texts["section-three"].body.map((card) => (
              <div
                key={card.id}
                className="max-w-sm bg-gray-200 border-transparent rounded-lg shadow hover:bg-white dark:bg-white-800 dark:border-white-700 dark:hover:bg-white-700"
              >
                <div className="p-6">
                  {/* <div className="mr-4">LOGO</div> */}
                  <div>
                    <div>
                      <h5 className="mb-2 text-2xl font-bold hover:text-[#e6ba0c] tracking-tight text-gray-900 dark:text-black ">
                        {card.title}
                      </h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
