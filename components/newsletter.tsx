import texts from "@/components/utils/sections.json";

export default function Newsletter() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* CTA box */}
          <div
            className="relative bg-[#E7F5E6] mt-40 py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden"
            data-aos="zoom-y-out"
          >
            {/* Background illustration */}
            <div
              className="absolute right-0 bottom-0 pointer-events-none hidden lg:block"
              aria-hidden="true"
            ></div>

            <div className="relative flex flex-col lg:flex-row justify-between items-center">
              {/* CTA content */}
              <h3 className="h3 text-white mb-2 text-[#0a9f00]">
                {texts["section-nine"].title}
              </h3>
              <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0">
                <a
                  className="btn text-black bg-white hover:bg-black-700 shadow"
                  href="mailto:correo@example.com"
                  target="_blank"
                >
                  {texts["section-nine"].button}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
