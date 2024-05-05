import ExclamationTriangleIcon from "~icons/heroicons/exclamation-triangle";
import XMarkIcon from "~icons/heroicons/x-mark";
import { useEffect, useState } from "react";

const statusMessages = {
  "0": {
    short: "We will get back to you soon!",
    long: "We've received your message and will get back to you soon!",
  },
  "1": {
    short: "Name field is required.",
    long: "Name field is required.",
  },
  "2": {
    short: "Email field is required.",
    long: "Email field is required.",
  },
  "3": {
    short: "Subject field is required.",
    long: "Subject field is required.",
  },
  "4": {
    short: "Message field is required.",
    long: "Message field is required.",
  },
  "5": {
    short: "Name is 256 characters max.",
    long: "Name must be no more than 256 characters in length.",
  },
  "6": {
    short: "Email is 256 characters max.",
    long: "Email must be no more than 256 characters in length.",
  },
  "7": {
    short: "Subject is 256 characters max.",
    long: "Subject must be no more than 256 characters in length.",
  },
  "8": {
    short: "Message is 256 characters max.",
    long: "Message must be no more than 256 characters in length.",
  },
  "9": {
    short: "An error occurred while sending.",
    long: "An error occurred while sending your message, please try again.",
  },
} as const;

const SubmissionBanner = () => {
  const [isBannerOpen, setIsBannerOpen] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    short: string;
    long: string;
  } | null>(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const statusCode = searchParams.get("s");
    if (statusCode && Object.keys(statusMessages).includes(statusCode)) {
      setStatusMessage(
        statusMessages[statusCode as keyof typeof statusMessages],
      );
      setIsBannerOpen(true);
    }
  }, []);

  return isBannerOpen && statusMessage ? (
    <div className="fixed inset-x-0 bottom-0 pb-2 sm:pb-5">
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
                <span className="md:hidden">{statusMessage!.short}</span>
                <span className="hidden md:inline">{statusMessage!.long}</span>
              </p>
            </div>
            <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
              <button
                onClick={() => {
                  window.location.href = "/contact";
                  setIsBannerOpen(false);
                }}
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
  ) : null;
};

export default SubmissionBanner;
