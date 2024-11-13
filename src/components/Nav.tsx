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
    <nav className="hidden xl:flex items-center gap-20">
      {links.map((item, index) => {
        return (
          <a
            className="text-[16px] hover:underline transition-all duration-150 uppercase text-[#45a06a]"
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
