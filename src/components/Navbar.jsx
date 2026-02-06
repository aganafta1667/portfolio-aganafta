import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrollActive, setScrollActive] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setScrollActive(true);
      } else {
        setScrollActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`Navbar relative py-2 px-3 flex items-center justify-between transition-all ${
        scrollActive ? "bg-black/70 backdrop-blur-md" : "bg-zinc-800"
      }`} 
    >
      {/* Logo */}
      <div className="logo">
      <h1 className="text-3xl font-bold bg-white text-black p-1 lg:bg-transparent lg:text-white">Portfolio</h1>
      </div>

      {/* Hamburger (md ke bawah) */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="lg:hidden z-50 flex flex-col gap-1"
        aria-label="Toggle Menu"
      >
        <span
          className={`w-6 h-[2px] bg-white transition-all ${
            menuOpen && "rotate-45 translate-y-[6px]"
          }`}
        />
        <span
          className={`w-6 h-[2px] bg-white transition-all ${
            menuOpen && "opacity-0"
          }`}
        />
        <span
          className={`w-6 h-[2px] bg-white transition-all ${
            menuOpen && "-rotate-45 -translate-y-[6px]"
          }`}
        />
      </button>

      {/* Menu Dropdown */}
      <ul
        className={`
          menu flex flex-col lg:flex-row items-center
          gap-6 lg:gap-10
          absolute lg:static
          top-full lg:top-auto
          left-0 lg:left-auto
          w-full lg:w-auto
          bg-zinc-800/95 lg:bg-transparent
          backdrop-blur-md lg:backdrop-blur-0
          py-6 lg:py-0
          transition-all duration-300
          z-40
          ${
            menuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-5 opacity-0 pointer-events-none"
          }
          lg:translate-y-0 lg:opacity-100 lg:pointer-events-auto
        `}
      >
        <li>
          <a
            href="#beranda"
            onClick={() => setMenuOpen(false)}
            className="text-base lg:text-lg font-medium transition-all duration-200 hover:text-zinc-400"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#tentang"
            onClick={() => setMenuOpen(false)}
            className="text-base lg:text-lg font-medium transition-all duration-200 hover:text-zinc-400"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#education"
            onClick={() => setMenuOpen(false)}
            className="text-base lg:text-lg font-medium transition-all duration-200 hover:text-zinc-400"
          >
            Education
          </a>
        </li>
        <li>
          <a
            href="#experience"
            onClick={() => setMenuOpen(false)}
            className="text-base lg:text-lg font-medium transition-all duration-200 hover:text-zinc-400"
          >
            Experience
          </a>
        </li>
        <li>
          <a
            href="#achievments"
            onClick={() => setMenuOpen(false)}
            className="text-base lg:text-lg font-medium transition-all duration-200 hover:text-zinc-400"
          >
            Achievment
          </a>
        </li>
        <li>
          <a
            href="#kontak"
            onClick={() => setMenuOpen(false)}
            className="text-base lg:text-lg font-medium transition-all duration-200 hover:text-zinc-400"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;



// import {useState, useEffect} from "react";

// const navbar = () => {
//     const [active, setActive] = useState (false);

//     useEffect (() => {
//         const handleScroll = () => {
//             if (window.scrollY > 150) {
//                 setActive(true);
//             } else {
//                 setActive(false);
//             }
//         };
//         window.addEventListener ("scroll", handleScroll)
//         return () => {
//             window.removeEventListener("scroll", handleScroll)
//         }; 
//     }, []);

//   return (
//   <div className="Navbar py-7 px-3 flex items-center justify-between">
//     <div className="logo">
//         <h1 className="text-3xl font-bold bg-white text-black p-1 lg:bg-transparent lg:text-white">Portfolio</h1>
//     </div>
//     <ul className={`menu flex items-center sm:gap-10 gap-4 lg:static fixed left-1/2 -translate-x-1/2 lg:translate-x-0 lg:opacity-100 bg-white/30 backdrop-blur-md p-4 rounded-br-2xl rounded-bl-2xl lg:bg-transparent transition-all lg:transition-none z-40 ${active ? "top-0 opacity-100" : "-top-10 opacity-0"} `}>
//         <li><a href="#beranda" className="sm:text-lg text-base font-medium">Home</a></li>
//         <li><a href="#tentang" className="sm:text-lg text-base font-medium">About</a></li>
//         <li><a href="#" className="sm:text-lg text-base font-medium">Education</a></li>
//         <li><a href="#proyek" className="sm:text-lg text-base font-medium">Project</a></li>
//         <li><a href="#kontak" className="sm:text-lg text-base font-medium">Contact</a></li>
//     </ul> 
//   </div>
//   );
// }

// export default navbar