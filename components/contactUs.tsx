import texts from "@/components/utils/sections.json";
import Image from "next/image";
import { FaPlayCircle } from "react-icons/fa";

export default function ContactUs() {
  return (
    <section className="relative">
      <div
        className="absolute inset-0 top-1 md:mb-24 lg:mt-0 bg-[#E7F5E6] pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6  flex flex-col md:flex-row items-center justify-between">
        <div className="py-6 md:py-0 md:w-1/2 px-6 sm:px-10 md:px-0">
          <div className="relative flex flex-col items-center   ">
            <div className="md:ml-10 mt-10 w-7xl">
              <Image
                className="md:max-w-none mx-auto mr-20"
                src={texts["section-five"].picture}
                width={500}
                height="300"
                alt="Business man"
              />
            </div>
          </div>
        </div>
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-10">
          <div className="text-start">
            <h3 className="text-start">{texts["section-five"].subtitle}</h3>
            <h1
              className="text-3xl font-bold mb-3 text-start"
              style={{ color: "#0a9f00" }}
            >
              {texts["section-five"].title}
            </h1>
            <p>{texts["section-five"].body}</p>

            <section className="sm:flex max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-4xl  mb-10">
              {texts["section-five"].items.map((houses) => (
                <div
                  key={houses.id}
                  style={{
                    flexDirection: "column",
                  }}
                >
                  <div className="text-start">
                    <h1 className="font-bold mt-5 text-xl">{houses.title}</h1>
                    <p className="">{houses.body}</p>
                  </div>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
