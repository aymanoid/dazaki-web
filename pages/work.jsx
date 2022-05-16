import Layout from "components/Layout";
import ToolsSection from "components/work/ToolsSection";
import { NextSeo } from "next-seo";

const Work = () => {
  return (
    <>
      <NextSeo
        title="Dazaki - Work"
        description="Dazaki provides custom techonology solutions for businesses and individuals."
      />
      <Layout>
        <ToolsSection />
      </Layout>
    </>
  );
};

export default Work;
