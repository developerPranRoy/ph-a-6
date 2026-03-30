

const Navbar = ({ cartCount = 0, onCartClick }) => {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-[#1e2d4a]"
      style={{ background: "rgba(10,12,20,0.85)", backdropFilter: "blur(20px)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center text-white font-black text-sm font-syne">
            D
          </div>
          <span className="text-xl font-extrabold tracking-tight font-syne">
            Digi<span className="text-blue-400">Tools</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#64748b]">
          {["Products", "Pricing", "Docs", "Blog"].map((n) => (
            <a key={n} href="#" className="hover:text-white transition-colors">
              {n}
            </a>
          ))}
        </div>

     
        <div className="flex items-center gap-3">
       
          <button
            onClick={onCartClick}
            className="relative p-2.5 rounded-xl bg-[#161d2e] border border-[#1e2d4a] hover:border-blue-500/50 transition-all cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>

           
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-blue-500 text-white text-xs font-bold flex items-center justify-center pulse-glow">
                {cartCount}
              </span>
            )}
          </button>
 
          <button className="hidden sm:block px-4 py-2 rounded-xl bg-blue-500 hover:bg-blue-400 text-white text-sm font-semibold transition-colors cursor-pointer">
            Get Started
          </button>

          <button className="md:hidden p-2 rounded-xl bg-[#161d2e] border border-[#1e2d4a]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
