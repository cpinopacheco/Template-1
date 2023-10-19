import Header from "./components/header/Header";
import HeaderBanner from "./components/header-banner/HeaderBanner";
import About from "./components/sections/about/About";
import BannerOne from "./components/banner-one/BannerOne";
import Catalogue from "./components/sections/catalogue/Catalogue";
import BannerTwo from "./components/banner-two/BannerTwo";
import Contact from "./components/sections/contact/Contact";

function App() {
  return (
    <>
      <Header />
      <HeaderBanner />
      <About />
      <BannerOne />
      <Catalogue />
      <BannerTwo />
      <Contact />
    </>
  );
}

export default App;
