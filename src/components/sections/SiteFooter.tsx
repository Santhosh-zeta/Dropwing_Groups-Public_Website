import React, { useRef } from "react";
import { Link } from "react-router-dom";
import logoImage from "@/assets/DG_Logo_Dark (1).png";
import { Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react";

const SiteFooter = () => {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!footerRef.current) return;
    const rect = footerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    footerRef.current.style.setProperty("--mouse-x", `${x}px`);
    footerRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <footer
      ref={footerRef}
      onMouseMove={handleMouseMove}
      className="relative bg-black text-gray-500 overflow-hidden border-t border-white/10 group/footer"
      style={
        {
          "--mouse-x": "-1000px",
          "--mouse-y": "-1000px",
        } as React.CSSProperties
      }
    >
      {/* 
        The Spotlight Effect: 
        A radial gradient that follows the mouse, revealing the bright borders and text underneath.
      */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 opacity-0 group-hover/footer:opacity-100"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.06), transparent 40%)`,
        }}
      />

      {/* 
         The "Scanner" Border Effect: 
         This highlights the borders around the grid cells near the cursor 
      */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover/footer:opacity-100"
        style={{
          background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(161, 0, 255, 0.1), transparent 40%)`,
        }}
      />


      <div className="relative z-10 w-full max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 border-l border-white/5">
          {/* Cell 1: Brand (Double Width) */}
          <div className="md:col-span-2 p-8 md:p-12 border-b border-r border-white/5 bg-black/20 backdrop-blur-sm relative group overflow-hidden">
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-500" />
            <div className="relative z-10 flex flex-col justify-between h-full min-h-[160px]">
              <Link to="/" className="block w-48 mb-8">
                <img
                  src={logoImage}
                  alt="Dropwing Groups"
                  className="w-full h-auto object-contain brightness-0 invert opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                />
              </Link>
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-gray-600 group-hover:text-gray-400 transition-colors">
                  Architecting Scalable
                </p>
                <p className="text-xs font-mono uppercase tracking-widest text-[#A100FF] opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  Operational Dominance
                </p>
              </div>
            </div>
          </div>

          {/* Ventures Cells (Single Width) */}
          <GridCell to="/ventures/webforge" label="WebForge" sub="Engineering" number="01" />
          <GridCell to="/ventures/design-studio" label="Design Studio" sub="Creative" number="02" />
          <GridCell to="/ventures/persynix" label="PerSyniX" sub="Intelligence" number="03" />
          <GridCell to="/ventures/grovia" label="Grovia" sub="Growth" number="04" />


          {/* Row 2 Start */}

          {/* Cell: Elevix Pro (taking the last spot of row 1 visually, or start of row 2 depending on grid) 
                 Actually let's flow naturally. 6 cols. 
                 Brand (2) + WebForge + Design + PerSyniX + Grovia = 6 cols. PERFECT.
             */}

          {/* Row 2:  Elevix Pro | About | Philosophy | Contact | Socials | Legal */}

          <GridCell to="/ventures/elevix-pro" label="Elevix Pro" sub="Mobility" number="05" />

          <GridCell to="/about" label="About Us" sub="Company" />
          <GridCell to="/philosophy" label="Philosophy" sub="Company" />
          <GridCell to="/contact" label="Contact" sub="Connect" />

          {/* Socials Cell */}
          <div className="p-8 border-b border-r border-white/5 hover:bg-white/5 transition-colors duration-300 flex flex-col justify-between min-h-[160px] group">
            <span className="text-[10px] font-bold text-gray-700 uppercase tracking-widest group-hover:text-white/40 transition-colors">Connect</span>
            <div className="flex gap-4">
              <SocialIcon icon={<Linkedin className="w-5 h-5" />} />
              <SocialIcon icon={<Twitter className="w-5 h-5" />} />
              <SocialIcon icon={<Github className="w-5 h-5" />} />
            </div>
          </div>

          {/* Legal / Copyright Cell */}
          <div className="p-8 border-b border-r border-white/5 hover:bg-white/5 transition-colors duration-300 flex flex-col justify-between min-h-[160px] group">
            <span className="text-[10px] font-bold text-gray-700 uppercase tracking-widest group-hover:text-white/40 transition-colors">Legal</span>
            <div className="flex flex-col gap-2">
              <Link to="/privacy" className="text-xs hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-xs hover:text-white transition-colors">Terms of Service</Link>
              <p className="text-[10px] text-gray-700 mt-2">© {currentYear} DG.</p>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile-only "System Active" strip for when the grid interaction isn't visible */}
      <div className="md:hidden border-t border-white/10 p-4 text-[10px] font-mono text-center text-gray-600 uppercase tracking-widest">
        System Active / Dropwing Groups
      </div>
    </footer>
  );
};

interface GridCellProps {
  to: string;
  label: string;
  sub: string;
  number?: string;
}

const GridCell = ({ to, label, sub, number }: GridCellProps) => (
  <Link to={to} className="block p-8 border-b border-r border-white/5 bg-transparent hover:bg-white/5 transition-all duration-300 relative group min-h-[160px] flex flex-col justify-between">
    <div className="flex justify-between items-start">
      <span className="text-[10px] font-bold text-gray-700 uppercase tracking-widest group-hover:text-white/40 transition-colors">
        {sub}
      </span>
      {number && (
        <span className="text-[10px] font-mono text-gray-800 group-hover:text-[hsl(var(--violet-accent))] transition-colors">
          /{number}
        </span>
      )}
    </div>

    <div className="space-y-2">
      <h3 className="text-xl text-gray-400 font-light group-hover:text-white transition-colors duration-300 flex items-center gap-2">
        {label}
        <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 text-[hsl(var(--violet-accent))]" />
      </h3>
      <div className="h-0.5 w-0 bg-[hsl(var(--violet-accent))] group-hover:w-8 transition-all duration-500 ease-out" />
    </div>
  </Link>
)

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
  <a href="#" className="flex items-center justify-center p-2 rounded-full border border-white/10 text-gray-500 hover:text-white hover:border-white/40 hover:bg-white/10 transition-all duration-300">
    {icon}
  </a>
)


export default SiteFooter;
