import { Link } from "react-router-dom"

export default function Navbar() {
    
    const navContents = [
      { name: "Home", path: "/" },
      { name: "About Me", path: "/about-me"},
      { name: "Projects", path: "/projects" },
      { name: "Contact", path: "/contact" },
    ];

    return (
      <div>
        {navContents.map((content, index) => (
          <Link key={index} to={content.path}>{content.name}</Link>
        ))}
      </div>
    );
}