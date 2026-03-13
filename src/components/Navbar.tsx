import { useState, useEffect } from "react";
import { Menu, X, Home, MapPin, Globe, Info, Mail, Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else {
      setIsDark(true);
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  };

  const navLinks = [
    { label: "Home", icon: Home, to: "/" },
    { label: "Wedding Venues", icon: MapPin, to: "/venues" },
    { label: "Destinations", icon: Globe, to: "#" },
    { label: "About", icon: Info, to: "#" },
    { label: "Contact", icon: Mail, to: "#" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-3 bg-background/80 backdrop-blur-lg border-b border-border/30">
        <Link to="/">
          <img src="https://www.strwedding.com/images/strlogo.webp" alt="STR Wedding" className="h-8 w-auto" />
        </Link>

        <button
          onClick={() => setSidebarOpen(true)}
          className="w-10 h-10 rounded-xl bg-secondary/50 hover:bg-secondary flex items-center justify-center transition-colors"
        >
          <Menu className="w-5 h-5 text-foreground" />
        </button>
      </nav>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm transition-opacity"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-[70] w-72 bg-card border-l border-border/50 flex flex-col transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-5 border-b border-border/30">
          <span className="font-display font-semibold text-lg text-foreground">Menu</span>
          <button
            onClick={() => setSidebarOpen(false)}
            className="w-9 h-9 rounded-xl bg-secondary/50 hover:bg-secondary flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4 text-foreground" />
          </button>
        </div>

        {/* Nav Links */}
        <div className="flex-1 p-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => setSidebarOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-body text-foreground/80 hover:text-foreground hover:bg-secondary/50 transition-all duration-200"
            >
              <link.icon className="w-4 h-4 text-primary" />
              {link.label}
            </Link>
          ))}
        </div>

        {/* Theme Toggle at Bottom */}
        <div className="p-4 border-t border-border/30">
          <button
            onClick={toggleTheme}
            className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
          >
            <div className="flex items-center gap-3">
              {isDark ? <Moon className="w-4 h-4 text-primary" /> : <Sun className="w-4 h-4 text-primary" />}
              <span className="text-sm font-body text-foreground/80">{isDark ? "Dark Mode" : "Light Mode"}</span>
            </div>
            <div className={`w-10 h-5 rounded-full relative transition-colors ${isDark ? "bg-primary/30" : "bg-primary/30"}`}>
              <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-primary transition-all ${isDark ? "right-0.5" : "left-0.5"}`} />
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
