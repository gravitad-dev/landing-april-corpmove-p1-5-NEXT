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
            Introducing our cutting-edge Enterprise Mobility Optimization
            Platform (EMOP). Designed and developed to streamline the
            complexities of enterprise mobility, EMOP offers a comprehensive
            solution to enhance workforce efficiency, productivity, and
            security. Our platform leverages advanced algorithms and data
            analytics to optimize resource allocation, minimize downtime, and
            ensure seamless connectivity across all devices and networks. With
            EMOP, businesses can effectively manage their mobile infrastructure,
            reduce operational costs, and stay ahead in today's dynamic business
            landscape. Experience the future of enterprise mobility with EMOP.
          </p>
          <div className="card-actions justify-end">
            <button type="button" className="btn btn-primary">
              Go
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Projects;
