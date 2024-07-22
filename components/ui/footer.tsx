import "@/app/css/fonts.css";
import texts from "@/components/utils/sections.json";
import logo from "@/public/images/corpmoveLogo.png";
import Image from "next/image";
import SocialButtons from "./social";

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-10 gap-8 py-8 md:py-12 border-t border-gray-200">
          {/* 1st block */}
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-3">
            <div className="pb-3">
              <a href="/">
                <Image src={logo} alt="logo" width={210} />
              </a>
            </div>
            <ul className="text-sm">
              <li className="mb-2">
                <p className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">
                  Únete hoy a las innovaciones de CorpMove, reduzca los costos
                  operativos y manténgase a la vanguardia en el dinámico
                  panorama empresarial actual.
                </p>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2"></div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2 expressa">
              Sobre nosotros
            </h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a
                  href="https://corpmove.blog.jumpylife.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* 5th block */}
          <div className="flex justify-center lg:justify-end col-span-3  md:col-span-10 lg:col-span-3 ">
            {/* Social as */}
            <SocialButtons />
          </div>
        </div>

        {/* Bottom area */}
        <div
          className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200"
          style={{ display: "flex", justifyContent: "center" }}
        >
          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4">
            &copy; {texts["section-ten"].title}
          </div>
        </div>
      </div>
    </footer>
  );
}
