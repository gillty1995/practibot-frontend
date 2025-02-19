import React, { useState, useEffect, useRef } from "react";
import BurgerMenu from "../../public/burger-menu.svg";
import CloseMenu from "../../public/close-menu.png";

interface HeaderProps {
  setDisplaySection: React.Dispatch<
    React.SetStateAction<"chatbot" | "about" | "contact">
  >;
}

const Header: React.FC<HeaderProps> = ({ setDisplaySection }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleReload = () => setDisplaySection("chatbot");

  const handleClickOutside = (e: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 bg-opacity-70 text-white">
      <button
        onClick={handleReload}
        className="text-4xl font-iceberg bg-gradient-to-r from-blue-400 via-white to-gray-400 bg-clip-text text-transparent hover:underline focus:outline-none"
      >
        Practibot
      </button>

      <button
        onClick={toggleMenu}
        className="p-2 rounded-full text-white hover:opacity-70 transition-opacity duration-300 ease-in-out"
      >
        <img src={BurgerMenu} alt="Menu" className="w-8 h-8" />
      </button>

      <div
        ref={menuRef} // Attach ref to the menu div
        className={`z-50 fixed top-0 right-0 w-64 h-full bg-gray-800 text-white transition-transform transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ transition: "transform 0.3s ease-in-out" }}
      >
        <div className="p-4">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-full text-white hover:opacity-70 transition-opacity duration-300 ease-in-out"
          >
            <img src={CloseMenu} alt="Close Menu" className="w-8 h-8" />
          </button>
        </div>
        <div className="flex flex-col items-start space-y-4 mt-8">
          <button
            onClick={() => {
              setDisplaySection("about");
              setMenuOpen(false);
            }}
            className="text-xl text-white hover:text-blue-400 pl-6 px-4 py-2"
          >
            About
          </button>
          <button
            onClick={() => {
              setDisplaySection("contact");
              setMenuOpen(false);
            }}
            className="text-xl text-white hover:text-blue-400 pl-6 px-4 py-2"
          >
            Contact
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
