import Image from "next/image";
import man from "../public/images/man.png";
import texts from "@/components/utils/sections.json";

export default function Hero() {
  return (
    <section className="relative">
      {/* Illustration behind hero content */}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 md:flex items-center justify-center">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="text-left pb-12 md:pb-16">
            <h1
              className="text-4xl md:text-4.5xl font-extrabold leading-tighter tracking-tighter mb-4 "
              data-aos="zoom-y-out"
            >
              {texts["section-two"].title}{" "}
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="text-xl text-gray-600 mb-8 text-left"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                {texts["section-two"].body}
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-start "
                data-aos="zoom-y-out"
                data-aos-delay="100"
              ></div>
            </div>
          </div>
        </div>
        <div className="md:ml-10 mt-10 w-7xl">
          <Image
            className="md:max-w-none mx-auto"
            src={texts["section-two"].image}
            width={500}
            height="300"
            alt="Business man"
          />
        </div>
      </div>
    </section>
  );
}
