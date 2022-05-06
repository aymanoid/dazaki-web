import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  MenuIcon,
  DesktopComputerIcon,
  UserGroupIcon,
  CameraIcon,
  BriefcaseIcon,
  ColorSwatchIcon,
  MicrophoneIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import WebsiteLogoSvg from "components/svgs/website_logo.svg";
import MobileMenu from "./MobileMenu";

const subMenuData = [
  {
    name: "Twitch & YouTube Creators",
    description: "",
    href: "#",
    icon: DesktopComputerIcon,
  },
  {
    name: "Internet Celebrities & Influencers",
    description: "",
    href: "#",
    icon: UserGroupIcon,
  },
  {
    name: "Models & Actors",
    description: "",
    href: "#",
    icon: CameraIcon,
  },
  {
    name: "Businesses & Enterprises",
    description: "",
    href: "#",
    icon: BriefcaseIcon,
  },
  {
    name: "Photographers, Artists, & Designers",
    description: "",
    href: "#",
    icon: ColorSwatchIcon,
  },
  {
    name: "Musicians & Bands",
    description: "",
    href: "#",
    icon: MicrophoneIcon,
  },
];

const navLinksData = [
  { name: "About", href: "#" },
  { name: "Work", href: "#" },
  { name: "Blog", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  return (
    <header>
      <Popover className="relative bg-black">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Workflow</span>
              <WebsiteLogoSvg className="h-8 w-auto fill-white sm:h-10" />
            </a>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-rose-500" : "text-white",
                      "focus:ring-offset-none group inline-flex items-center rounded-md bg-black text-base font-medium hover:text-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 focus:ring-offset-black"
                    )}
                  >
                    <span>Industries</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-rose-500" : "text-white",
                        "ml-2 h-5 w-5 group-hover:text-rose-500"
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
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                            >
                              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-rose-600 text-white sm:h-12 sm:w-12">
                                <item.icon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              </div>
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">
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
            {navLinksData.map((e) => (
              <a
                href={e.href}
                className="text-base font-medium text-white hover:text-rose-500"
              >
                {e.name}
              </a>
            ))}
          </Popover.Group>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <a
              href="#"
              className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-rose-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-rose-700"
            >
              Contact
            </a>
          </div>
        </div>

        <MobileMenu subMenuData={subMenuData} navLinksData={navLinksData} />

        <div className="bg-gradient-to-r from-purple-600 via-violet-600 to-rose-600 p-1"></div>
      </Popover>
    </header>
  );
};

export default Header;
