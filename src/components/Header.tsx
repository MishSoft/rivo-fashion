import { useState } from "react";
import Cart from "./Cart";
import DropDown from "./DropDown";
import Login from "./Login";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isActiveMenu, setIsActiveMenu] = useState(false);

  const navContainer = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      x: 100,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="relative p-5 bg-[#C2EFD4] flex items-center justify-between xl:justify-around">
      <a href="#">
        <h1 className="text-[#45a06a] font-crismon text-[30px] font-semibold">
          Rivo
        </h1>
      </a>

      {/* Navigation bar */}
      <Nav />
      {/* Login Cart bar */}
      <div className="flex items-center gap-10">
        {/* Cart */}
        <Cart />
        {/* Login */}
        <Login />
        {/* Drop down navigation menu button */}
        <DropDown isActive={() => setIsActiveMenu(true)} />
      </div>

      {/* mobile nav */}
      <AnimatePresence>
        {isActiveMenu && (
          <motion.div
            className="absolute  right-0 top-0"
            initial="hidden"
            animate={isActiveMenu ? "visible" : "hidden"}
            exit="hidden"
            variants={navContainer}
          >
            <MobileNav setIsActive={() => setIsActiveMenu(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
