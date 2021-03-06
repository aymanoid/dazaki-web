const servicesData = [
  {
    name: "Web Development",
    description:
      "Complete website development and design, from UX design to front-end coding to custom databases.",
  },
  {
    name: "eCommerce Solutions",
    description:
      "Ecommerce store development and setup, including payment integration, and custom merch supplying.",
  },
  {
    name: "Social Media Marketing",
    description:
      "Creating and managing social media ad campaigns, A/B testing and optimizing compaigns based on analytics, and more.",
  },
  {
    name: "Digital Branding",
    description:
      "Brand indentity development, providing corporate or product name research, design elements, and brand guidelines.",
  },
  {
    name: "Mobile App Development",
    description:
      "Fully-featured native mobile application development and design, for both Android and iOS.",
  },
  {
    name: "Custom Software Development",
    description:
      "For uncommon problems, we provide custom software solutions, such as desktop apps, server-only utilities, and chat bots.",
  },
];

const ServicesSection = () => {
  return (
    <section className="relative bg-zinc-900 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <p className="mt-2 text-left text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Some of the neat services we offer
        </p>
        <p className="mt-5 max-w-prose text-left text-xl text-gray-300">
          From simple web fronts, to full-fledged apps and ecommerce projects,
          we offer a wide range of services to our individual and business
          clients.
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((e) => (
              <div key={e.name} className="pt-6">
                <div className="rounded-lg bg-gradient-to-tr from-purple-500 to-rose-700 p-1">
                  <div className="flow-root h-48 rounded-lg bg-zinc-900 px-6 pb-8">
                    <h3 className="mt-8 text-lg font-semibold tracking-tight text-white">
                      {e.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-300">
                      {e.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
