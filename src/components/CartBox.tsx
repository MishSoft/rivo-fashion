import { IoClose } from "react-icons/io5";

interface CarBoxProps {
  setIsActiveCart: () => void;
}

export default function CartBox({ setIsActiveCart }: CarBoxProps) {
  return (
    <div className="relative w-[300px] xl:w-[400px] flex flex-col items-center pt-20 h-screen shadow-md bg-[#C2EFD4]">
      <div
        onClick={setIsActiveCart}
        className="absolute cursor-pointer text-[#45a06a] top-5 right-5"
      >
        <IoClose size={30} />
      </div>
      <h2 className="text-[#45a06a] text-[25px] font-semibold">
        Choosed Products
      </h2>
      <div className="flex flex-col flex-1 w-full items-center pt-20">
        Empty
      </div>
    </div>
  );
}
