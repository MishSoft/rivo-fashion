import { MdOutlineShoppingBag } from "react-icons/md";

interface CartProps {
  setIsActiveCart: () => void;
}

export default function Cart({ setIsActiveCart }: CartProps) {
  return (
    <div onClick={setIsActiveCart} className="relative cursor-pointer text-[#45a06a]">
      <MdOutlineShoppingBag size={30} />
      <div className="absolute rounded-3xl right-0 top-5 w-[10px] h-[10px] bg-[#43c678] text-white" />
    </div>
  );
}
