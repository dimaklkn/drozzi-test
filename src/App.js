import "./styles/style.scss";
// import components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Advantages from "./components/Advantages";
import Product from "./components/Product";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Advantages />
      <Product />
    </div>
  );
}

export default App;
