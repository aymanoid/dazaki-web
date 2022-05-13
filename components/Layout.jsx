import Header from "components/Header";
import Footer from "components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-900">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
