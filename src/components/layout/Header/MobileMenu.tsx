import { Popover, Transition } from "@headlessui/react";
import XMarkIcon from "~icons/heroicons/x-mark";
import { Fragment, type JSX } from "react";

interface MobileMenuProps {
  subMenuData: {
    name: string;
    description: string;
    href: string;
    icon: (props: JSX.SVGAttributes<SVGSVGElement>) => JSX.Element;
  }[];
  navLinksData: {
    name: string;
    href: string;
  }[];
}

export default function MobileMenu({
  subMenuData,
  navLinksData,
}: MobileMenuProps) {
  return (
    <Transition
      as={Fragment}
      enter="duration-200 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <Popover.Panel
        focus
        className="absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition md:hidden"
      >
        <div className="divide-y-2 divide-rose-500 rounded-lg bg-black shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="px-5 pt-5 pb-6">
            <div className="flex items-center justify-between">
              <a href="/">
                <svg
                  className="h-8 w-auto"
                  width="554"
                  height="107"
                  viewBox="0 0 554 107"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M56.25 97H53.125L28.125 72H56.25C61.4167 72 65.8333 70.1667 69.5 66.5C73.1667 62.8333 75 58.4167 75 53.25C75 48.0833 73.1667 43.6667 69.5 40C65.8333 36.3333 61.4167 34.5 56.25 34.5H25V106.375L0 81.375V9.5H56.25C68.3333 9.5 78.6458 13.7708 87.1875 22.3125C95.7292 30.8542 100 41.1667 100 53.25C100 65.3333 95.7292 75.6458 87.1875 84.1875C78.6458 92.7292 68.3333 97 56.25 97ZM159.375 9.5C171.458 9.5 181.771 13.7708 190.312 22.3125C198.854 30.8542 203.125 41.1667 203.125 53.25V81.375L178.125 106.375V78.25H128.125V97H103.125V53.25C103.125 41.1667 107.396 30.8542 115.938 22.3125C124.479 13.7708 134.792 9.5 146.875 9.5H159.375ZM178.125 53.25C178.125 48.0833 176.292 43.6667 172.625 40C168.958 36.3333 164.542 34.5 159.375 34.5H146.875C141.708 34.5 137.292 36.3333 133.625 40C129.958 43.6667 128.125 48.0833 128.125 53.25H178.125ZM321.875 9.5L258.312 72H309.375V97H196.875L260.438 34.5H209.375V9.5H321.875ZM371.875 9.5C383.958 9.5 394.271 13.7708 402.812 22.3125C411.354 30.8542 415.625 41.1667 415.625 53.25V81.375L390.625 106.375V78.25H340.625V97H315.625V53.25C315.625 41.1667 319.896 30.8542 328.438 22.3125C336.979 13.7708 347.292 9.5 359.375 9.5H371.875ZM390.625 53.25C390.625 48.0833 388.792 43.6667 385.125 40C381.458 36.3333 377.042 34.5 371.875 34.5H359.375C354.208 34.5 349.792 36.3333 346.125 40C342.458 43.6667 340.625 48.0833 340.625 53.25H390.625ZM446.875 40.75H478.125C483.292 40.75 487.708 38.9167 491.375 35.25C495.042 31.5833 496.875 27.1667 496.875 22V9.5H521.875V22C521.875 34.0833 517.604 44.3958 509.062 52.9375L508.75 53.25L509.062 53.5625C517.604 62.1042 521.875 70.3333 521.875 78.25V81.375L496.875 106.375V84.5C496.875 79.3333 495.042 74.9167 491.375 71.25C487.708 67.5833 483.292 65.75 478.125 65.75H446.875V97H421.875V25.125L446.875 0.125V40.75ZM553.125 97H528.125V25.125L553.125 0.125V97Z"
                    fill="white"
                  />
                </svg>
              </a>
              <div className="-mr-2">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-black p-2 text-white hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500">
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid grid-cols-1 gap-7">
                {subMenuData.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="pointer-events-none -m-3 flex items-center rounded-lg p-3 hover:outline hover:outline-rose-500"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-rose-600 text-white">
                      <item.icon
                        className="h-6 w-6 fill-current"
                        aria-hidden="true"
                        fill="none"
                      />
                    </div>
                    <div className="ml-4 text-base font-semibold text-white">
                      {item.name}
                    </div>
                  </a>
                ))}
              </nav>
            </div>
          </div>
          <div className="py-6 px-5">
            <div className="grid grid-cols-2 gap-4">
              {navLinksData.map((e) => (
                <a
                  className="text-base font-semibold text-white hover:text-rose-500"
                  key={e.name}
                  href={e.href}
                >
                  {e.name}
                </a>
              ))}
            </div>
            <div className="mt-6">
              <a
                className="flex w-full items-center justify-center rounded-xl border border-transparent bg-gradient-to-r from-purple-600 to-rose-600 bg-origin-border px-4 py-2 text-base font-semibold text-white shadow-sm hover:from-purple-700 hover:to-rose-700"
                href="/contact"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  );
}
