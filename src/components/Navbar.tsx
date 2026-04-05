import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const links = [
    { label: "Home", href: isHome ? "#home" : "/", isRoute: !isHome },
    { label: "About Us", href: "/about", isRoute: true },
    { label: "Services", href: "/services", isRoute: true },
    { label: "Contact Us", href: isHome ? "#contactus" : "/#contactus", isRoute: !isHome },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md shadow-sm">
      <div className="section-padding flex items-center justify-between py-4"> {/* Increased padding slightly */}
        <Link to="/" className="flex items-center gap-4">
          {/* SLIGHTLY LARGER LOGO */}
          <img src={logo} alt="C-Tons Solution" className="w-16 h-16 rounded-full object-contain" />
          <div>
            {/* LARGER NAME SIZE */}
            <h1 className="text-2xl font-heading font-bold text-foreground leading-tight">
              C-Tons Solution
            </h1>
            <p className="text-xs text-muted-foreground italic">Passion meets Purpose</p>
          </div>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) =>
            l.isRoute ? (
              <Link key={l.label} to={l.href} className="text-sm font-medium text-foreground hover:text-primary transition-colors underline-offset-4 hover:underline">
                {l.label}
              </Link>
            ) : (
              <a key={l.label} href={l.href} className="text-sm font-medium text-foreground hover:text-primary transition-colors underline-offset-4 hover:underline">
                {l.label}
              </a>
            )
          )}
        </div>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile Menu logic stays the same */}
      {open && (
        <div className="md:hidden bg-background border-t border-border px-6 pb-4 space-y-3">
          {links.map((l) =>
            l.isRoute ? (
              <Link key={l.label} to={l.href} className="block text-sm font-medium text-foreground py-2" onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ) : (
              <a key={l.label} href={l.href} className="block text-sm font-medium text-foreground py-2" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;