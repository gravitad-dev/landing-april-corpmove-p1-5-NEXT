import texts from "@/components/utils/sections.json";

export default function Services() {
  return (
    <main className="py-60">
      {/* header */}
      <div className="max-w-4xl mx-auto text-center pb-12 md:pb-20">
        <h3 className="text-start">{texts["section-four"].subtitle}</h3>
        <h1 className="text-5xl font-bold mb-3 text-start">
          {texts["section-four"].title}
        </h1>
      </div>

      {/* Houses */}
      <section className="sm:flex justify-center max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-4xl">
        {texts["section-four"].body.map((houses) => (
          <div
            key={houses.id}
            style={{
              flexDirection: "column",
            }}
          >
            <div
              className=""
              style={{
                height: "300px",
                width: "250px",
                // maxWidth: "400px",
                overflow: "hidden",
              }}
            >
              <img
                src={houses.picture}
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
                className="bg-[#E7F5E6] py-1 px-3 my-3"
                style={{ color: "#0B9F01" }}
              >
                {houses.button}
              </button>
            </div>
            <div className="text-start">
              <h1 className="font-bold mt-5 text-xl">{houses.name}</h1>
              <p className="">{houses.body}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
