import { Popover } from "@headlessui/react";
import CreatorSvg from "components/svgs/sub-menu/iconmonstr-webcam-3.svg";
import InfluencerSvg from "components/svgs/sub-menu/iconmonstr-user-29.svg";
import MusicianSvg from "components/svgs/sub-menu/iconmonstr-party-17.svg";
import BriefcaseSvg from "components/svgs/sub-menu/iconmonstr-briefcase-5.svg";
import ActorSvg from "components/svgs/sub-menu/iconmonstr-party-21.svg";
import PhotoCameraSvg from "components/svgs/sub-menu/iconmonstr-photo-camera-5.svg";
import { MenuIcon } from "@heroicons/react/outline";
import WebsiteLogoSvg from "components/svgs/website_logo.svg";
import MobileMenu from "components/Header/MobileMenu";
import SubMenu from "components/Header/SubMenu";

const subMenuData = [
  {
    name: "Twitch & YouTube Creators",
    description: "",
    href: "#",
    icon: CreatorSvg,
  },
  {
    name: "Internet Celebrities & Influencers",
    description: "",
    href: "#",
    icon: InfluencerSvg,
  },
  {
    name: "Models & Actors",
    description: "",
    href: "#",
    icon: ActorSvg,
  },
  {
    name: "Businesses & Enterprises",
    description: "",
    href: "#",
    icon: BriefcaseSvg,
  },
  {
    name: "Photographers, Artists, & Designers",
    description: "",
    href: "#",
    icon: PhotoCameraSvg,
  },
  {
    name: "Musicians & Bands",
    description: "",
    href: "#",
    icon: MusicianSvg,
  },
];

const navLinksData = [
  { name: "About", href: "#" },
  { name: "Work", href: "#" },
  { name: "Blog", href: "#" },
];

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const Header = () => {
  return (
    <header>
      <Popover className="relative bg-black">
        {({ open }) => (
          <>
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <a href="#">
                  <span className="sr-only">Workflow</span>
                  <WebsiteLogoSvg className="h-8 w-auto fill-white sm:h-10" />
                </a>
              </div>
              <div className="-my-2 -mr-2 md:hidden">
                <Popover.Button
                  className={classNames(
                    open
                      ? "focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500"
                      : "",
                    "inline-flex items-center justify-center rounded-md bg-white p-2 text-black hover:bg-gray-100 hover:text-gray-500"
                  )}
                >
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <Popover.Group as="nav" className="hidden space-x-10 md:flex">
                <SubMenu subMenuData={subMenuData} />

                {navLinksData.map((e) => (
                  <a
                    key={e.name}
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

            <div className="bg-gradient-to-r from-purple-600 via-violet-600 to-rose-600 p-1" />
          </>
        )}
      </Popover>
    </header>
  );
};

export default Header;
