import Layout from "@/components/Layout";
import { NextSeo } from "next-seo";
import Link from "next/link";

const FourZeroFour = () => {
  return (
    <>
      <NextSeo
        title="Dazaki - 404 Not Found"
        description="Dazaki provides custom techonology solutions for businesses and individuals."
      />
      <Layout>
        <div>
          <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48">
            <p className="text-base font-semibold uppercase tracking-wide text-rose-400">
              404 error
            </p>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Page not found
            </h1>
            <p className="mt-2 text-lg font-semibold text-gray-300">
              Sorry, we couldn&apos;t find the page you&apos;re looking for.
            </p>
            <div className="mt-6">
              <Link href="/">
                <a className="inline-flex items-center rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black hover:outline hover:outline-rose-400">
                  Go back home
                </a>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default FourZeroFour;
