import Layout from "@/components/Layout";
import ConstrBanner from "@/components/home/ConstrBanner";
import FirstSection from "@/components/home/FirstSection";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import { NextSeo } from "next-seo";

const Home = () => {
  return (
    <>
      <NextSeo
        title="Dazaki - Digital Solutions"
        description="Dazaki provides custom techonology solutions for businesses and individuals."
      />
      <Layout>
        <HeroSection />
        <div className="bg-gradient-to-r from-purple-600 via-violet-600 to-rose-600 p-1" />
        <FirstSection />
        <div className="bg-gradient-to-r from-purple-600 via-violet-600 to-rose-600 p-1" />
        <ServicesSection />
        <div className="bg-gradient-to-r from-purple-600 via-violet-600 to-rose-600 p-1" />
        <FeaturesSection />
        <ConstrBanner />
      </Layout>
    </>
  );
};

export default Home;
