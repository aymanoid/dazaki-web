/* This example requires Tailwind CSS v2.0+ */
import { ExclamationIcon, XIcon } from "@heroicons/react/outline";
import { useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ConstrBanner = () => {
  const [closed, setClosed] = useState(false);

  return (
    <div
      className={classNames(
        closed ? "hidden" : "",
        "fixed inset-x-0 bottom-0 pb-2 sm:pb-5"
      )}
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-purple-600 p-2 shadow-lg sm:p-3">
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex w-0 flex-1 items-center">
              <span className="flex rounded-lg bg-purple-800 p-2">
                <ExclamationIcon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </span>
              <p className="ml-3 truncate font-medium text-white">
                <span className="md:hidden">
                  Website is under construction.
                </span>
                <span className="hidden md:inline">
                  Website is under construction. Please come back later for the
                  complete experience!
                </span>
              </p>
            </div>
            <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
              <button
                onClick={() => setClosed(true)}
                type="button"
                className="-mr-1 flex rounded-md p-2 hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-white"
              >
                <span className="sr-only">Dismiss</span>
                <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConstrBanner;
