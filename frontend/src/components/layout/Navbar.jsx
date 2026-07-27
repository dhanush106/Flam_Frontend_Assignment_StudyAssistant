import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed left-1/2 top-6 z-50 -translate-x-1/2">
      <div
        className="
          glass
          flex
          items-center
          gap-2
          rounded-full
          border
          border-white/70
          px-3
          py-2
          shadow-[0_20px_60px_rgba(15,23,42,.08)]
        "
      >
        <NavItem link="/" item="Home" />
<NavItem link="/generate" item="Generate" />
{/* <NavItem link="/results" item="Results" />
<NavItem link="/roadmap" item="Roadmap" />
<NavItem link="/flashcards" item="Flashcards" /> */}
<NavItem link="/about" item="About" />
      </div>
    </nav>
  );
};

const NavItem = ({ link, item }) => {
  const { pathname } = useLocation();

  const active = pathname === link;

  return (
    <Link
      to={link}
      className={`
        relative
        overflow-hidden
        rounded-full
        px-6
        py-3
        text-sm
        font-semibold
        transition-all
        duration-300

        ${
          active
            ? `
              bg-white/70
              text-slate-900
              shadow-lg
              border
              border-white/80
            `
            : `
              text-slate-600
              hover:bg-white/40
              hover:text-slate-900
            `
        }
      `}
    >
      {/* Reflection */}

      <span
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-full
          bg-gradient-to-b
          from-white/70
          via-transparent
          to-transparent
          opacity-60
        "
      />

      <span className="relative z-10">{item}</span>
    </Link>
  );
};

export default Navbar;