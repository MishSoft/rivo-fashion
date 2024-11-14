export default function Hero() {
  return (
    <div className=" p-5 xl:flex xl:flex-row xl:items-center items-center  flex flex-col-reverse  md:justify-around  bg-[#C2EFD4] ">
      {/* Text side */}
      <div className="flex flex-col  gap-[64px]">
        <div className="flex flex-col gap-[27px]">
          <h2 className="text-[50px] xl:text-left text-center max-w-[500px] font-semibold text-[#224F34]">
            Discover and Find Your Own Fashion!
          </h2>
          <p className="text-[#267D49] max-w-[500px] text-[20px]">
            Explore our curated collection of stylish clothing and accessories
            tailored to your unique taste.
          </p>
        </div>
        <button className="uppercase bg-[#224F34] text-white pt-[22px] pb-[22px] pl-[60px] pr-[60px]">
          explore now
        </button>
      </div>
      {/* Image side */}
      <div className="bg-[#6BC785] rounded-tl-[30%] rounded-bl-[10%] rounded-br-[30%] rounded-tr-[10%] overflow-hidden w-[470px] h-[517px]">
        <img className="w-full" src="/src/assets/hero-woman.svg" alt="" />
      </div>
    </div>
  );
}
