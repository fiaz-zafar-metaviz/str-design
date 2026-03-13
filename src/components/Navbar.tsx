import { useState, useEffect } from "react";
import { Menu, X, Heart, ChevronDown, Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";

const NAV_ITEMS = [
  { label: "About Us", to: "#" },
  { label: "Contact Us", to: "#" },
  { label: "My Favorites", to: "#", heart: true },
  { label: "Saved Searches", to: "#", heart: true },
];

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [affiliateOpen, setAffiliateOpen] = useState(false);
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

  return (
    <>
      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-1">
        {/* Left — Logo */}
        <div className="w-[51px] md:w-[85px]">
          <Link to="/">
            <img src="https://www.strwedding.com/images/strlogo.webp" alt="STR Wedding" className="w-full h-auto" />
          </Link>
        </div>

        {/* Center — CTA */}
        <button
          className="text-white px-2 py-1 text-[9px] sm:text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity leading-tight text-center max-w-[140px] sm:max-w-none rounded-md"
          style={{ background: "rgba(59,130,246,0.9)", border: "1px solid rgba(59,130,246,1)" }}
        >
          LIST YOUR STR WEDDING PROPERTY
        </button>

        {/* Right — Burger */}
        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setSidebarOpen(true)}
          className="w-8 h-8 flex flex-col items-center justify-center gap-[4px] border border-white rounded text-white hover:bg-white/10 transition-colors cursor-pointer"
        >
          <span className="block w-4 h-[1.5px] bg-white rounded" />
          <span className="block w-4 h-[1.5px] bg-white rounded" />
          <span className="block w-4 h-[1.5px] bg-white rounded" />
        </button>
      </nav>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className="fixed top-0 right-0 h-full z-[70] flex flex-col bg-card"
        style={{
          width: 280,
          transform: sidebarOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {/* Close button */}
        <div className="flex justify-end px-4 pt-2 pb-1">
          <button
            type="button"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close menu"
            className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-secondary transition-colors cursor-pointer"
          >
            <X className="w-5 h-5 text-foreground" />
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex-1 px-4 flex flex-col gap-1 overflow-y-auto">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="flex items-center gap-2 px-3 py-3 rounded-lg transition-colors text-sm font-medium text-foreground hover:bg-secondary"
              onClick={() => setSidebarOpen(false)}
            >
              <span className="flex items-center gap-1.5">
                {item.label}
                {item.heart && <Heart className="w-3.5 h-3.5 fill-current flex-shrink-0" />}
              </span>
            </Link>
          ))}

          {/* Affiliate dropdown */}
          <div>
            <button
              type="button"
              onClick={() => setAffiliateOpen((o) => !o)}
              className="w-full flex items-center justify-between px-3 py-3 rounded-lg transition-colors text-sm font-medium cursor-pointer text-foreground hover:bg-secondary"
            >
              <span>Affiliate</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${affiliateOpen ? "rotate-180" : ""}`} />
            </button>
            {affiliateOpen && (
              <div className="ml-3 mt-1 flex flex-col gap-0.5 border-l border-border pl-3">
                <Link to="#" onClick={() => setSidebarOpen(false)} className="py-2 px-2 rounded text-sm transition-colors text-foreground hover:bg-secondary">
                  Become an Affiliate
                </Link>
                <Link to="#" onClick={() => setSidebarOpen(false)} className="py-2 px-2 rounded text-sm transition-colors text-foreground hover:bg-secondary">
                  Affiliate Dashboard
                </Link>
              </div>
            )}
          </div>

          {/* Partner Login */}
          <Link
            to="#"
            onClick={() => setSidebarOpen(false)}
            className="mt-2 px-3 py-2.5 rounded-lg border border-foreground/30 text-sm font-semibold text-center transition-colors text-foreground hover:bg-secondary"
          >
            Partner Login
          </Link>
        </nav>

        {/* Theme toggle at bottom */}
        <div className="px-4 py-5 border-t border-border">
          <button
            onClick={toggleTheme}
            className="w-full flex items-center justify-between px-3 py-3 rounded-lg hover:bg-secondary transition-colors"
          >
            <div className="flex items-center gap-2">
              {isDark ? <Moon className="w-4 h-4 text-foreground" /> : <Sun className="w-4 h-4 text-foreground" />}
              <span className="text-sm font-medium text-foreground">{isDark ? "Dark Mode" : "Light Mode"}</span>
            </div>
            <div className="w-10 h-5 rounded-full relative" style={{ background: isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)" }}>
              <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-foreground transition-all ${isDark ? "right-0.5" : "left-0.5"}`} />
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
