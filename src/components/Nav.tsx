const links = [
  {
    href: "/",
    name: "home",
  },
  {
    href: "/",
    name: "shop",
  },
  {
    href: "/",
    name: "features",
  },
  {
    href: "/",
    name: "contact",
  },
];

export default function Nav() {
  return (
    <nav className="flex items-center gap-20">
      {links.map((item, index) => {
        return (
          <a
            className="text-[16px] uppercase text-[#224F34]"
            href={item.href}
            key={index}
          >
            {item.name}
          </a>
        );
      })}
    </nav>
  );
}
