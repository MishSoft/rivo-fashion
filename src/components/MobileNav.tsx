import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
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

interface MobileNavProps {
  setIsActive: () => void;
}

export default function MobileNav({ setIsActive }: MobileNavProps) {
  const navList = {
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.07,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const navItem = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    hidden: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
  };
  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={navList}
      className={`absolute shadow-md top-0 w-[300px] h-screen justify-center bg-[#C2EFD4] right-0  p-10 xl:hidden flex flex-col items-center gap-20`}
    >
      <div
        onClick={setIsActive}
        className="absolute transition-all duration-150 cursor-pointer top-5 right-5 text-[#45a06a]"
      >
        <IoClose size={30} />
      </div>
      {links.map((item, index) => {
        return (
          <a
            className="text-[16px] hover:underline transition-all duration-150 uppercase text-[#45a06a]"
            href={item.href}
            key={index}
          >
            <motion.li className="list-none" variants={navItem}>
              {item.name}
            </motion.li>
          </a>
        );
      })}
      <div className="w-full h-[2px] bg-[#45a06a]" />
      <a
        className="pr-[20px] pl-[20px] pt-[10px] pb-[10px] border-2 rounded-md border-[#45a06a] text-[#45a06a] font-semibold"
        href="#"
      >
        Login
      </a>
    </motion.nav>
  );
}
