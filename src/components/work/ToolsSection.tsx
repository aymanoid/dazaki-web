import AdobephotoshopIcon from "~icons/my-icons/adobephotoshop.svg";
import AdobepremierproIcon from "~icons/my-icons/adobepremierepro.svg";
import AmazonawsIcon from "~icons/my-icons/amazonaws.svg";
import CsharpIcon from "~icons/my-icons/csharp.svg";
import Css3Icon from "~icons/my-icons/css3.svg";
import DigitaloceanIcon from "~icons/my-icons/digitalocean.svg";
import DockerIcon from "~icons/my-icons/docker.svg";
import DotnetIcon from "~icons/my-icons/dotnet.svg";
import FirebaseIcon from "~icons/my-icons/firebase.svg";
import GitIcon from "~icons/my-icons/git.svg";
import GithubIcon from "~icons/my-icons/github.svg";
import HerokuIcon from "~icons/my-icons/heroku.svg";
import Html5Icon from "~icons/my-icons/html5.svg";
import JavascriptIcon from "~icons/my-icons/javascript.svg";
import LinodeIcon from "~icons/my-icons/linode.svg";
import LinuxIcon from "~icons/my-icons/linux.svg";
import MongodbIcon from "~icons/my-icons/mongodb.svg";
import MysqlIcon from "~icons/my-icons/mysql.svg";
import NextjsIcon from "~icons/my-icons/nextdotjs.svg";
import NodejsIcon from "~icons/my-icons/nodedotjs.svg";
import NpmIcon from "~icons/my-icons/npm.svg";
import OracleIcon from "~icons/my-icons/oracle.svg";
import PostgresqlIcon from "~icons/my-icons/postgresql.svg";
import PreactIcon from "~icons/my-icons/preact.svg";
import PythonIcon from "~icons/my-icons/python.svg";
import ReactIcon from "~icons/my-icons/react.svg";
import ShopifyIcon from "~icons/my-icons/shopify.svg";
import TailwindcssIcon from "~icons/my-icons/tailwindcss.svg";
import WoocommerceIcon from "~icons/my-icons/woocommerce.svg";

const servicesData = [
  {
    name: "JavaScript",
    icon: JavascriptIcon,
  },
  {
    name: "Node.js",
    icon: NodejsIcon,
  },
  {
    name: "React",
    icon: ReactIcon,
  },
  {
    name: "Next.js",
    icon: NextjsIcon,
  },
  {
    name: "React Native",
    icon: ReactIcon,
  },
  {
    name: "Preact",
    icon: PreactIcon,
  },
  {
    name: "Python",
    icon: PythonIcon,
  },
  {
    name: "C Sharp",
    icon: CsharpIcon,
  },
  {
    name: ".NET",
    icon: DotnetIcon,
  },
  {
    name: "HTML5",
    icon: Html5Icon,
  },
  {
    name: "CSS3",
    icon: Css3Icon,
  },
  {
    name: "Tailwind CSS",
    icon: TailwindcssIcon,
  },
  {
    name: "MongoDB",
    icon: MongodbIcon,
  },
  {
    name: "PostgreSQL",
    icon: PostgresqlIcon,
  },
  {
    name: "MySQL",
    icon: MysqlIcon,
  },
  {
    name: "Firebase",
    icon: FirebaseIcon,
  },
  {
    name: "npm",
    icon: NpmIcon,
  },
  {
    name: "Git",
    icon: GitIcon,
  },
  {
    name: "GitHub",
    icon: GithubIcon,
  },
  {
    name: "Docker",
    icon: DockerIcon,
  },
  {
    name: "Linux",
    icon: LinuxIcon,
  },
  {
    name: "Amazon AWS",
    icon: AmazonawsIcon,
  },
  {
    name: "Oracle",
    icon: OracleIcon,
  },
  {
    name: "Heroku",
    icon: HerokuIcon,
  },
  {
    name: "DigitalOcean",
    icon: DigitaloceanIcon,
  },
  {
    name: "Linode",
    icon: LinodeIcon,
  },
  {
    name: "Photoshop",
    icon: AdobephotoshopIcon,
  },
  {
    name: "Premiere Pro",
    icon: AdobepremierproIcon,
  },
  {
    name: "Shopify",
    icon: ShopifyIcon,
  },
  {
    name: "WooCommerce",
    icon: WoocommerceIcon,
  },
];

const ToolsSection = () => {
  return (
    <section className="relative bg-zinc-900 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <p className="mt-2 text-left text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Tools and platforms we utilize
        </p>
        <p className="mt-5 max-w-prose text-left text-xl text-gray-300"></p>
        <div className="mt-12">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {servicesData.map((e) => (
              <div key={e.name} className="pt-6">
                <div className="rounded-lg bg-gradient-to-tr from-purple-500 to-rose-700 p-1">
                  <div className="flow-root h-44 rounded-lg bg-zinc-900 px-4 py-8">
                    <e.icon
                      className="inline-flex h-16 w-16 items-center justify-center fill-white"
                      aria-hidden="true"
                    />
                    <h3 className="mt-5 text-center text-lg font-semibold tracking-tight text-gray-300">
                      {e.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
