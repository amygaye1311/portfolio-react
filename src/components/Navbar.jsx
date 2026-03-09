import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const linkClasses = (path) =>
    location.pathname === path
      ? "text-blue-400 font-semibold border-b-2 border-blue-400 pb-1"
      : "hover:text-blue-400 transition-colors";

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Mon Portfolio</h1>
      <ul className="flex gap-6">
        <li>
          <Link to="/" className={linkClasses("/")}>Accueil</Link>
        </li>
        <li>
          <Link to="/about" className={linkClasses("/about")}>À propos</Link>
        </li>
        <li>
          <Link to="/projects" className={linkClasses("/projects")}>Projets</Link>
        </li>
        <li>
          <Link to="/contact" className={linkClasses("/contact")}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;