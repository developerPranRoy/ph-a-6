import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import MainSection from "./components/MainSection";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  const cartCount = cart.length;

  const cartHandle = (item) => {
    setCart(prev => {
      if (prev.find(singleItem => singleItem.id === item.id)) {
        toast.error(`${item.name} is already in your cart!`);
        return prev;
      }
      toast.success(`${item.name} added to cart!`); // <-- fixed typo
      return [...prev, item];
    });
  }


  const scrollToMain = () => {
    document.getElementById("main-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">

      <Navbar cartCount={cartCount} onCartClick={scrollToMain} />
      <Banner />
      <Stats />
      <MainSection cart={cart} setCart={setCart} cartHandle={cartHandle} />
      <Steps />
      <Pricing />
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="dark"
      />

    </div>
  );
};

export default App;
