import AdobephotoshopSvg from "components/svgs/tools/adobephotoshop.svg";
import AdobepremierproSvg from "components/svgs/tools/adobepremierepro.svg";
import AmazonawsSvg from "components/svgs/tools/amazonaws.svg";
import CsharpSvg from "components/svgs/tools/csharp.svg";
import Css3Svg from "components/svgs/tools/css3.svg";
import DigitaloceanSvg from "components/svgs/tools/digitalocean.svg";
import DockerSvg from "components/svgs/tools/docker.svg";
import DotnetSvg from "components/svgs/tools/dotnet.svg";
import FirebaseSvg from "components/svgs/tools/firebase.svg";
import GitSvg from "components/svgs/tools/git.svg";
import GithubSvg from "components/svgs/tools/github.svg";
import HerokuSvg from "components/svgs/tools/heroku.svg";
import Html5Svg from "components/svgs/tools/html5.svg";
import JavascriptSvg from "components/svgs/tools/javascript.svg";
import LinodeSvg from "components/svgs/tools/linode.svg";
import LinuxSvg from "components/svgs/tools/linux.svg";
import MongodbSvg from "components/svgs/tools/mongodb.svg";
import MysqlSvg from "components/svgs/tools/mysql.svg";
import NextjsSvg from "components/svgs/tools/nextdotjs.svg";
import NodejsSvg from "components/svgs/tools/nodedotjs.svg";
import NpmSvg from "components/svgs/tools/npm.svg";
import OracleSvg from "components/svgs/tools/oracle.svg";
import PostgresqlSvg from "components/svgs/tools/postgresql.svg";
import PreactSvg from "components/svgs/tools/preact.svg";
import PythonSvg from "components/svgs/tools/python.svg";
import ReactSvg from "components/svgs/tools/react.svg";
import ShopifySvg from "components/svgs/tools/shopify.svg";
import TailwindcssSvg from "components/svgs/tools/tailwindcss.svg";
import WoocommerceSvg from "components/svgs/tools/woocommerce.svg";

const servicesData = [
  {
    name: "JavaScript",
    icon: JavascriptSvg,
  },
  {
    name: "Node.js",
    icon: NodejsSvg,
  },
  {
    name: "React",
    icon: ReactSvg,
  },
  {
    name: "Next.js",
    icon: NextjsSvg,
  },
  {
    name: "React Native",
    icon: ReactSvg,
  },
  {
    name: "Preact",
    icon: PreactSvg,
  },
  {
    name: "Python",
    icon: PythonSvg,
  },
  {
    name: "C Sharp",
    icon: CsharpSvg,
  },
  {
    name: ".NET",
    icon: DotnetSvg,
  },
  {
    name: "HTML5",
    icon: Html5Svg,
  },
  {
    name: "CSS3",
    icon: Css3Svg,
  },
  {
    name: "Tailwind CSS",
    icon: TailwindcssSvg,
  },
  {
    name: "MongoDB",
    icon: MongodbSvg,
  },
  {
    name: "PostgreSQL",
    icon: PostgresqlSvg,
  },
  {
    name: "MySQL",
    icon: MysqlSvg,
  },
  {
    name: "Firebase",
    icon: FirebaseSvg,
  },
  {
    name: "npm",
    icon: NpmSvg,
  },
  {
    name: "Git",
    icon: GitSvg,
  },
  {
    name: "GitHub",
    icon: GithubSvg,
  },
  {
    name: "Docker",
    icon: DockerSvg,
  },
  {
    name: "Linux",
    icon: LinuxSvg,
  },
  {
    name: "Amazon AWS",
    icon: AmazonawsSvg,
  },
  {
    name: "Oracle",
    icon: OracleSvg,
  },
  {
    name: "Heroku",
    icon: HerokuSvg,
  },
  {
    name: "DigitalOcean",
    icon: DigitaloceanSvg,
  },
  {
    name: "Linode",
    icon: LinodeSvg,
  },
  {
    name: "Photoshop",
    icon: AdobephotoshopSvg,
  },
  {
    name: "Premiere Pro",
    icon: AdobepremierproSvg,
  },
  {
    name: "Shopify",
    icon: ShopifySvg,
  },
  {
    name: "WooCommerce",
    icon: WoocommerceSvg,
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
