import Header from "components/Header";
import Footer from "components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="bg-white">
      <Header />
      <main className="">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
