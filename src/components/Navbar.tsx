import { Link, useLocation } from "react-router-dom";
import { Home, Info, Briefcase, Mail, Menu, X } from "lucide-react";
import * as React from "react";

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = React.useState(false);

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/about", label: "About Us", icon: Info },
    { path: "/portfolio", label: "Portfolio", icon: Briefcase },
    { path: "/contact", label: "Contact Us", icon: Mail },
  ];

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const handleClose = () => setOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Desktop / Tablet logo */}
          <Link to="/" className="hidden sm:block text-2xl font-bold text-primary">
            EliteStore
          </Link>

          {/* Mobile: show hamburger instead of short logo */}
          <div className="sm:hidden">
            <button aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((s) => !s)} className="p-2 rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link key={item.path} to={item.path} className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${isActive ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-secondary"}`}>
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile: hidden icons removed; menu handled by drawer below */}
        </div>
      </div>

      {/* Mobile full-width expanding menu */}
      <div className={`sm:hidden fixed left-0 top-16 w-full bg-background border-t border-border transform transition-all duration-200 ease-in-out z-40 ${open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"}`} aria-hidden={!open}>
        <div className="px-4 py-4">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link key={item.path} to={item.path} onClick={handleClose} className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-secondary"}`}>
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
