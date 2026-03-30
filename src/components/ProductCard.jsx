
const periodLabel = (p) =>
  ({ monthly: "/mo", yearly: "/yr", "one-time": " one-time" }[p] ?? "");


const TagBadge = ({ type, label }) => (
  <span className={`tag-${type} text-xs font-semibold px-2.5 py-0.5 rounded-full`}>
    {label}
  </span>
);


const ProductCard = ({ cart, product, onAdd }) => {
  const isAdded = cart.some(item => item.id === product.id);
  return (
    <div className="card-hover relative rounded-2xl border border-[#1e2d4a] bg-[#161d2e] p-6 flex flex-col gap-4 overflow-hidden">

      <div
        className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-5 pointer-events-none"
        style={{ background: "#3b82f6", transform: "translate(30%,-30%)" }}
      />


      <div className="flex items-start justify-between">
        <div className="w-12 h-12 rounded-xl bg-[#111827] border border-[#1e2d4a] flex items-center justify-center text-2xl">
          {product.icon}
        </div>
        <TagBadge type={product.tagType} label={product.tag} />
      </div>


      <div>
        <h3 className="text-lg font-bold text-white mb-1 font-syne">{product.name}</h3>
        <p className="text-sm text-[#64748b] leading-relaxed">{product.description}</p>
      </div>


      <ul className="flex flex-col gap-1.5 flex-1">
        {product.features.map((f, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-[#64748b]">
            <svg
              className="w-4 h-4 text-blue-400 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            {f}
          </li>
        ))}
      </ul>


      <div className="pt-4 mt-auto border-t border-[#1e2d4a] flex items-center justify-between">
        <div>
          <span className="text-2xl font-extrabold font-syne text-white">
            {product.price === 0 ? "Free" : `$${product.price}`}
          </span>
          {product.price > 0 && (
            <span className="text-sm text-[#64748b] ml-1">
              {periodLabel(product.period)}
            </span>
          )}
        </div>

        <button
          onClick={() => !isAdded && onAdd(product)}
          className={`px-4 py-2 rounded-xl text-white text-sm font-semibold transition-all shadow-lg
            ${isAdded
              ? "bg-green-200 cursor-default text-red-500"
              : "bg-blue-500 hover:bg-blue-400 hover:scale-105 shadow-blue-500/20 cursor-pointer"
            }`}
          disabled={isAdded} // disable button if already added
        >
          {isAdded ? "Added to Cart" : "Buy Now"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
