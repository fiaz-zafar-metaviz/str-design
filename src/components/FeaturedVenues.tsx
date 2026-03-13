import { Users, MapPin, Bed, Bath, Eye, Sun, Waves, Fish, Flame, PawPrint, Trees, Dumbbell, Moon } from "lucide-react";
import { Link } from "react-router-dom";

type AmenityStyle = {
  icon: React.ReactNode;
  color: string;
};

const amenityOptions: Record<string, AmenityStyle> = {
  "Amazing Views": { icon: <Eye className="w-3 h-3" />, color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" },
  "Beach": { icon: <Sun className="w-3 h-3" />, color: "bg-amber-500/20 text-amber-400 border-amber-500/30" },
  "Waterfront": { icon: <Waves className="w-3 h-3" />, color: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30" },
  "Outdoor Pool": { icon: <Waves className="w-3 h-3" />, color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
  "Fishing": { icon: <Fish className="w-3 h-3" />, color: "bg-teal-500/20 text-teal-400 border-teal-500/30" },
  "Pet Friendly": { icon: <PawPrint className="w-3 h-3" />, color: "bg-pink-500/20 text-pink-400 border-pink-500/30" },
  "Fireplace": { icon: <Flame className="w-3 h-3" />, color: "bg-orange-500/20 text-orange-400 border-orange-500/30" },
  "Hot Tub": { icon: <Flame className="w-3 h-3" />, color: "bg-red-500/20 text-red-400 border-red-500/30" },
  "Garden": { icon: <Trees className="w-3 h-3" />, color: "bg-lime-500/20 text-lime-400 border-lime-500/30" },
  "Gym": { icon: <Dumbbell className="w-3 h-3" />, color: "bg-violet-500/20 text-violet-400 border-violet-500/30" },
};

const venues = [
  {
    id: 1,
    name: "Oceanfront Paradise Estate",
    location: "Gulf Shores, AL",
    guests: 150,
    sleeps: 40,
    beds: 18,
    baths: 19,
    price: "$4,500/night",
    amenities: ["Amazing Views", "Beach", "Outdoor Pool", "Waterfront"],
    image: "https://www.strwedding.com/photos/display/stateimg_6785288c643e43.61971806.jpg",
  },
  {
    id: 2,
    name: "Villa Serenity",
    location: "Destin, FL",
    guests: 100,
    sleeps: 30,
    beds: 12,
    baths: 14,
    amenities: ["Amazing Views", "Garden", "Fireplace", "Outdoor Pool"],
    image: "https://www.strwedding.com/photos/display/stateimg_678754978935f4.59121311.jpg",
  },
  {
    id: 3,
    name: "Alpine Grand Lodge",
    location: "Aspen, CO",
    guests: 200,
    sleeps: 58,
    beds: 22,
    baths: 18,
    price: "$5,200/night",
    amenities: ["Amazing Views", "Hot Tub", "Fireplace", "Pet Friendly"],
    image: "https://www.strwedding.com/photos/display/stateimg_6787538a342147.93731504.jpg",
  },
  {
    id: 4,
    name: "Private Island Retreat",
    location: "The Bahamas",
    guests: 80,
    sleeps: 24,
    beds: 10,
    baths: 12,
    price: "$12,000/night",
    amenities: ["Amazing Views", "Beach", "Waterfront", "Fishing"],
    image: "https://www.strwedding.com/photos/display/stateimg_6786408c9e6f78.24452677.jpg",
  },
  {
    id: 5,
    name: "Vineyard Estate",
    location: "Napa Valley, CA",
    guests: 120,
    sleeps: 34,
    beds: 14,
    baths: 16,
    amenities: ["Amazing Views", "Garden", "Fireplace", "Outdoor Pool"],
    image: "https://www.strwedding.com/photos/display/stateimg_678757f06bb1d3.57432103.jpg",
  },
  {
    id: 6,
    name: "Rose Garden Manor",
    location: "Charleston, SC",
    guests: 90,
    sleeps: 28,
    beds: 11,
    baths: 13,
    price: "$2,800/night",
    amenities: ["Garden", "Pet Friendly", "Amazing Views"],
    image: "https://www.strwedding.com/photos/display/stateimg_6787582174ac20.64792368.jpg",
  },
];

const FeaturedVenues = () => {
  return (
    <section className="py-24 px-4 bg-dark-gradient">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm tracking-[0.3em] uppercase text-primary/80 text-center mb-3 font-body">
          Handpicked for You
        </p>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
          Featured Venues
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-lg mx-auto font-body">
          Extraordinary properties curated for your perfect wedding celebration
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {venues.map((venue) => (
            <VenueCard key={venue.id} {...venue} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/venues" className="border border-primary/30 text-primary px-8 py-3 rounded-xl hover:bg-primary/10 transition-all font-body font-medium inline-block hover:border-primary/60 hover:shadow-lg hover:shadow-primary/5">
            View All Venues
          </Link>
        </div>
      </div>
    </section>
  );
};

interface VenueCardProps {
  name: string;
  location: string;
  guests: number;
  sleeps: number;
  beds: number;
  baths: number;
  price?: string;
  amenities: string[];
  image: string;
}

const VenueCard = ({ name, location, guests, sleeps, beds, baths, price, amenities, image }: VenueCardProps) => (
  <div className="group rounded-2xl overflow-hidden bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 cursor-pointer hover:shadow-xl hover:shadow-primary/5">
    <div className="relative overflow-hidden aspect-[4/3]">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
      {price && (
        <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-lg text-sm font-semibold font-body">
          {price}
        </div>
      )}
    </div>
    <div className="p-5">
      <h3 className="font-display font-semibold text-lg mb-1">{name}</h3>
      <p className="text-muted-foreground text-sm mb-3 font-body flex items-center gap-1">
        <MapPin className="w-3.5 h-3.5 text-primary/70" /> {location}
      </p>

      {/* Stats */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        <span className="text-[11px] bg-muted/50 text-muted-foreground font-body px-2 py-1 rounded-md border border-border/30 flex items-center gap-1">
          <Users className="w-3 h-3" /> {guests}
        </span>
        <span className="text-[11px] bg-muted/50 text-muted-foreground font-body px-2 py-1 rounded-md border border-border/30 flex items-center gap-1">
          <Moon className="w-3 h-3" /> {sleeps}
        </span>
        <span className="text-[11px] bg-muted/50 text-muted-foreground font-body px-2 py-1 rounded-md border border-border/30 flex items-center gap-1">
          <Bed className="w-3 h-3" /> {beds}
        </span>
        <span className="text-[11px] bg-muted/50 text-muted-foreground font-body px-2 py-1 rounded-md border border-border/30 flex items-center gap-1">
          <Bath className="w-3 h-3" /> {baths}
        </span>
      </div>

      {/* Amenities */}
      <div className="flex flex-wrap gap-1.5">
        {amenities.slice(0, 4).map((a) => (
          <span key={a} className={`inline-flex items-center gap-1 text-[11px] px-2 py-1 rounded-full font-body font-medium border ${amenityOptions[a]?.color || "bg-secondary text-secondary-foreground border-border/50"}`}>
            {amenityOptions[a]?.icon}
            {a}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default FeaturedVenues;
