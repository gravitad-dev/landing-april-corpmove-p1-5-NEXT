/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)", // Esto aplica los encabezados a todas las rutas
        headers: [
          {
            key: "X-Frame-Options",
            value: "ALLOW-FROM https://jim-henry-landing.vercel.app/", // Reemplaza con el dominio que va a contener el iframe
          },
        ],
      },
    ];
  },
};

module.exports = {
  nextConfig,
  images: {
    domains: ["res.cloudinary.com"],
  },
};
