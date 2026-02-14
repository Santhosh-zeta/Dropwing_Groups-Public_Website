import { useState, useEffect } from "react";

const navItems = ["Capabilities", "Model", "Governance", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-12 lg:px-20">
        <span className="text-sm font-semibold tracking-[0.2em] text-foreground uppercase">
          Dropwing Groups
        </span>
        <div className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() =>
                scrollTo(item.toLowerCase())
              }
              className="nav-link text-xs font-medium tracking-[0.15em] text-muted-foreground uppercase transition-colors duration-150 hover:text-foreground"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
