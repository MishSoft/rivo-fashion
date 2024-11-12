import Nav from "./Nav";

export default function Header() {
  return (
    <div className="p-5 flex items-center justify-around">
      <a href="#">
        <h1 className="text-[#224F34] font-crismon text-[30px] font-semibold">
          Rivo
        </h1>
      </a>

      {/* Navigation bar */}
      <Nav />
      {/* Login Cart bar */}
      <div>
        {/* Cart */}
        {/* Login */}
      </div>
    </div>
  );
}
