import React, { useRef } from "react";
import { Link } from "react-router-dom";
import logoImage from "@/assets/DG_Logo_Dark (1).png";
import designStudioLogo from "@/assets/logo/design-studio logo.png";
import fenixaLogo from "@/assets/logo/webforge logo.png";
import persynixLogo from "@/assets/logo/persynix logo.png";
import groviaLogo from "@/assets/logo/grovia logo.png";
import { ArrowUpRight, Facebook, Github, Instagram, Linkedin, Mail } from "lucide-react";

const studios = [
  {
    to: "/ventures/design-studio",
    label: "Design Studio",
    logo: designStudioLogo,
    sub: "Creative & Branding",
    desc: "Visual design & brand identity",
    number: "01",
    accent: "#a855f7",
  },
  {
    to: "/ventures/fenixa",
    label: "Fenixa Solutions",
    logo: fenixaLogo,
    sub: "Software & Technology",
    desc: "Web, apps & product development",
    number: "02",
    accent: "#3b82f6",
  },
  {
    to: "/ventures/persynix",
    label: "Persynix",
    logo: persynixLogo,
    sub: "AI & Automation",
    desc: "Workflows & AI intelligence",
    number: "03",
    accent: "#10b981",
  },
  {
    to: "/ventures/grovia",
    label: "Grovia",
    logo: groviaLogo,
    sub: "Digital Marketing",
    desc: "Ads, SEO & social media",
    number: "04",
    accent: "#f97316",
  },
];

