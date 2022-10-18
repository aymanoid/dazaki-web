import Layout from "@/components/Layout";
import ToolsSection from "@/components/work/ToolsSection";
import { NextSeo } from "next-seo";

const Technologies = () => {
  return (
    <>
      <NextSeo
        title="Dazaki - Technologies"
        description="Dazaki provides custom techonology solutions for businesses and individuals."
      />
      <Layout>
        <ToolsSection />
      </Layout>
    </>
  );
};

export default Technologies;
