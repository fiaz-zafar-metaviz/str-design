import { Search, MapPin, Users, CalendarDays } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [location, setLocation] = useState("");
  const [guests, setGuests] = useState("");
  const [sticky, setSticky] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const stickyOffset = (formRef.current?.offsetTop ?? 0) + 520;
    function onScroll() { setSticky(window.scrollY >= stickyOffset); }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (location) params.set("location", location);
    if (guests) params.set("guests", guests);
    navigate(`/venues?${params.toString()}`);
  };

  const stickyClass = sticky
    ? "fixed top-0 left-0 right-0 z-50 shadow-[0_4px_20px_rgba(0,0,0,0.3)] px-4 py-2.5 bg-card rounded-b-xl border-b border-border"
    : "p-0";

  const fieldBg = sticky ? "bg-secondary" : "";
  const fieldStyle = sticky ? {} : { background: "rgba(255,255,255,0.15)" };
  const inputClass = sticky
    ? "bg-transparent text-foreground placeholder:text-muted-foreground text-sm w-full outline-none font-body"
    : "bg-transparent text-white placeholder:text-white/50 text-sm w-full outline-none font-body";
  const iconClass = sticky ? "w-4 h-4 text-muted-foreground shrink-0" : "w-4 h-4 text-white/60 shrink-0";
  const iconClassSm = sticky ? "w-3 h-3 text-muted-foreground shrink-0" : "w-3 h-3 text-white/60 shrink-0";
  const inputClassSm = sticky
    ? "bg-transparent text-foreground placeholder:text-muted-foreground text-xs w-full outline-none font-body"
    : "bg-transparent text-white placeholder:text-white/50 text-xs w-full outline-none font-body";

  return (
    <>
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src="https://devbilal.com/wp-content/uploads/wedding.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-8 text-white drop-shadow-lg">
            Find Your Dream
            <br />
            Wedding Venue
          </h1>

          {/* Search Bar */}
          <div ref={formRef} className="w-full max-w-4xl mx-auto">
            <form
              onSubmit={handleSearch}
              className={`max-w-6xl mx-auto transition-all ${stickyClass}`}
              style={!sticky ? { background: "rgba(0,0,0,0.2)", borderRadius: 10, padding: "20px 16px 28px" } : {}}
            >
              {/* Subtitle - hidden when sticky */}
              {!sticky && (
                <>
                  <h2 className="hidden md:block text-white text-center mb-3 leading-snug drop-shadow text-[25px]" style={{ fontWeight: 600 }}>
                    Search Short Term Rental Wedding Venues<br />
                    Changing The Game On How You Choose Your Wedding Venue!
                  </h2>
                  <h2 className="md:hidden text-white text-center mb-2 text-[18px] leading-snug drop-shadow" style={{ fontWeight: 600 }}>
                    Search Short Term Rental Wedding Venues<br />
                    Changing The Game On How You Choose Your Wedding Venue!
                  </h2>
                </>
              )}

              {/* Desktop: single row */}
              <div className="hidden md:grid md:grid-cols-4 gap-1.5" style={{ height: 46 }}>
                <div className={`flex items-center gap-2 px-3 rounded-lg ${fieldBg}`} style={fieldStyle}>
                  <MapPin className={iconClass} />
                  <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div className={`flex items-center gap-2 px-3 rounded-lg ${fieldBg}`} style={fieldStyle}>
                  <Users className={iconClass} />
                  <input
                    type="number"
                    placeholder="Attendees"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div className={`flex items-center gap-2 px-3 rounded-lg ${fieldBg}`} style={fieldStyle}>
                  <CalendarDays className={iconClass} />
                  <span className={sticky ? "text-sm text-muted-foreground font-body" : "text-sm text-white/50 font-body"}>Amenities</span>
                </div>
                <button
                  type="submit"
                  className={`h-full flex items-center justify-center gap-2 px-6 whitespace-nowrap rounded-lg font-semibold text-sm cursor-pointer transition-colors ${sticky ? 'bg-foreground text-background hover:opacity-90' : 'bg-black text-white border border-white hover:bg-zinc-900'}`}
                >
                  <Search className="w-4 h-4" />
                  Search Now
                </button>
              </div>

              {/* Mobile: 2x2 grid */}
              <div className="md:hidden grid grid-cols-2 gap-1.5" style={{ height: 42 }}>
                <div className={`flex items-center gap-2 px-3 rounded-lg ${fieldBg}`} style={fieldStyle}>
                  <MapPin className={iconClassSm} />
                  <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className={inputClassSm}
                  />
                </div>
                <div className={`flex items-center gap-2 px-3 rounded-lg ${fieldBg}`} style={fieldStyle}>
                  <Users className={iconClassSm} />
                  <input
                    type="number"
                    placeholder="Attendees"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className={inputClassSm}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-1 w-full flex md:hidden items-center justify-center gap-2 py-2 text-xs bg-black text-white border border-white hover:bg-zinc-900 rounded-lg font-semibold"
              >
                <Search className="w-3.5 h-3.5" />
                Search Now
              </button>
            </form>
          </div>
        </div>

        {/* Stats */}
        <div className="relative z-10 mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-16">
          <Stat value="5,000+" label="Venues" />
          <Stat value="50+" label="Destinations" />
          <Stat value="10,000+" label="Happy Couples" />
          <Stat value="4.9★" label="Average Rating" />
        </div>
      </section>

      {/* Sticky search bar portal when scrolled past hero */}
      {sticky && <div style={{ height: 80 }} />}
    </>
  );
};

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center">
    <p className="text-2xl md:text-3xl font-display font-bold text-white drop-shadow">{value}</p>
    <p className="text-sm text-white/60 font-body">{label}</p>
  </div>
);

export default HeroSection;
