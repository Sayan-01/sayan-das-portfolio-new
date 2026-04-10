import { ArrowUpRight } from "lucide-react";

interface NavbarProps {
  isDark: boolean;
}

export default function Navbar({ isDark }: NavbarProps) {
  const navLinks = ["About", "Stack", "Projects", "Experience", "Services", "Contact"];

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-5 lg:px-16 flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center gap-4 group">
            <div className="h-14 w-14 rounded-2xl bg-foreground flex items-center justify-center text-background font-heading italic text-2xl shadow-xl group-hover:scale-110 transition-transform duration-500">
              SD
            </div>
          </div>

          {/* Center: Nav Pill (Desktop only) */}
          <div className="hidden lg:flex items-center liquid-glass-strong rounded-full p-2 gap-1 border border-foreground/7 shadow-2xl backdrop-blur-lg">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="px-5 py-2.5 text-[13px] font-bold text-foreground/80 uppercase tracking-widest font-body hover:text-foreground hover:bg-foreground/[0.03] rounded-full transition-all duration-300"
              >
                {link}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-foreground text-background rounded-full px-6 py-2.5 text-[13px] font-bold font-body flex items-center gap-2 ml-4 hover:opacity-90 transition-all shadow-lg active:scale-95"
            >
              Hire Me
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

      {/* Right: Spacer for symmetry or mobile menu trigger if needed */}
      <div className="w-12 lg:hidden"></div>
    </nav>
  );
}
