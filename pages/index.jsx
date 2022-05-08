import Layout from "components/Layout";
import HeroSection from "components/home/HeroSection";
import FirstSection from "components/home/FirstSection";

const Home = () => {
  return (
    <Layout>
      <main>
        <HeroSection />
        <div className="bg-gradient-to-r from-purple-600 via-violet-600 to-rose-600 p-1" />
        <FirstSection />
      </main>
    </Layout>
  );
};

export default Home;
