import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";

const MobileMenu = ({ menuData, navLinksData }) => {
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
        <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="px-5 pt-5 pb-6">
            <div className="flex items-center justify-between">
              <div>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-purple-600-to-indigo-600.svg"
                  alt="Workflow"
                />
              </div>
              <div className="-mr-2">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid grid-cols-1 gap-7">
                {menuData.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div className="ml-4 text-base font-medium text-gray-900">
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
                  href={e.href}
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  {e.name}
                </a>
              ))}
            </div>
            <div className="mt-6">
              <a
                href="#"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700"
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
