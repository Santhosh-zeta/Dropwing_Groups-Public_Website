import React, { useRef } from "react";
import { Link } from "react-router-dom";
import logoImage from "@/assets/DG_Logo_Dark (1).png";
import { ArrowUpRight, Facebook, Github, Instagram, Linkedin } from "lucide-react";

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
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7 border-l border-white/5">
          {/* Cell 1: Brand (Double Width) - SOVEREIGN EXECUTION PARTNER */}
          <div className="md:col-span-2 p-8 md:p-12 border-b border-r border-white/5 bg-black/20 backdrop-blur-sm relative group overflow-hidden">
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-500" />
            <div className="relative z-10 flex flex-col justify-between h-full min-h-[160px]">
              <Link to="/" className="block w-48 mb-8">
                <img
                  src={logoImage}
                  alt="Dropwing Groups"
                  className="w-full h-auto object-contain brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />
              </Link>
              <div>
                <p className="text-sm font-medium text-white tracking-wide mb-2">
                  Sovereign Execution Partner
                </p>
                <p className="text-xs font-mono uppercase tracking-widest text-gray-500 group-hover:text-gray-400 transition-colors">
                  Ownership of Execution, End to End
                </p>
              </div>
            </div>
          </div>

          {/* Ventures Cells (Row 1) - With Descriptors */}
          <GridCell
            to="/ventures/webforge"
            label="WebForge"
            sub="Systems & Infrastructure"
            desc="Full-stack systems engineering"
            number="01"
          />
          <GridCell
            to="/ventures/design-studio"
            label="Design Studio"
            sub="Identity & Experience"
            desc="Brand & product identity"
            number="02"
          />
          <GridCell
            to="/ventures/persynix"
            label="PerSyniX"
            sub="Data, AI & Decisioning"
            desc="AI & intelligence systems"
            number="03"
          />
          <GridCell
            to="/ventures/grovia"
            label="Grovia"
            sub="Market & Revenue Systems"
            desc="Growth & market execution"
            number="04"
          />
          <GridCell
            to="/ventures/elevix-pro"
            label="Elevix Pro"
            sub="Platforms & Access"
            desc="Training & capability enablement"
            number="05"
          />

          {/* Row 2: Institution | Institution | Institution | Connect | Governance */}

          <GridCell to="/about" label="About Us" sub="Institution" />
          <GridCell to="/philosophy" label="Philosophy" sub="Institution" />
          <GridCell to="/contact" label="Contact" sub="Institution" />

          {/* Socials Cell (Span 2) - Reduced Emphasis */}
          <div className="md:col-span-1 lg:col-span-2 p-8 border-b border-r border-white/5 hover:bg-white/5 transition-colors duration-300 flex flex-col justify-between min-h-[160px] group">
            <span className="text-[10px] font-bold text-gray-700 uppercase tracking-widest group-hover:text-white/40 transition-colors">Connect</span>
            <div className="flex gap-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
              <SocialIcon icon={<WhatsappIcon className="w-5 h-5" />} />
              <SocialIcon icon={<Linkedin className="w-5 h-5" />} />
              <SocialIcon icon={<Instagram className="w-5 h-5" />} />
              <SocialIcon icon={<Github className="w-5 h-5" />} />
              <SocialIcon icon={<Facebook className="w-5 h-5" />} />
            </div>
          </div>

          {/* Governance / Legal Cell (Span 2) - Added Trust Signals */}
          <div className="md:col-span-1 lg:col-span-2 p-8 border-b border-r border-white/5 hover:bg-white/5 transition-colors duration-300 flex flex-col justify-between min-h-[160px] group">
            <span className="text-[10px] font-bold text-gray-700 uppercase tracking-widest group-hover:text-white/40 transition-colors">Governance & Compliance</span>

            <div className="flex flex-col gap-4">
              {/* Governance Signal Block */}
              <div className="text-[10px] text-gray-500 font-mono leading-relaxed space-y-1">
                <p>Data Sovereignty</p>
                <p>Auditability & Reporting Standards</p>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 border-t border-white/5">
                <Link to="/privacy" className="text-xs text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="text-xs text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
                <span className="text-xs text-gray-600 cursor-default">Accessibility</span>
                <span className="text-xs text-gray-600 cursor-default">Security</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Very Bottom - Copyright & Status */}
      <div className="w-full max-w-[1600px] mx-auto px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-600 font-mono tracking-widest uppercase">
        <div className="flex items-center gap-4">
          <span>© {currentYear} Dropwing Groups</span>
          <span className="w-px h-3 bg-white/10 hidden md:block" />
          <span className="hidden md:block text-gray-500">Est. 2024</span>
        </div>

        
          <span className="text-gray-500">Chennai • Operational</span>
      </div>

      {/* Mobile-only fallback */}
      <div className="md:hidden border-t border-white/10 p-4 text-[10px] font-mono text-center text-gray-600 uppercase tracking-widest hidden">
        Chennai • Operational / Dropwing Groups
      </div>
    </footer>
  );
};

interface GridCellProps {
  to: string;
  label: string;
  sub: string;
  desc?: string;
  number?: string;
}

const GridCell = ({ to, label, sub, desc, number }: GridCellProps) => (
  <Link to={to} className="block p-8 border-b border-r border-white/5 bg-transparent hover:bg-white/5 transition-all duration-300 relative group min-h-[160px] flex flex-col justify-between">
    <div className="flex justify-between items-start">
      <span className="text-[10px] font-bold text-gray-700 uppercase tracking-widest group-hover:text-white/40 transition-colors max-w-[120px] leading-relaxed">
        {sub}
      </span>
      {number && (
        <span className="text-[10px] font-mono text-gray-800 group-hover:text-[hsl(var(--violet-accent))] transition-colors">
          /{number}
        </span>
      )}
    </div>

    <div className="space-y-1 mt-auto">
      <h3 className="text-lg md:text-xl text-gray-300 font-light group-hover:text-white transition-colors duration-300 flex items-center gap-2">
        {label}
        <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 text-[hsl(var(--violet-accent))]" />
      </h3>
      {desc && (
        <p className="text-xs text-gray-600 group-hover:text-gray-500 transition-colors duration-300 font-mono tracking-wide">
          {desc}
        </p>
      )}
      <div className="h-0.5 w-0 bg-[hsl(var(--violet-accent))] group-hover:w-8 transition-all duration-500 ease-out mt-3" />
    </div>
  </Link>
)

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
  <a href="#" className="flex items-center justify-center p-2 rounded-full border border-white/5 text-gray-500 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all duration-300">
    {icon}
  </a>
)

const WhatsappIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
)


export default SiteFooter;
