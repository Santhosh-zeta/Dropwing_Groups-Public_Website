import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logoImage from "@/assets/DG_Logo_Dark (1).png";

const capabilities = [
  ["Digital Infrastructure", "Platform, cloud, reliability", "/capabilities/digital-infrastructure"],
  ["Synthetic Intelligence", "Governed AI and decision systems", "/capabilities/synthetic-intelligence"],
  ["Brand Sovereignty", "Identity and design systems", "/capabilities/brand-sovereignty"],
];
const ventures = [
  ["WebForge", "/ventures/webforge"], ["PerSyniX", "/ventures/persynix"], ["Design Studio", "/ventures/design-studio"], ["Elevix Pro", "/ventures/elevix-pro"], ["Grovia", "/ventures/grovia"],
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  useEffect(() => { const update = () => setScrolled(window.scrollY > 16); update(); window.addEventListener("scroll", update, { passive: true }); return () => window.removeEventListener("scroll", update); }, []);
  useEffect(() => { setMobileOpen(false); setOpen(false); }, [location.pathname]);
  const isWork = location.pathname.startsWith("/what-we-do") || location.pathname.startsWith("/capabilities") || location.pathname.startsWith("/ventures");
  const standardLink = "text-[11px] font-bold uppercase tracking-[.16em] transition-colors hover:text-white focus-visible:text-white";

  return <header className={cn("fixed inset-x-0 top-0 z-50 border-b transition-all", scrolled ? "border-white/10 bg-background/90 backdrop-blur-xl" : "border-transparent bg-background/65 backdrop-blur-md")}>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <nav className="site-container flex h-16 items-center justify-between" aria-label="Main navigation">
      <Link to="/" aria-label="Dropwing Groups home" className="flex items-center gap-3"><img src={logoImage} alt="" className="h-8 w-auto" /><span className="hidden text-xs font-bold uppercase tracking-[.16em] text-white sm:block">Dropwing Groups</span></Link>
      <div className="hidden h-full items-center gap-8 lg:flex">
        <div className="relative h-full" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
          <button aria-expanded={open} aria-haspopup="true" onClick={() => setOpen(!open)} className={cn(standardLink, "flex h-full items-center gap-1", isWork ? "text-white" : "text-muted-foreground")}>What we do <ChevronDown className={cn("size-3 transition-transform", open && "rotate-180")} /></button>
          {open && <div className="absolute left-1/2 top-[calc(100%-4px)] w-[760px] -translate-x-1/2 border border-white/10 bg-[#0b0d10]/95 p-2 shadow-2xl backdrop-blur-xl"><div className="grid grid-cols-[1.25fr_1fr_1fr] gap-px bg-white/10"><div className="bg-background p-6"><p className="eyebrow">What we do</p><h2 className="mt-4 text-xl font-bold text-white">Build the systems behind the business.</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Capabilities are the systems we build. Ventures are the specialist units that execute them.</p><Link to="/what-we-do" className="mt-6 inline-block text-xs font-bold uppercase tracking-[.14em] text-primary">Explore the operating model →</Link></div><MenuColumn title="Capabilities" items={capabilities.map(([name, subtitle, to]) => ({ name, subtitle, to }))} /><MenuColumn title="Ventures" items={ventures.map(([name, to]) => ({ name, to }))} /></div></div>}
        </div>
        <Link to="/what-we-think" className={cn(standardLink, location.pathname === "/what-we-think" ? "text-white" : "text-muted-foreground")}>What we think</Link>
        <Link to="/who-we-are" className={cn(standardLink, location.pathname === "/who-we-are" ? "text-white" : "text-muted-foreground")}>Who we are</Link>
      </div>
      <div className="flex items-center gap-2"><Link to="/contact" className="hidden min-h-10 items-center bg-primary px-4 text-[10px] font-bold uppercase tracking-[.14em] text-primary-foreground transition-colors hover:bg-primary/85 sm:inline-flex">Discuss your challenge</Link><button onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle navigation" aria-expanded={mobileOpen} className="grid size-10 place-items-center text-white lg:hidden">{mobileOpen ? <X /> : <Menu />}</button></div>
    </nav>
    {mobileOpen && <div className="border-t border-white/10 bg-background lg:hidden"><div className="site-container py-5"><div className="grid gap-1"><MobileLink to="/what-we-do" label="What we do" /><div className="border-l border-white/10 pl-4"><p className="mt-4 text-[10px] font-bold uppercase tracking-[.18em] text-primary">Capabilities</p>{capabilities.map(([name,,to]) => <MobileLink key={name} to={to} label={name} nested />)}<p className="mt-5 text-[10px] font-bold uppercase tracking-[.18em] text-primary">Ventures</p>{ventures.map(([name,to]) => <MobileLink key={name} to={to} label={name} nested />)}</div><MobileLink to="/what-we-think" label="What we think" /><MobileLink to="/who-we-are" label="Who we are" /><Link to="/contact" className="mt-5 inline-flex min-h-12 items-center justify-center bg-primary px-5 text-xs font-bold uppercase tracking-[.14em] text-primary-foreground">Discuss your challenge</Link></div></div></div>}
  </header>;
};

const MenuColumn = ({ title, items }: { title: string; items: { name: string; subtitle?: string; to: string }[] }) => <div className="bg-background p-5"><p className="text-[10px] font-bold uppercase tracking-[.18em] text-white/45">{title}</p><ul className="mt-4 space-y-1">{items.map(item => <li key={item.to}><Link to={item.to} className="block p-2 transition-colors hover:bg-white/[.05]"><span className="block text-sm font-semibold text-white">{item.name}</span>{item.subtitle && <span className="mt-1 block text-xs text-muted-foreground">{item.subtitle}</span>}</Link></li>)}</ul></div>;
const MobileLink = ({ to, label, nested = false }: { to: string; label: string; nested?: boolean }) => <Link to={to} className={cn("flex min-h-11 items-center border-b border-white/5 py-2 text-white", nested ? "text-sm text-muted-foreground" : "text-base font-semibold")}>{label}</Link>;

export default Navbar;
