import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: "What We Do", path: "/what-we-do" },
    { name: "What We Think", path: "/what-we-think" },
    { name: "Who We Are", path: "/who-we-are" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled ? "bg-background/90 backdrop-blur-sm" : "bg-transparent"
        }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-12 lg:px-20">
        <Link to="/" className="text-sm font-semibold tracking-[0.2em] text-foreground uppercase">
          Dropwing Groups
        </Link>
        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link text-xs font-medium tracking-[0.15em] uppercase transition-colors duration-150 ${location.pathname === link.path ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};


export default Navbar;
