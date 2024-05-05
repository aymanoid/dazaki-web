import ExclamationTriangleIcon from "~icons/heroicons/exclamation-triangle";
import XMarkIcon from "~icons/heroicons/x-mark";
import { useState } from "react";
import { cn } from "@/lib/utils";

const ConstrBanner = () => {
  const [closed, setClosed] = useState(false);

  return (
    <div
      className={cn(
        closed ? "hidden" : "",
        "fixed inset-x-0 bottom-0 pb-2 sm:pb-5",
      )}
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-purple-600 p-2 shadow-lg sm:p-3">
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex w-0 flex-1 items-center">
              <span className="flex rounded-lg bg-purple-800 p-2">
                <ExclamationTriangleIcon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </span>
              <p className="ml-3 truncate font-semibold text-white">
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
                <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConstrBanner;
