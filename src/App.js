import "./styles/style.scss";
// import components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Advantages from "./components/Advantages";
import Product from "./components/Product";
import Gallery from "./components/Gallery";
import Partners from "./components/Partners";
import Feedback from "./components/Feedback";
import Request from "./components/Request";
import FooterNav from "./components/FooterNav";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Advantages />
      <Product />
      <Gallery />
      <Partners />
      <Feedback />
      <Request />
      <FooterNav />
      <Footer />
    </>
  );
}

export default App;
