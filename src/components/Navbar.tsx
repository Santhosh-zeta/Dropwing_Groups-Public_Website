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
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Paintbrush, Layers, Cpu, TrendingUp } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import logoImage from "@/assets/DG_Logo_Dark (1).png";

const studios = [
  {
    id: "design-studio",
    name: "Design Studio",
    fullName: "Dropwing Design Studio",
    category: "Creative & Branding",
    description: "Logos, social media creatives, banners, visiting cards & all visual design.",
    href: "/ventures/design-studio",
    icon: <Paintbrush className="w-4 h-4" />,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    id: "fenixa",
    name: "Fenixa Solutions",
    fullName: "Fenixa Solutions",
    category: "Software & Technology",
    description: "Web development, apps, product development, DevOps & cybersecurity.",
    href: "/ventures/fenixa",
    icon: <Layers className="w-4 h-4" />,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    id: "persynix",
    name: "Persynix",
    fullName: "Persynix",
    category: "AI & Automation",
    description: "n8n, Make, Zapier automations. AI, machine learning & intelligent workflows.",
    href: "/ventures/persynix",
    icon: <Cpu className="w-4 h-4" />,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    id: "grovia",
    name: "Grovia",
    fullName: "Grovia",
    category: "Digital Marketing",
    description: "Social media, Google Ads, SEO, video scripts & full marketing management.",
    href: "/ventures/grovia",
    icon: <TrendingUp className="w-4 h-4" />,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
  },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: "Our Studios", path: "/what-we-do" },
    { name: "Who We Are", path: "/who-we-are" },
    { name: "Blog", path: "/what-we-think" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 h-[60px] flex items-center border-b transition-all duration-300",
        scrolled
          ? "bg-background/90 backdrop-blur-lg border-white/8"
          : "bg-background/70 backdrop-blur-md border-transparent"
      )}
    >
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 relative flex items-center justify-center">

        {/* Logo — mobile */}
        <div className="absolute left-6 md:left-12 lg:left-20 flex items-center lg:hidden">
          <Link to="/" className="flex items-center gap-2 group" aria-label="Dropwing Groups">
            <img src={logoImage} alt="Dropwing Groups" width="32" height="32"
              className="h-7 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
          </Link>
        </div>

        {/* Logo — desktop */}
        <div className="absolute left-6 md:left-12 lg:left-20 hidden lg:flex items-center">
          <Link to="/" className="flex items-center gap-3 group" aria-label="Dropwing Groups Home">
            <img src={logoImage} alt="Dropwing Groups" width="28" height="28"
              className="h-7 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-200" />
            <span className="text-[13px] font-bold tracking-[0.18em] uppercase text-foreground/80 group-hover:text-foreground transition-colors duration-200">
              Dropwing Groups
            </span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:block">
          <NavigationMenu>
            <NavigationMenuList className="gap-8">

              {/* Studios dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-[11px] font-bold tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground focus:text-foreground data-[state=open]:text-foreground data-[active]:bg-transparent hover:bg-transparent focus:bg-transparent h-auto py-2 px-0 group/item relative">
                  Our Studios
                  <span className={cn(
                    "absolute left-0 bottom-0 h-[1px] w-full bg-primary origin-right scale-x-0 transition-transform duration-300 ease-out group-hover/item:origin-left group-hover/item:scale-x-100",
                    location.pathname.startsWith("/ventures") ? "scale-x-100 origin-left" : ""
                  )} />
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[700px] bg-background/98 backdrop-blur-3xl border border-white/10 rounded-lg overflow-hidden p-0">
                    {/* Header */}
                    <div className="px-6 pt-5 pb-3 border-b border-white/5">
                      <p className="text-[10px] font-bold tracking-[0.25em] text-muted-foreground uppercase">
                        Four Studios · One Group
                      </p>
                    </div>
                    {/* Studios grid */}
                    <div className="grid grid-cols-2 gap-px bg-white/5 p-px">
                      {studios.map((studio) => (
                        <NavigationMenuLink key={studio.id} asChild>
                          <Link
                            to={studio.href}
                            className="group flex gap-3 p-5 bg-background hover:bg-white/5 transition-colors duration-200"
                          >
                            <span className={cn("inline-flex items-center justify-center w-8 h-8 rounded-md flex-shrink-0 mt-0.5", studio.bg, studio.color)}>
                              {studio.icon}
                            </span>
                            <div>
                              <div className="flex items-center gap-2 mb-0.5">
                                <span className={cn("text-sm font-bold group-hover:underline", studio.color)}>{studio.name}</span>
                                <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-wider">{studio.category}</span>
                              </div>
                              <p className="text-[11px] text-muted-foreground leading-relaxed">{studio.description}</p>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                    {/* Footer link */}
                    <div className="px-5 py-3 border-t border-white/5 flex items-center justify-between">
                      <Link to="/who-we-are" className="text-[10px] font-bold tracking-[0.15em] text-muted-foreground hover:text-white uppercase transition-colors">
                        About Dropwing Groups →
                      </Link>
                      <Link to="/contact" className="text-[10px] font-bold tracking-[0.15em] text-primary hover:text-primary/80 uppercase transition-colors">
                        Start a Project →
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Other nav links */}
              {navLinks.filter(l => l.name !== "Our Studios").map((link) => (
                <NavigationMenuItem key={link.path}>
                  <NavigationMenuLink asChild>
                    <Link
                      to={link.path}
                      className={cn(
                        "relative text-[11px] font-bold tracking-[0.2em] uppercase transition-colors duration-200 block py-2 group/item",
                        location.pathname === link.path ? "text-foreground" : "text-muted-foreground hover:text-foreground"
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

        {/* Right — Contact CTA + Mobile toggle */}
        <div className="absolute right-6 md:right-12 lg:right-20 flex items-center gap-4">
          <div className="hidden lg:block">
            <Link to="/contact">
              <Button variant="outline" className="h-9 px-6 text-[10px] font-bold tracking-[0.2em] uppercase border-white/10 hover:bg-white/5 hover:border-primary/40 hover:text-primary transition-all">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground hover:bg-white/5">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] border-l border-white/10 bg-background/98 backdrop-blur-xl p-0">
                <div className="flex flex-col h-full pt-10 px-6 gap-6 overflow-y-auto pb-10">

                  {/* Brand */}
                  <div className="flex items-center gap-3 pb-4 border-b border-white/5">
                    <img src={logoImage} alt="Dropwing Groups" className="h-6 w-auto brightness-0 invert opacity-70" />
                    <span className="text-sm font-bold tracking-widest uppercase text-foreground/70">Dropwing Groups</span>
                  </div>

                  {/* Studios accordion */}
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="studios" className="border-none">
                      <AccordionTrigger className="hover:no-underline py-3">
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-mono text-muted-foreground/50">01</span>
                          <span className="text-base font-bold tracking-widest uppercase text-foreground">Our Studios</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="pl-8 flex flex-col gap-3 pt-2 pb-4">
                          {studios.map((studio) => (
                            <Link
                              key={studio.id}
                              to={studio.href}
                              className="flex items-center gap-2.5 py-1"
                            >
                              <span className={cn("flex-shrink-0", studio.color)}>{studio.icon}</span>
                              <div>
                                <span className={cn("text-sm font-bold block", studio.color)}>{studio.name}</span>
                                <span className="text-[10px] text-muted-foreground uppercase tracking-wider">{studio.category}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  {/* Other links */}
                  {[
                    { name: "Who We Are", path: "/who-we-are", num: "02" },
                    { name: "Blog", path: "/what-we-think", num: "03" },
                    { name: "Contact Us", path: "/contact", num: "04" },
                  ].map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="group flex items-center gap-4 py-2 border-b border-white/5"
                    >
                      <span className="text-xs font-mono text-muted-foreground/50">{link.num}</span>
                      <span className={cn(
                        "text-base font-bold tracking-widest uppercase transition-all duration-300",
                        location.pathname === link.path ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                      )}>
                        {link.name}
                      </span>
                    </Link>
                  ))}

                  <div className="mt-auto pt-4 border-t border-white/5">
                    <p className="text-[10px] text-muted-foreground/50 uppercase tracking-widest">
                      Dropwing Groups © {new Date().getFullYear()}
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

export default Navbar;
