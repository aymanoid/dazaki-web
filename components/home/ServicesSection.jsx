import Image from "next/image";

const servicesData = [
  {
    title: "Web App Development",
    description:
      "Complete website development and design, from UX design to front-end coding to custom databases.",
    imageUrl: "/assets/services-01.png",
  },
  {
    title: "Custom Sotfware Development",
    description:
      "For uncommon problems, we provide custom software solutions, such as desktop apps, server-only utilities, and chat bots.",
    imageUrl: "/assets/services-02.png",
  },
  {
    title: "eCommerce Solutions",
    description:
      "Ecommerce store development and setup, including payment integration, and custom merch supplying.",
    imageUrl: "/assets/services-03.png",
  },
  {
    title: "Mobile App Development",
    description:
      "Fully-featured native mobile application development and design, for both Android and iOS.",
    imageUrl: "/assets/services-04.png",
  },
];

const ServicesSection = () => {
  return (
    <section className="relative bg-zinc-900 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="mt-2 text-left text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Some of the neat services we offer
        </h2>
        <p className="mt-5 max-w-prose text-left text-xl text-gray-300">
          From simple web fronts, to full-fledged apps and ecommerce projects,
          we offer a wide range of services to our individual and business
          clients.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-16 sm:grid-cols-2 ">
          {servicesData.map((e) => (
            <div key={e.title} className="space-y-4">
              <Image
                src={e.imageUrl}
                alt={`${e.title} icon`}
                width={1920}
                height={1080}
                quality={80}
                className="rounded-lg"
              />
              <div className="space-y-2">
                <h3 className="text-xl text-white font-semibold">{e.title}</h3>
                <p className="text-left text-gray-300">{e.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
