import { NextSeo } from "next-seo";
import Layout from "components/Layout";
import HeroSection from "components/home/HeroSection";
import FirstSection from "components/home/FirstSection";
import ServicesSection from "components/home/ServicesSection";
import ConstrBanner from "components/home/ConstrBanner";

const Home = () => {
  return (
    <>
      <NextSeo
        title="Dazaki - Custom Technology Solutions"
        description="Dazaki provides custom techonology solutions for businesses and individuals."
      />
      <Layout>
        <HeroSection />
        <div className="bg-gradient-to-r from-purple-600 via-violet-600 to-rose-600 p-1" />
        <FirstSection />
        <div className="bg-gradient-to-r from-purple-600 via-violet-600 to-rose-600 p-1" />
        <ServicesSection />
        <ConstrBanner />
      </Layout>
    </>
  );
};

export default Home;
