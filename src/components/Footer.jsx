import FacebookSvg from "@/components/svgs/social/facebook.svg";
import GithubSvg from "@/components/svgs/social/github.svg";
import InstagramSvg from "@/components/svgs/social/instagram.svg";
import TiktokSvg from "@/components/svgs/social/tiktok.svg";
import TwitterSvg from "@/components/svgs/social/twitter.svg";
import Link from "next/link";

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
      icon: (props) => (
        <TwitterSvg fill="currentColor" viewBox="0 0 24 24" {...props} />
      ),
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/dazakiofficial",
      icon: (props) => (
        <FacebookSvg fill="currentColor" viewBox="0 0 24 24" {...props} />
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/dazakiofficial/",
      icon: (props) => (
        <InstagramSvg fill="currentColor" viewBox="0 0 24 24" {...props} />
      ),
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/aymanoid/",
      icon: (props) => (
        <TiktokSvg fill="currentColor" viewBox="0 0 24 24" {...props} />
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com/dazakiofficial",
      icon: (props) => (
        <GithubSvg fill="currentColor" viewBox="0 0 24 24" {...props} />
      ),
    },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="bg-gradient-to-r from-purple-600 via-violet-600 to-rose-600 p-1" />
      <div className="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <Link href={item.href}>
                <a className="text-base text-white hover:text-rose-500">
                  {item.name}
                </a>
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          {navigation.social.map((item) => (
            <Link key={item.name} href={item.href} passHref>
              <a
                className="text-gray-50 hover:text-rose-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            </Link>
          ))}
        </div>
        <p className="mt-8 text-center text-base text-gray-200">
          &copy; 2022 Dazaki. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
