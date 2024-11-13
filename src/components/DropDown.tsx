interface DropDown {
  isActive: () => void;
}

export default function DropDown({ isActive }: DropDown) {
  return (
    <div
      onClick={isActive}
      className="cursor-pointer w-[30px] h-[30px] flex flex-col justify-center gap-1"
    >
      <div className="w-full h-[5px] bg-[#45a06a] rounded-full" />
      <div className="w-full h-[5px] bg-[#45a06a] rounded-full" />
      <div className="w-full h-[5px] bg-[#45a06a] rounded-full" />
    </div>
  );
}
