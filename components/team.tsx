import texts from "@/components/utils/sections.json";
import Image from "next/image";
import { FaPlayCircle } from "react-icons/fa";

export default function TeamMembers() {
  return (
    <section className="relative">
      <div
        className="absolute inset-0 top-1 md:mt-10 mb-14 lg:mt-0 bg-[#E7F5E6] pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6  flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-3xl mx-auto text-center lg:pb-12 md:pb-10">
          <div className="text-start">
            <h3 className="text-start">{texts["section-seven"].subtitle}</h3>
            <h1
              className="text-3xl font-bold mb-3 text-start pt-7 lg:pt-0"
              style={{ color: "#0a9f00" }}
            >
              {texts["section-seven"].title}
            </h1>
            <p>{texts["section-seven"].body}</p>

            <section className="sm:flex max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-4xl  mb-10">
              {texts["section-seven"].body2.map((houses) => (
                <div
                  key={houses.id}
                  style={{
                    flexDirection: "column",
                  }}
                >
                  <div className="text-start flex items-center mt-5 gap-4">
                    <p className="" style={{ color: "#0a9f00" }}>
                      {houses.role}
                    </p>
                  </div>
                </div>
              ))}
            </section>
          </div>
        </div>
        <div className="lg:py-6 md:py-0 md:w-1/2 px-6 sm:px-10 md:px-0">
          <div className="relative flex flex-col items-center   ">
            <div className="md:ml-10 lg:mt-20 w-7xl">
              <img
                className="md:max-w-none mx-auto"
                src={texts["section-seven"].picture}
                width={500}
                height="300"
                alt="Business man"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
