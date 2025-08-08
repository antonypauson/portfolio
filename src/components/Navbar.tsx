import { Link, useLocation } from "react-router-dom"
import moonIcon from "../assets/moon-icon.svg"; 
import sunIcon from "../assets/sun-icon.svg"; 

interface NavbarProps {
  setIconTrue: (value: boolean) => void; 
  iconTrue: boolean; 
}
export default function Navbar({setIconTrue, iconTrue} : NavbarProps) {
    
    const navContents = [
      { name: "Home", path: "/" },
      { name: "About", path: "/about-me"},
      { name: "Projects", path: "/projects" },
      { name: "Contact", path: "/contact" },
    ];

    const location = useLocation(); 

    const isHomePage = location.pathname === "/"; 

    return (
      <nav className="absolute top-0 inset-x-0 z-10 p-4 bg-transparent flex justify-between items-center mx-2 md:mx-5">
        <div className={!isHomePage ? "invisible" : ""}>
          <img className="w-8 md:w-12 cursor-pointer" src={iconTrue ? sunIcon : moonIcon} onClick={() => setIconTrue(!iconTrue)} />
        </div>
        <div className="flex gap-3 px-1.5 md:gap-5 md:px-5.5 md:text-2xl">
          {navContents.map((content, index) => (
            <Link key={index} to={content.path} className={location.pathname === content.path ? "font-extrabold underline-animate text-white scale-110" : "text-white hover:font-extrabold duration-250 hover:scale-110"}>
              {content.name}
            </Link>
          ))}
        </div>
      </nav>
    );
}