const SiteFooter = () => {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!footerRef.current) return;
    const rect = footerRef.current.getBoundingClientRect();
    footerRef.current.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    footerRef.current.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <footer
      ref={footerRef}
      onMouseMove={handleMouseMove}
      className="relative bg-black text-gray-500 overflow-hidden border-t border-white/10 group/footer"
      style={{ "--mouse-x": "-1000px", "--mouse-y": "-1000px" } as React.CSSProperties}
    >
      {/* Mouse spotlight */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover/footer:opacity-100 transition-opacity duration-300"
        style={{ background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.04), transparent 40%)` }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover/footer:opacity-100"
        style={{ background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(124,58,237,0.08), transparent 40%)` }}
      />

      <div className="relative z-10 w-full">
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-[minmax(200px,2fr)_1fr_1fr_1fr_1fr] border-l border-white/5 overflow-hidden">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1 p-8 md:p-12 border-b border-r border-white/5 bg-black/20 relative group overflow-hidden">
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-500" />
            <div className="relative z-10 flex flex-col justify-between h-full min-h-[160px]">
              <Link to="/" className="block w-36 md:w-44 mb-6">
                <img src={logoImage} alt="Dropwing Groups" className="w-full h-auto object-contain brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>
              <div>
                <p className="text-xs md:text-sm font-bold text-white tracking-wide mb-1">
                  Four Studios. One Group.
                </p>
                <p className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-gray-600 group-hover:text-gray-400 transition-colors">
                  Design · Software · Automation · Marketing
                </p>
              </div>
            </div>
          </div>

          {/* Studio Cells */}
          {studios.map((studio) => (
            <Link
              key={studio.to}
              to={studio.to}
              className="block p-6 md:p-8 border-b border-r border-white/5 hover:bg-white/5 transition-all duration-300 relative group min-h-[140px] md:min-h-[160px] flex flex-col justify-between"
            >
              <div className="flex justify-between items-start">
                <span className="text-[9px] md:text-[10px] font-bold text-gray-700 uppercase tracking-widest group-hover:text-gray-500 transition-colors max-w-[120px] leading-relaxed truncate">
                  {studio.sub}
                </span>
                <span className="text-[10px] font-mono text-gray-800 group-hover:text-gray-500 transition-colors">/{studio.number}</span>
              </div>

              <div className="space-y-3 mt-auto">
                <div className="h-10 md:h-14 flex items-end mb-2">
                  <img src={studio.logo} alt={`${studio.label} logo`} className="h-full w-auto object-contain object-left-bottom brightness-0 invert opacity-50 group-hover:opacity-90 transition-opacity duration-500" height="56" />
                </div>
                <div>
                  <h3 className="text-sm md:text-base text-gray-300 font-semibold group-hover:text-white transition-colors flex items-center gap-2">
                    {studio.label}
                    <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" style={{ color: studio.accent }} />
                  </h3>
                  <p className="text-[10px] md:text-xs text-gray-600 group-hover:text-gray-500 transition-colors font-mono tracking-wide mt-0.5">{studio.desc}</p>
                </div>
                <div className="h-0.5 w-8 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out rounded-full" style={{ background: studio.accent }} />
              </div>
            </Link>
          ))}
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-[minmax(200px,2fr)_1fr_1fr_1fr_1fr] border-l border-white/5 overflow-hidden">
          {/* Company links */}
          <GridCell to="/who-we-are" label="Who We Are" sub="Company" />
          <GridCell to="/what-we-think" label="Blog" sub="Insights" />
          <GridCell to="/contact" label="Contact Us" sub="Connect" />

          {/* Social */}
          <div className="col-span-2 p-6 md:p-8 border-b border-r border-white/5 hover:bg-white/5 transition-colors duration-300 flex flex-col justify-between min-h-[120px] md:min-h-[140px] group">
            <span className="text-[10px] font-bold text-gray-700 uppercase tracking-widest group-hover:text-white/40 transition-colors">Connect With Us</span>
            <div className="flex flex-wrap gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
              <SocialIcon href="mailto:hello@dropwinggroups.com" label="Email" icon={<Mail className="w-4 h-4" />} />
              <SocialIcon href="https://wa.me/919363900110" label="WhatsApp" icon={<WhatsappIcon className="w-4 h-4" />} />
              <SocialIcon href="https://linkedin.com/company/dropwinggroups" label="LinkedIn" icon={<Linkedin className="w-4 h-4" />} />
              <SocialIcon href="https://instagram.com/dropwinggroups" label="Instagram" icon={<Instagram className="w-4 h-4" />} />
              <SocialIcon href="https://facebook.com/dropwinggroups" label="Facebook" icon={<Facebook className="w-4 h-4" />} />
            </div>
          </div>

          {/* Legal */}
          <div className="col-span-2 p-6 md:p-8 border-b border-r border-white/5 hover:bg-white/5 transition-colors duration-300 flex flex-col justify-between min-h-[120px] md:min-h-[140px] group">
            <span className="text-[10px] font-bold text-gray-700 uppercase tracking-widest group-hover:text-white/40 transition-colors">Legal</span>
            <div className="flex flex-wrap gap-x-5 gap-y-2 pt-2">
              <Link to="/privacy" className="text-[10px] md:text-xs text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-[10px] md:text-xs text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/accessibility" className="text-[10px] md:text-xs text-gray-400 hover:text-white transition-colors">Accessibility</Link>
              <Link to="/careers" className="text-[10px] md:text-xs text-gray-400 hover:text-white transition-colors">Careers</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="w-full px-8 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-[10px] text-gray-600 font-mono tracking-widest uppercase border-t border-white/5">
        <div className="flex items-center gap-4">
          <span>© {currentYear} Dropwing Groups</span>
          <span className="w-px h-3 bg-white/10 hidden md:block" />
          <span className="hidden md:block text-gray-700">Est. 2024 · Chennai</span>
        </div>
        <span className="text-gray-700">Design · Software · Automation · Marketing</span>
      </div>
    </footer>
  );
};

const GridCell = ({ to, label, sub }: { to: string; label: string; sub: string }) => (
  <Link to={to} className="block p-6 md:p-8 border-b border-r border-white/5 hover:bg-white/5 transition-colors duration-300 group min-h-[100px] md:min-h-[120px] flex flex-col justify-between">
    <span className="text-[9px] md:text-[10px] font-bold text-gray-700 uppercase tracking-widest group-hover:text-white/40 transition-colors">{sub}</span>
    <h3 className="text-sm md:text-base text-gray-300 font-semibold group-hover:text-white transition-colors flex items-center gap-2">
      {label}
      <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 text-primary" />
    </h3>
  </Link>
);

const SocialIcon = ({ icon, href, label }: { icon: React.ReactNode; href?: string; label: string }) => (
  <a
    href={href || "#"}
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center p-2 rounded-full border border-white/5 text-gray-500 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all duration-300"
  >
    {icon}
  </a>
);

const WhatsappIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export default SiteFooter;
