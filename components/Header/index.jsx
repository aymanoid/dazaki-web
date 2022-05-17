import { Popover } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/outline";
import MobileMenu from "components/Header/MobileMenu";
import SubMenu from "components/Header/SubMenu";
import BriefcaseSvg from "components/svgs/sub-menu/iconmonstr-briefcase-5.svg";
import MusicianSvg from "components/svgs/sub-menu/iconmonstr-party-17.svg";
import ActorSvg from "components/svgs/sub-menu/iconmonstr-party-21.svg";
import PhotoCameraSvg from "components/svgs/sub-menu/iconmonstr-photo-camera-5.svg";
import InfluencerSvg from "components/svgs/sub-menu/iconmonstr-user-29.svg";
import CreatorSvg from "components/svgs/sub-menu/iconmonstr-webcam-3.svg";
import Link from "next/link";

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
  { name: "Work", href: "/work" },
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
                <Link href="/">
                  <a>
                    <span className="sr-only">Workflow</span>
                    <svg
                      className="h-8 w-auto sm:h-10"
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
                </Link>
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
                  <Link key={e.name} href={e.href}>
                    <a className="text-base font-semibold text-white hover:text-rose-500">
                      {e.name}
                    </a>
                  </Link>
                ))}
              </Popover.Group>
              <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
                <Link href="/contact">
                  <a className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-rose-600 bg-origin-border px-4 py-2 text-base font-semibold text-white shadow-sm hover:from-purple-500 hover:to-rose-500">
                    Contact
                  </a>
                </Link>
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
