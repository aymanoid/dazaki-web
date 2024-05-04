import { Popover, Transition } from "@headlessui/react";
import ChevronDownIcon from "~icons/heroicons/chevron-down-solid";
import { Fragment, type JSX } from "react";
import { cn } from "@/lib/utils";

interface SubMenuProps {
  subMenuData: {
    name: string;
    description: string;
    href: string;
    icon: (props: JSX.SVGAttributes<SVGSVGElement>) => JSX.Element;
  }[];
}

export default function SubMenu({ subMenuData }: SubMenuProps) {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={cn(
              open
                ? "focus:ring-offset-none text-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 focus:ring-offset-black"
                : "text-white",
              "group inline-flex items-center rounded-md bg-black text-base font-semibold hover:text-rose-500",
            )}
          >
            <span>Industries</span>
            <ChevronDownIcon
              className={cn(
                open ? "text-rose-500" : "text-white",
                "ml-2 h-5 w-5 group-hover:text-rose-500",
              )}
              aria-hidden="true"
            />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform lg:left-1/2 lg:ml-0 lg:max-w-2xl lg:-translate-x-1/2">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                  {subMenuData.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="pointer-events-none -m-3 flex items-start rounded-lg p-3 hover:outline hover:outline-rose-500"
                    >
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-rose-600 text-white sm:h-12 sm:w-12">
                        <item.icon
                          className="h-6 w-6 fill-current"
                          aria-hidden="true"
                          fill="none"
                        />
                      </div>
                      <div className="ml-4">
                        <p className="text-base font-semibold text-gray-900">
                          {item.name}
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          {item.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
