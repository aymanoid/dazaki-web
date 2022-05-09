const servicesData = [
  {
    name: "Web Design and Development",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
  },
  {
    name: "Ecommerce Development",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
  },
  {
    name: "Digital Marketing",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
  },
  {
    name: "Brand Indentity",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
  },
  {
    name: "Mobile App Development",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
  },
  {
    name: "Custom Software Development",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
  },
];

const ServicesSection = () => {
  return (
    <div className="relative bg-zinc-900 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <p className="mt-2 text-left text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Some of the services we offer
        </p>
        <p className="mt-5 max-w-prose text-left text-xl text-gray-300">
          Phasellus lorem quam molestie id quisque diam aenean nulla in.
          Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend
          condimentum id viverra nulla.
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((e) => (
              <div key={e.name} className="pt-6">
                <div className="rounded-lg bg-gradient-to-tr from-purple-500 to-rose-700 p-1">
                  <div className="flow-root rounded-lg bg-zinc-900 px-6 pb-8">
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-white">
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
    </div>
  );
};

export default ServicesSection;
