import "./styles/style.scss";
// import components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Advantages from "./components/Advantages";
import Product from "./components/Product";
import Gallery from "./components/Gallery";
import Partners from "./components/Partners";
import Feedback from "./components/Feedback";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Advantages />
      <Product />
      <Gallery />
      <Partners />
      <Feedback />
    </div>
  );
}

export default App;
