import { Link } from "react-router-dom"
import moonIcon from "../assets/moon-icon.svg"; 
import sunIcon from "../assets/sun-icon.svg"; 

export default function Navbar({setIconTrue, iconTrue}) {
    
    const navContents = [
      { name: "Home", path: "/" },
      { name: "About", path: "/about-me"},
      { name: "Projects", path: "/projects" },
      { name: "Contact", path: "/contact" },
    ];

    return (
      <nav className="absolute top-0 inset-x-0 z-10 p-4 bg-transparent flex justify-between items-center">
        <div>
          <img className="w-8 md:w-12" src={iconTrue ? sunIcon : moonIcon} onClick={() => setIconTrue(!iconTrue)} />
        </div>
        <div className="flex gap-3 px-1.5 md:gap-5 md:px-5.5 md:text-2xl">
          {navContents.map((content, index) => (
            <Link key={index} to={content.path}>
              {content.name}
            </Link>
          ))}
        </div>
      </nav>
    );
}