import { RiEmotionHappyLine } from "react-icons/ri";
import { LuClipboardCheck } from "react-icons/lu";
import { FcStatistics } from "react-icons/fc";
import { TfiStatsUp } from "react-icons/tfi";
import { LuUser2 } from "react-icons/lu";
import Image from "next/image";
import { IoIosPlayCircle } from "react-icons/io";
import texts from "@/components/utils/sections.json";

export default function Stats() {
  return (
    <main className="py-60">
      {/* header */}
      <div className="max-w-4xl mx-auto text-center flex items-center lg:text-end pb-12 md:pb-20 ">
        <h1 className="text-5xl font-bold mb-3 ">
          {texts["section-six"].title}
        </h1>
      </div>

      {/* building */}
      <section className="sm:flex  lg:justify-end max-w-sm mx-auto grid gap-6  md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-4xl">
        {texts["section-six"].body.map((building) => (
          <div
            key={building.id}
            style={{
              flexDirection: "column",
            }}
          >
            <div
              className="mx-auto"
              style={{
                height: "300px",
                width: "250px",
                // maxWidth: "400px",
                overflow: "hidden",
              }}
            >
              <img
                src={building.picture}
                alt="memberImg"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
            <div>
              <button
                type="button"
                className="bg-[#E7F5E6] py-1 px-3 my-3"
                style={{ color: "#0B9F01" }}
              >
                {building.button}
              </button>
            </div>
            <div className="text-center  lg:text-start">
              <h1 className="font-bold mt-5 text-xl mb-3">{building.name}</h1>
              <p className="pr-4">{building.body}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
