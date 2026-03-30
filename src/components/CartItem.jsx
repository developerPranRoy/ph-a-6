import { toast } from "react-toastify";

const periodLabel = (p) =>
  ({ monthly: "/mo", yearly: "/yr", "one-time": " one-time" }[p] ?? "");


const CartItem = ({ item, onRemove }) => {
  console.log(item);
  const handleRemove = () => {
    onRemove(item.id)
    toast.warning(`${item.name} deleted from cart!`);

  }
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-[#1e2d4a] bg-[#161d2e] p-4 fade-up">

      <div className="w-12 h-12 rounded-xl bg-[#111827] border border-[#1e2d4a] flex items-center justify-center text-2xl shrink-0">
        {item.icon}
      </div>

      <div className="flex-1 min-w-0">
        <h4 className="font-bold text-white text-sm font-syne truncate">{item.name}</h4>
        <p className="text-xs text-[#64748b] mt-0.5">
          {item.price === 0 ? "Free" : `$${item.price}${periodLabel(item.period)}`}
        </p>
      </div>


      <button
        onClick={handleRemove}
        className="p-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 hover:border-red-400/40 transition-all shrink-0 cursor-pointer"
        title="Remove from cart"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export default CartItem;
