import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const linkClasses = (path) =>
    location.pathname === path
      ? "text-blue-400 font-semibold border-b-2 border-blue-400 pb-1"
      : "hover:text-blue-400 transition-colors";

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Mon Portfolio</h1>

      {/* Bouton hamburger visible seulement sur mobile */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* Menu desktop */}
      <ul className="hidden md:flex gap-6">
        <li><Link to="/" className={linkClasses("/")}>Accueil</Link></li>
        <li><Link to="/about" className={linkClasses("/about")}>À propos</Link></li>
        <li><Link to="/projects" className={linkClasses("/projects")}>Projets</Link></li>
        <li><Link to="/contact" className={linkClasses("/contact")}>Contact</Link></li>
      </ul>

      {/* Menu mobile déroulant */}
      {open && (
        <ul className="absolute top-16 left-0 w-full bg-gray-800 flex flex-col items-center gap-4 py-4 md:hidden">
          <li><Link to="/" className={linkClasses("/")} onClick={() => setOpen(false)}>Accueil</Link></li>
          <li><Link to="/about" className={linkClasses("/about")} onClick={() => setOpen(false)}>À propos</Link></li>
          <li><Link to="/projects" className={linkClasses("/projects")} onClick={() => setOpen(false)}>Projets</Link></li>
          <li><Link to="/contact" className={linkClasses("/contact")} onClick={() => setOpen(false)}>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;