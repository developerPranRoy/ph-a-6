import { useEffect, useState } from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";
import CartItem from "./CartItem";

import productsData from "../data/products.json";
import { toast } from "react-toastify";

const MainSection = ({ cart, setCart, cartHandle }) => {
  const [products, setProducts] = useState(productsData);
  // console.log(productsData);

  const handleChecOut = () => {
    setCart([])
    toast.info("Proceed to payment");
  }
  const [activeView, setActiveView] = useState("products");
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <section className="py-20 px-4" id="main-section">
      <div className="max-w-7xl mx-auto">


        <div className="text-center mb-10">
          <span className="section-label block mb-3">Explore</span>
          <h2 className="text-4xl font-extrabold font-syne mb-4">
            Everything You Need to{" "}
            <span className="text-blue-400">Launch</span>
          </h2>
          <p className="text-[#64748b] max-w-xl mx-auto">
            Pick the tools you need. Pay only for what you use.
          </p>
        </div>


        <div className="flex justify-center mb-10">
          <div className="flex gap-1 p-1 rounded-2xl bg-[#161d2e] border border-[#1e2d4a]">
            {[
              {
                key: "products", label: "Products", icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
                  </svg>
                )
              },
              {
                key: "cart", label: "Cart", icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                  </svg>
                )
              },
            ].map(({ key, label, icon }) => (
              <button
                key={key}
                onClick={() => setActiveView(key)}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer
                  ${activeView === key
                    ? "bg-blue-500 text-white shadow-lg shadow-blue-500/20"
                    : "text-[#64748b] hover:text-white"
                  }`}
              >
                {icon}
                {label}
                {key === "cart" && cart.length > 0 && (
                  <span className="bg-white/20 text-white text-xs px-1.5 py-0.5 rounded-full">
                    {cart.length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {activeView === "products" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((prd) => (
              <ProductCard
                key={prd.id}
                product={prd}
                cart={cart}
                onAdd={cartHandle}
              />
            ))}
          </div>
        )}

        {activeView === "cart" && (
          <div className="max-w-2xl mx-auto">
            {cart.length === 0 ? (
              <div className="text-center py-24 rounded-2xl border border-dashed border-[#1e2d4a] bg-[#161d2e]">
                <div className="text-6xl mb-4">🛒</div>
                <h3 className="text-xl font-bold text-white font-syne mb-2">
                  Your cart is empty
                </h3>
                <p className="text-[#64748b] mb-6">
                  Add some products to get started.
                </p>
                <button
                  onClick={() => setActiveView("products")}
                  className="px-5 py-2.5 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-semibold text-sm transition-colors cursor-pointer"
                >
                  Browse Products
                </button>
              </div>
            ) : (

              <div>

                <div className="flex flex-col gap-3 mb-6">
                  {cart.map((item) => (
                    <CartItem
                      key={item.id}
                      item={item}

                      onRemove={() => { setCart(previous => previous.filter(prd => prd.id != item.id)) }}
                    />
                  ))}
                </div>


                <div className="rounded-2xl border border-[#1e2d4a] bg-[#161d2e] p-5">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <p className="text-sm text-[#64748b]">
                        {cart.length} item{cart.length !== 1 ? "s" : ""} selected
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-[#64748b] mb-0.5">Total</p>
                      <p className="text-2xl font-extrabold text-white font-syne">
                        ${total}
                      </p>
                    </div>
                  </div>

                  <button onClick={handleChecOut} className="w-full py-3 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-semibold transition-all hover:scale-[1.01] shadow-lg shadow-blue-500/20 cursor-pointer">
                    Proceed to Checkout →
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default MainSection;
