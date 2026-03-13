import { Search, MapPin, Users, CalendarDays } from "lucide-react";
import heroImg from "@/assets/hero-wedding.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Luxury wedding venue at sunset" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-up">
        <p className="text-sm tracking-[0.3em] uppercase text-primary/80 mb-4 font-body">
          Short Term Rental Wedding Venues
        </p>
        <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
          <span className="text-foreground">Find Your Dream</span>
          <br />
          <span className="text-gold-gradient">Wedding Venue</span>
        </h1>
        <p className="text-foreground/70 text-lg max-w-xl mx-auto mb-12 font-body font-light">
          Discover stunning short term rental venues for unforgettable celebrations. Make your wedding last a week, not just a day.
        </p>

        {/* Search bar */}
        <div className="glass-search rounded-2xl p-2 flex flex-col md:flex-row items-stretch md:items-center gap-2 max-w-3xl mx-auto">
          <SearchField icon={<MapPin className="w-5 h-5 text-primary" />} label="Location" placeholder="Where to?" />
          <div className="hidden md:block w-px h-10 bg-border" />
          <SearchField icon={<Users className="w-5 h-5 text-primary" />} label="Guests" placeholder="How many?" />
          <div className="hidden md:block w-px h-10 bg-border" />
          <SearchField icon={<CalendarDays className="w-5 h-5 text-primary" />} label="Dates" placeholder="When?" />
          <button className="bg-gold-gradient text-primary-foreground font-semibold px-8 py-4 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity font-body">
            <Search className="w-5 h-5" />
            Search
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="relative z-10 mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-16 animate-fade-up" style={{ animationDelay: "0.3s" }}>
        <Stat value="5,000+" label="Venues" />
        <Stat value="50+" label="Destinations" />
        <Stat value="10,000+" label="Happy Couples" />
        <Stat value="4.9★" label="Average Rating" />
      </div>
    </section>
  );
};

const SearchField = ({ icon, label, placeholder }: { icon: React.ReactNode; label: string; placeholder: string }) => (
  <div className="flex items-center gap-3 px-4 py-2 flex-1 min-w-0">
    {icon}
    <div className="text-left">
      <p className="text-xs font-semibold text-foreground font-body">{label}</p>
      <p className="text-sm text-muted-foreground font-body">{placeholder}</p>
    </div>
  </div>
);

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center">
    <p className="text-2xl md:text-3xl font-display font-bold text-primary">{value}</p>
    <p className="text-sm text-foreground/60 font-body">{label}</p>
  </div>
);

export default HeroSection;
