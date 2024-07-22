import texts from "./utils/sections.json";

function Projects() {
  return (
    <main className="py-[100px] px-2 max-w-[1440px] mx-auto">
      {/* header */}
      <div className="max-w-3xl mx-auto text-center pb-10 md:pb-10 mt-14">
        <h1 className="text-5xl font-bold mb-7">
          {texts["section-eight"].title}
        </h1>
      </div>

      {/* Members */}
      <div className="flex flex-col lg:card lg:card-side bg-base-100 shadow-xl rounded-none">
        <figure className="w-200 h-auto ">
          <img
            content="cover"
            src={texts["section-eight"].picture}
            alt="projectImg"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            DESIGN AND DEVELOPMENT OF AN ENTERPRISE MOBILITY OPTIMIZATION
            PLATFORM
          </h2>
          <p>
            Presentamos nuestra plataforma de optimización de la movilidad
            empresarial (EMOP) de vanguardia. Diseñado y desarrollado para
            optimizar las complejidades de la movilidad empresarial, EMOP ofrece
            una solución integral para mejorar la eficiencia, la productividad y
            la seguridad de la fuerza laboral. Nuestra plataforma aprovecha
            algoritmos avanzados y análisis de datos para optimizar la
            asignación de recursos, minimizar el tiempo de inactividad y
            garantizar una conectividad perfecta en todos los dispositivos y
            redes. Con EMOP, las empresas pueden gestionar eficazmente su
            infraestructura móvil, reducir los costos operativos y mantenerse a
            la vanguardia en el dinámico panorama empresarial actual.
            Experimente el futuro de la movilidad empresarial con EMOP.
          </p>
          <div className="card-actions justify-end">
            <a href="https://corpmove.blog.jumpylife.com" target="blank_">
              <button type="button" className="btn btn-primary">
                Ir
              </button>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Projects;
