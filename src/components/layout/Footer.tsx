import FacebookIcon from "~icons/simple-icons/facebook";
import GithubIcon from "~icons/simple-icons/github";
import InstagramIcon from "~icons/simple-icons/instagram";
import TiktokIcon from "~icons/simple-icons/tiktok";
import TwitterIcon from "~icons/simple-icons/twitter";

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "Technologies", href: "/technologies" },
    { name: "Contact", href: "/contact" },
  ],
  social: [
    {
      name: "Twitter",
      href: "https://twitter.com/dazakiofficial",
      icon: <TwitterIcon className="h-6 w-6" aria-hidden="true" />,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/dazakiofficial",
      icon: <FacebookIcon className="h-6 w-6" aria-hidden="true" />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/dazakiofficial/",
      icon: <InstagramIcon className="h-6 w-6" aria-hidden="true" />,
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/aymanoid/",
      icon: <TiktokIcon className="h-6 w-6" aria-hidden="true" />,
    },
    {
      name: "GitHub",
      href: "https://github.com/dazakiofficial",
      icon: <GithubIcon className="h-6 w-6" aria-hidden="true" />,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="bg-gradient-to-r from-purple-600 via-violet-600 to-rose-600 p-1" />
      <div className="mx-auto max-w-7xl overflow-hidden px-4 py-12 sm:px-6 lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <a
                className="text-base text-white hover:text-rose-500"
                href={item.href}
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        {/* <div className="mt-8 flex justify-center space-x-6">
          {navigation.social.map((item) => (
            <a
              className="text-gray-50 hover:text-rose-500"
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">{item.name}</span>
              {item.icon}
            </a>
          ))}
        </div> */}
        <p className="mt-8 text-center text-base text-gray-200">
          © 2025 Dazaki. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
