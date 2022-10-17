import Link from "next/link";

const LastSection = () => {
  return (
    <section className="bg-gradient-to-r from-purple-600 via-violet-600 to-rose-600">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-24 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
          <span className="block text-black">Done looking around?</span>
          <span className="block text-white">
            Hit us up now to get started!
          </span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Link href="/contact">
              <a className="inline-flex items-center justify-center rounded-xl border border-transparent bg-black px-5 py-3 text-base font-medium text-white hover:bg-white hover:text-black">
                Contact Us
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LastSection;
