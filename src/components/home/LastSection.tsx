import { LinkButton } from "@/components/ui/Button";

const LastSection = () => {
  return (
    <section className="bg-gradient-to-r from-purple-600 via-violet-600 to-rose-600">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:flex lg:items-center lg:justify-between lg:px-8 lg:py-24">
        <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
          <span className="block text-black">Done looking around?</span>
          <span className="block text-white">
            Hit us up now to get started!
          </span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <LinkButton size="lg" variant="secondary" href="/contact">
            Contact Us
          </LinkButton>
        </div>
      </div>
    </section>
  );
};

export default LastSection;
