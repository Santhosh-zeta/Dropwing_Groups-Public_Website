import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import logoImage from "@/assets/DG_Logo_Dark (1).png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [activeService, setActiveService] = useState(services[0]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
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
      className={cn(
        "fixed top-0 left-0 right-0 z-50 h-[60px] flex items-center border-b transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-white/5"
          : "bg-background/95 backdrop-blur-md border-transparent"
      )}
    >
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 relative flex items-center justify-center">
        {/* Logo Area - Mobile: Image */}
        <div className="absolute left-6 md:left-12 lg:left-20 flex items-center lg:hidden">
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src={logoImage}
              alt="Dropwing Groups"
              width="32"
              height="32"
              className="h-8 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity"
            />
          </Link>
        </div>

        {/* Logo Area - Desktop: Text */}
        <div className="absolute left-6 md:left-12 lg:left-20 hidden lg:flex items-center">
          <Link to="/" className="group">
            <span className="text-[15px] font-bold tracking-[0.2em] uppercase text-foreground transition-colors hover:text-primary">
              Dropwing Groups
            </span>
          </Link>
        </div>

        {/* Desktop Navigation - Institutional Style */}
        <div className="hidden lg:block">
          <NavigationMenu>
            <NavigationMenuList className="gap-8">

              {/* What We Do - Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className="bg-transparent text-[11px] font-bold tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground focus:text-foreground data-[state=open]:text-foreground data-[active]:bg-transparent hover:bg-transparent focus:bg-transparent h-auto py-2 px-0 group/item relative"
                >
                  What We Do
                  <span className={cn(
                    "absolute left-0 bottom-0 h-[1px] w-full bg-primary origin-right scale-x-0 transition-transform duration-300 ease-out group-hover/item:origin-left group-hover/item:scale-x-100",
                    location.pathname.startsWith("/what-we-do") || location.pathname.startsWith("/ventures") ? "scale-x-100 origin-left" : ""
                  )} />
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[800px] xl:w-[900px] grid-cols-[250px_1fr_1fr] bg-background/95 backdrop-blur-3xl border border-white/10 overflow-hidden rounded-md h-auto p-0">

                    {/* COL 1: THE CORE (Philosophy) */}
                    <div className="bg-white/5 p-8 border-r border-white/5 flex flex-col justify-between relative overflow-hidden h-full min-h-[350px]">
                      <div className="relative z-10">
                        <h4 className="text-xs font-bold tracking-[0.2em] text-primary uppercase mb-6">The Core</h4>
                        <span className="text-2xl font-bold text-white block mb-4">Dropwing Groups</span>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                          Architecting the autonomous operating systems of the future. We bridge strategy and execution.
                        </p>
                        <Link
                          to="/about"
                          className="inline-flex items-center text-xs font-bold tracking-[0.15em] text-white uppercase group/link"
                        >
                          About Us
                          <span className="ml-2 group-hover/link:translate-x-1 transition-transform">→</span>
                        </Link>
                      </div>
                      {/* Abstract Graphic */}
                      <div className="absolute bottom-[-100px] right-[-100px] w-64 h-64 bg-primary/10 blur-[60px] rounded-full pointer-events-none"></div>
                    </div>

                    {/* COL 2: CAPABILITIES (What we deliver) */}
                    <div className="p-6">
                      <h4 className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase mb-6 pl-3">Capabilities</h4>
                      <ul className="grid gap-2">
                        <li>
                          <NavigationMenuLink asChild>
                            <a href="/capabilities/digital-infrastructure" className="group flex flex-col p-3 hover:bg-white/5 rounded-md transition-colors">
                              <span className="text-sm font-bold text-white group-hover:text-primary transition-colors">Digital Infrastructure</span>
                              <span className="text-[11px] text-muted-foreground mt-1">High-performance sovereign cloud & compute.</span>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a href="/capabilities/synthetic-intelligence" className="group flex flex-col p-3 hover:bg-white/5 rounded-md transition-colors">
                              <span className="text-sm font-bold text-white group-hover:text-primary transition-colors">Synthetic Intelligence</span>
                              <span className="text-[11px] text-muted-foreground mt-1">Agentic workflows and cognitive architectures.</span>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a href="/capabilities/brand-sovereignty" className="group flex flex-col p-3 hover:bg-white/5 rounded-md transition-colors">
                              <span className="text-sm font-bold text-white group-hover:text-primary transition-colors">Brand Sovereignty</span>
                              <span className="text-[11px] text-muted-foreground mt-1">Strategic aesthetics and identity systems.</span>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </div>

                    {/* COL 3: VENTURES (Who delivers it) */}
                    <div className="p-6 bg-white/2 border-l border-white/5">
                      <h4 className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase mb-6 pl-3">Ventures</h4>
                      <ul className="grid gap-1">
                        {services.filter(s => s.id !== 'dropwing').map((venture) => (
                          <li key={venture.id}>
                            <NavigationMenuLink asChild>
                              <a href={venture.href} className="group flex items-center justify-between p-3 hover:bg-white/5 rounded-md transition-colors">
                                <div className="flex flex-col">
                                  <span className="text-sm font-bold text-white">{venture.title}</span>
                                  <span className="text-[10px] text-muted-foreground uppercase tracking-wider mt-0.5">{venture.category}</span>
                                </div>
                                <span className="text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">→</span>
                              </a>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Other Links - Standard with Violet Line Hover */}
              {navLinks.filter(link => link.name !== "What We Do" && link.name !== "Contact Us").map((link) => (
                <NavigationMenuItem key={link.path}>
                  <NavigationMenuLink asChild>
                    <Link
                      to={link.path}
                      className={cn(
                        "relative text-[11px] font-bold tracking-[0.2em] uppercase transition-colors duration-200 block py-2 group/item",
                        location.pathname === link.path
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {link.name}
                      <span className={cn(
                        "absolute left-0 bottom-0 h-[1px] w-full bg-primary origin-right scale-x-0 transition-transform duration-300 ease-out group-hover/item:origin-left group-hover/item:scale-x-100",
                        location.pathname === link.path ? "scale-x-100 origin-left" : ""
                      )} />
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right Side - Contact & Mobile Toggle */}
        <div className="absolute right-6 md:right-12 lg:right-20 flex items-center gap-4">
          {/* Desktop Contact CTA */}
          <div className="hidden lg:block">
            <Link to="/contact">
              <Button variant="outline" className="h-9 px-6 text-[10px] font-bold tracking-[0.2em] uppercase border-white/10 hover:bg-white/5 hover:text-primary transition-colors">
                Contact
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground hover:bg-white/5">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] border-l border-white/10 bg-background/95 backdrop-blur-xl p-0">
                <div className="flex flex-col h-full pt-10 px-6 gap-6 overflow-y-auto pb-10">
                  <div className="flex flex-col gap-4">
                    {/* Standard Links (except "What We Do") */}
                    {navLinks.filter(l => l.name !== "What We Do").map((link, index) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className="group flex items-center gap-4 py-2 border-b border-white/5"
                      >
                        <span className="text-xs font-mono text-muted-foreground/50">0{index + 1}</span>
                        <span className={cn(
                          "text-lg font-light tracking-widest uppercase transition-all duration-300",
                          location.pathname === link.path
                            ? "text-foreground pl-2"
                            : "text-muted-foreground group-hover:text-foreground group-hover:pl-2"
                        )}>
                          {link.name}
                        </span>
                      </Link>
                    ))}

                    {/* Enhanced "What We Do" Accordion */}
                    <Accordion type="single" collapsible className="w-full border-b border-white/5">
                      <AccordionItem value="what-we-do" className="border-none">
                        <AccordionTrigger className="hover:no-underline py-4">
                          <div className="flex items-center gap-4">
                            <span className="text-xs font-mono text-muted-foreground/50">04</span>
                            <span className="text-lg font-light tracking-widest uppercase text-foreground">What We Do</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="pl-8 flex flex-col gap-6 pt-2 pb-6">

                            {/* Mobile Capabilities */}
                            <div>
                              <h4 className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase mb-3">Capabilities</h4>
                              <div className="flex flex-col gap-3 border-l border-white/10 pl-4">
                                <Link to="/capabilities/digital-infrastructure" className="text-sm text-muted-foreground hover:text-white transition-colors">
                                  Digital Infrastructure
                                </Link>
                                <Link to="/capabilities/synthetic-intelligence" className="text-sm text-muted-foreground hover:text-white transition-colors">
                                  Synthetic Intelligence
                                </Link>
                                <Link to="/capabilities/brand-sovereignty" className="text-sm text-muted-foreground hover:text-white transition-colors">
                                  Brand Sovereignty
                                </Link>
                              </div>
                            </div>

                            {/* Mobile Ventures */}
                            <div>
                              <h4 className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase mb-3">Ventures</h4>
                              <div className="flex flex-col gap-3 border-l border-white/10 pl-4">
                                {services.filter(s => s.id !== 'dropwing').map((venture) => (
                                  <Link key={venture.id} to={venture.href} className="text-sm text-muted-foreground hover:text-white transition-colors block">
                                    {venture.title}
                                  </Link>
                                ))}
                              </div>
                            </div>

                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>

                  <div className="mt-auto">
                    <p className="text-[10px] text-muted-foreground/50 uppercase tracking-widest">
                      Dropwing Groups &copy; 2026
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

const services = [
  {
    id: "dropwing",
    category: "Strategic Foundation",
    title: "Dropwing Groups",
    description: "Building institutional grade operating models for the autonomous capabilities of tomorrow.",
    href: "/",
    visual: "bg-gradient-to-br from-primary/20 to-primary/5"
  },
  {
    id: "webforge",
    category: "Digital Infrastructure",
    title: "WebForge",
    description: "High-performance digital foundations and scalable engineering systems.",
    href: "/ventures/webforge",
    visual: "bg-blue-500/10"
  },
  {
    id: "design-studio",
    category: "Brand Sovereignty",
    title: "Design Studio",
    description: "Strategic aesthetics and immersive brand experiences.",
    href: "/ventures/design-studio",
    visual: "bg-purple-500/10"
  },
  {
    id: "persynix",
    category: "Synthetic Intelligence",
    title: "PerSyniX",
    description: "Autonomous agentic workflows and synthetic cognitive architectures.",
    href: "/ventures/persynix",
    visual: "bg-emerald-500/10"
  },
  {
    id: "grovia",
    category: "Agricultural Intelligence",
    title: "Grovia",
    description: "Next-generation sustainable systems and precision agriculture.",
    href: "/ventures/grovia",
    visual: "bg-green-500/10"
  },
  {
    id: "elevix",
    category: "Vertical Mobility",
    title: "Elevix Pro",
    description: "Advanced airspace management and urban air mobility infrastructure.",
    href: "/ventures/elevix-pro",
    visual: "bg-sky-500/10"
  },
];

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-foreground">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navbar;
