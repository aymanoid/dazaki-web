import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import WebsiteLogoSvg from "components/svgs/website_logo.svg";

const MobileMenu = ({ subMenuData, navLinksData }) => {
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
              <div>
                <WebsiteLogoSvg className="h-8 w-auto fill-white" />
              </div>
              <div className="-mr-2">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-black p-2 text-white hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500">
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid grid-cols-1 gap-7">
                {subMenuData.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-m-3 flex items-center rounded-lg p-3 hover:outline hover:outline-rose-500"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-rose-600 text-white">
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div className="ml-4 text-base font-medium text-white">
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
                  key={e.name}
                  href={e.href}
                  className="text-base font-medium text-white hover:text-rose-500"
                >
                  {e.name}
                </a>
              ))}
            </div>
            <div className="mt-6">
              <a
                href="#"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-rose-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-rose-700"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  );
};

export default MobileMenu;
