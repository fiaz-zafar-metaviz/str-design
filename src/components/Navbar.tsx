import { Search, Heart, User } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-transparent">
      <Link to="/" className="text-xl font-display font-bold tracking-widest text-primary uppercase">
        STR Wedding
      </Link>

      <div className="hidden md:flex items-center gap-8">
        {["Home", "Wedding Venues", "Destinations", "About", "Contact"].map((item) => (
          <Link
            key={item}
            to="#"
            className="text-sm font-body text-foreground/80 hover:text-primary transition-colors duration-300 tracking-wide"
          >
            {item}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <button className="text-foreground/70 hover:text-primary transition-colors">
          <Search className="w-5 h-5" />
        </button>
        <button className="text-foreground/70 hover:text-primary transition-colors">
          <Heart className="w-5 h-5" />
        </button>
        <button className="text-foreground/70 hover:text-primary transition-colors">
          <User className="w-5 h-5" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
