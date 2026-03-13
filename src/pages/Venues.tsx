import { useState } from "react";
import { Search, MapPin, Users, CalendarDays, LayoutGrid, List, ChevronLeft, ChevronRight, Heart, Bed, Bath, Maximize, Eye, Waves, Trees, Fish, Flame, PawPrint, Dumbbell, Sun, Image as ImageIcon, Moon } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import venueBeach from "@/assets/venue-beach.jpg";
import venueVilla from "@/assets/venue-villa.jpg";
import venueMountain from "@/assets/venue-mountain.jpg";
import venueIsland from "@/assets/venue-island.jpg";
import venueVineyard from "@/assets/venue-vineyard.jpg";
import venueGarden from "@/assets/venue-garden.jpg";
import venueDestination from "@/assets/venue-destination.jpg";
import venueCastle from "@/assets/venue-castle.jpg";

const amenityIcons: Record<string, string> = {
  "Amazing Views": "🌅",
  "Beach": "🏖️",
  "Waterfront": "🌊",
  "Outdoor Pool": "🏊",
  "Fishing": "🎣",
  "Pet Friendly": "🐾",
  "Fireplace": "🔥",
  "Hot Tub": "🛁",
  "Bunk Room": "🛏️",
  "Garden": "🌿",
  "Gym": "🏋️",
  "Game Room": "🎮",
  "Theater Room": "🎬",
};

interface Venue {
  id: number;
  name: string;
  location: string;
  description: string;
  images: string[];
  attendees: number;
  sleeps: number;
  beds: number;
  baths: number;
  sqft: number;
  price?: string;
  amenities: string[];
}

const allVenues: Venue[] = [
  {
    id: 1,
    name: "Oceanfront Paradise Estate – Stunning Beachfront Villa with Heated Pool & Spa",
    location: "Malibu, CA",
    description: "Oceanfront Paradise Estate is an elegant, upscale beachfront home designed for weddings, family gatherings, retreats, and larger groups. Situated directly on the beach with panoramic ocean views, this stunning property features modern luxury with coastal charm. Key features include a heated infinity pool, outdoor kitchen, and expansive wrap-around decks perfect for ceremonies and receptions.",
    images: [venueBeach, venueIsland, venueDestination],
    attendees: 150,
    sleeps: 40,
    beds: 18,
    baths: 19,
    sqft: 8396,
    price: "$4,500/night",
    amenities: ["Amazing Views", "Beach", "Outdoor Pool", "Waterfront", "Fishing"],
  },
  {
    id: 2,
    name: "Villa Serenity – Tuscan Countryside Estate with Olive Groves & Vineyard Views",
    location: "Tuscany, Italy",
    description: "Villa Serenity is a breathtaking Tuscan estate set among rolling hills and olive groves. This historic property has been meticulously restored to offer modern luxury while preserving its authentic Italian character. Perfect for intimate destination weddings with up to 100 guests, featuring stone courtyards, a private chapel, and stunning panoramic views of the countryside.",
    images: [venueVilla, venueVineyard, venueGarden],
    attendees: 100,
    sleeps: 30,
    beds: 12,
    baths: 14,
    sqft: 6200,
    amenities: ["Amazing Views", "Garden", "Fireplace", "Outdoor Pool"],
  },
  {
    id: 3,
    name: "Alpine Grand Lodge – Mountain Retreat with Panoramic Peak Views & Hot Springs",
    location: "Aspen, CO",
    description: "Alpine Grand Lodge is a magnificent mountain retreat nestled in the heart of Aspen. This grand timber-frame lodge offers breathtaking views of snow-capped peaks and pristine forests. With expansive outdoor spaces for ceremonies against a mountain backdrop, plus luxurious indoor gathering areas with soaring ceilings and stone fireplaces, it's the ultimate mountain wedding destination.",
    images: [venueMountain, venueCastle, venueVineyard],
    attendees: 200,
    sleeps: 58,
    beds: 22,
    baths: 18,
    sqft: 12000,
    price: "$5,200/night",
    amenities: ["Amazing Views", "Hot Tub", "Fireplace", "Pet Friendly", "Gym"],
  },
  {
    id: 4,
    name: "Private Island Retreat – Exclusive Tropical Paradise with Crystal Clear Waters",
    location: "The Bahamas",
    description: "Private Island Retreat offers the ultimate exclusive wedding experience on your own private island in the Bahamas. Surrounded by crystal-clear turquoise waters and pristine white sand beaches, this property provides unmatched privacy and luxury. Features include overwater bungalows, a private dock, and dedicated staff to ensure your celebration is absolutely perfect.",
    images: [venueIsland, venueBeach, venueDestination],
    attendees: 80,
    sleeps: 24,
    beds: 10,
    baths: 12,
    sqft: 5400,
    price: "$12,000/night",
    amenities: ["Amazing Views", "Beach", "Waterfront", "Fishing", "Outdoor Pool"],
  },
  {
    id: 5,
    name: "Vineyard Estate – Napa Valley Wine Country Manor with Cellar & Tasting Room",
    location: "Napa Valley, CA",
    description: "Vineyard Estate is a stunning wine country property set among acres of meticulously maintained vineyards. This elegant manor combines rustic charm with refined luxury, offering a private wine cellar, professional tasting room, and sweeping views of the valley. The property features multiple ceremony and reception spaces both indoors and among the vines.",
    images: [venueVineyard, venueGarden, venueVilla],
    attendees: 120,
    sleeps: 34,
    beds: 14,
    baths: 16,
    sqft: 7800,
    amenities: ["Amazing Views", "Garden", "Fireplace", "Outdoor Pool"],
  },
  {
    id: 6,
    name: "Rose Garden Manor – Historic Charleston Estate with Lush Gardens & Ballroom",
    location: "Charleston, SC",
    description: "Rose Garden Manor is a historic Southern estate surrounded by award-winning rose gardens and ancient oak trees draped in Spanish moss. This beautifully restored property features a grand ballroom, wraparound porches, and multiple garden spaces perfect for romantic ceremonies. The manor combines old-world Southern elegance with modern luxury amenities.",
    images: [venueGarden, venueVilla, venueCastle],
    attendees: 90,
    sleeps: 28,
    beds: 11,
    baths: 13,
    sqft: 6500,
    price: "$2,800/night",
    amenities: ["Garden", "Pet Friendly", "Amazing Views"],
  },
  {
    id: 7,
    name: "Cliffside Mediterranean Villa – Stunning Sunset Views over the Aegean Sea",
    location: "Santorini, Greece",
    description: "Perched on the dramatic cliffs of Santorini, this Mediterranean villa offers some of the most spectacular sunset views in the world. The white-washed architecture with blue accents creates a timeless Greek island aesthetic. Features include an infinity pool overlooking the caldera, multiple terraces for dining, and luxurious suites carved into the volcanic rock.",
    images: [venueDestination, venueIsland, venueBeach],
    attendees: 70,
    sleeps: 20,
    beds: 8,
    baths: 10,
    sqft: 4800,
    amenities: ["Amazing Views", "Waterfront", "Outdoor Pool", "Hot Tub"],
  },
  {
    id: 8,
    name: "Castle Grandeur – Fairy Tale European Castle with Towers, Moat & Grand Hall",
    location: "Loire Valley, France",
    description: "Castle Grandeur is a magnificently preserved medieval castle in the heart of France's Loire Valley. Complete with towers, a moat, and a grand banquet hall, this fairy-tale venue brings storybook dreams to life. The castle grounds include manicured French gardens, a private vineyard, and a centuries-old chapel perfect for intimate ceremonies.",
    images: [venueCastle, venueVilla, venueGarden],
    attendees: 180,
    sleeps: 50,
    beds: 20,
    baths: 22,
    sqft: 15000,
    price: "$8,500/night",
    amenities: ["Amazing Views", "Garden", "Fireplace", "Bunk Room"],
  },
];

const ITEMS_PER_PAGE = 4;

const Venues = () => {
  const [view, setView] = useState<"list" | "grid">("list");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [searchLocation, setSearchLocation] = useState("");
  const [searchGuests, setSearchGuests] = useState("");

  const filtered = allVenues.filter((v) => {
    const matchLoc = !searchLocation || v.location.toLowerCase().includes(searchLocation.toLowerCase()) || v.name.toLowerCase().includes(searchLocation.toLowerCase());
    const matchGuests = !searchGuests || v.attendees >= parseInt(searchGuests);
    return matchLoc && matchGuests;
  });

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Sticky Search Bar */}
      <div className="sticky top-0 z-40 pt-20 pb-4 px-4 bg-background/95 backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-2 bg-card/80 border border-border/50 rounded-2xl p-2">
            <div className="flex items-center gap-3 bg-secondary/50 rounded-xl px-4 py-3 flex-1">
              <MapPin className="w-4 h-4 text-primary shrink-0" />
              <input
                type="text"
                placeholder="Search by location or venue name..."
                value={searchLocation}
                onChange={(e) => { setSearchLocation(e.target.value); setVisibleCount(ITEMS_PER_PAGE); }}
                className="bg-transparent text-foreground placeholder:text-muted-foreground text-sm w-full outline-none font-body"
              />
            </div>
            <div className="flex items-center gap-3 bg-secondary/50 rounded-xl px-4 py-3 w-full md:w-44">
              <Users className="w-4 h-4 text-primary shrink-0" />
              <input
                type="number"
                placeholder="Min guests"
                value={searchGuests}
                onChange={(e) => { setSearchGuests(e.target.value); setVisibleCount(ITEMS_PER_PAGE); }}
                className="bg-transparent text-foreground placeholder:text-muted-foreground text-sm w-full outline-none font-body"
              />
            </div>
            <div className="flex items-center gap-3 bg-secondary/50 rounded-xl px-4 py-3 w-full md:w-44">
              <CalendarDays className="w-4 h-4 text-primary shrink-0" />
              <input type="text" placeholder="Any dates" className="bg-transparent text-foreground placeholder:text-muted-foreground text-sm w-full outline-none font-body" />
            </div>
            <button className="bg-gold-gradient text-primary-foreground font-semibold px-6 py-3 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity font-body shrink-0">
              <Search className="w-4 h-4" />
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Results Header */}
      <div className="max-w-7xl mx-auto px-4 py-5 flex items-center justify-between">
        <p className="text-sm text-muted-foreground font-body">
          Showing <span className="text-foreground font-semibold">{visible.length}</span> of <span className="text-foreground font-semibold">{filtered.length}</span> venues
        </p>
        <div className="flex items-center gap-1 bg-card border border-border/50 rounded-xl p-1">
          <button
            onClick={() => setView("list")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${view === "list" ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
          >
            <List className="w-3.5 h-3.5" />
            List
          </button>
          <button
            onClick={() => setView("grid")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${view === "grid" ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            Grid
          </button>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        {view === "list" ? (
          <div className="flex flex-col gap-5">
            {visible.map((venue) => (
              <VenueListCard key={venue.id} venue={venue} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {visible.map((venue) => (
              <VenueGridCard key={venue.id} venue={venue} />
            ))}
          </div>
        )}

        {hasMore && (
          <div className="text-center mt-10">
            <button
              onClick={() => setVisibleCount((c) => c + ITEMS_PER_PAGE)}
              className="border border-primary/30 text-primary px-10 py-3 rounded-xl hover:bg-primary/10 transition-all font-body font-medium hover:border-primary/60"
            >
              Load More Venues
            </button>
          </div>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
              <Search className="w-7 h-7 text-muted-foreground" />
            </div>
            <p className="text-muted-foreground text-lg font-body mb-2">No venues match your search.</p>
            <p className="text-muted-foreground/60 text-sm font-body">Try adjusting your filters or search terms.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

/* ============ LIST CARD ============ */
const VenueListCard = ({ venue }: { venue: Venue }) => {
  const [imgIndex, setImgIndex] = useState(0);
  const [liked, setLiked] = useState(false);

  return (
    <Link to={`/venue/${venue.id}`} className="block">
      <div className="bg-card rounded-2xl border border-border/40 overflow-hidden flex flex-col lg:flex-row hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-black/10">
        {/* Images Section - 1 big left, 2 small right stacked */}
        <div className="lg:w-[440px] shrink-0">
          <div className="flex h-full">
            {/* Big image left */}
            <div className="relative w-[60%] lg:w-[60%] aspect-[3/4] lg:aspect-auto overflow-hidden">
              <img src={venue.images[imgIndex]} alt={venue.name} className="w-full h-full object-cover" />
              <button
                onClick={(e) => { e.preventDefault(); setImgIndex((i) => (i - 1 + venue.images.length) % venue.images.length); }}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                <ChevronLeft className="w-3.5 h-3.5 text-white" />
              </button>
              <button
                onClick={(e) => { e.preventDefault(); setImgIndex((i) => (i + 1) % venue.images.length); }}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                <ChevronRight className="w-3.5 h-3.5 text-white" />
              </button>
              <button
                onClick={(e) => { e.preventDefault(); setLiked(!liked); }}
                className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                <Heart className={`w-4 h-4 ${liked ? "fill-red-500 text-red-500" : "text-white"}`} />
              </button>
              {/* Image count */}
              <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm text-white px-2 py-0.5 rounded-md text-xs font-medium flex items-center gap-1">
                <ImageIcon className="w-3 h-3" />
                {venue.images.length}+
              </div>
            </div>
            {/* 2 small images right, stacked */}
            <div className="w-[40%] lg:w-[40%] flex flex-col gap-1 pl-1">
              {venue.images.slice(1, 3).map((img, i) => (
                <div key={i} className="relative flex-1 overflow-hidden cursor-pointer" onClick={(e) => { e.preventDefault(); setImgIndex(i + 1); }}>
                  <img src={img} alt="" className="w-full h-full object-cover hover:opacity-80 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-5 flex flex-col">
          <h3 className="font-display font-semibold text-lg leading-tight text-foreground mb-1">{venue.name}</h3>
          <p className="text-sm text-primary/80 font-body flex items-center gap-1 mb-2">
            <MapPin className="w-3.5 h-3.5" /> {venue.location}
          </p>
          <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4 line-clamp-3">
            {venue.description}
          </p>

          {/* Stats Row - clean bordered badges */}
          <div className="flex flex-wrap gap-2 mb-3">
            <StatBadge icon="👥" label={`Attendees: ${venue.attendees}`} />
            <StatBadge icon="🌙" label={`Sleeps: ${venue.sleeps}`} />
            <StatBadge icon="🛏️" label={`Beds : ${venue.beds}`} />
            <StatBadge icon="🛁" label={`Baths : ${venue.baths}`} />
            <StatBadge icon="" label={`Ft² ${venue.sqft.toLocaleString()}`} />
            {venue.price && <StatBadge icon="" label={venue.price} highlight />}
          </div>

          {/* Amenities - clean simple bordered badges with emoji */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {venue.amenities.map((a) => (
              <span key={a} className="inline-flex items-center gap-1.5 text-xs bg-transparent text-foreground px-3 py-1.5 rounded-md font-body border border-foreground/20">
                {amenityIcons[a] || "✨"} {a}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

/* ============ GRID CARD ============ */
const VenueGridCard = ({ venue }: { venue: Venue }) => {
  const [imgIndex, setImgIndex] = useState(0);
  const [liked, setLiked] = useState(false);

  return (
    <Link to={`/venue/${venue.id}`} className="block">
      <div className="bg-card rounded-2xl border border-border/40 overflow-hidden hover:border-primary/20 transition-all duration-300 group hover:shadow-xl hover:shadow-black/10">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img src={venue.images[imgIndex]} alt={venue.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <button
            onClick={(e) => { e.preventDefault(); setImgIndex((i) => (i - 1 + venue.images.length) % venue.images.length); }}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronLeft className="w-3.5 h-3.5 text-white" />
          </button>
          <button
            onClick={(e) => { e.preventDefault(); setImgIndex((i) => (i + 1) % venue.images.length); }}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronRight className="w-3.5 h-3.5 text-white" />
          </button>
          <button
            onClick={(e) => { e.preventDefault(); setLiked(!liked); }}
            className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center"
          >
            <Heart className={`w-3.5 h-3.5 ${liked ? "fill-red-500 text-red-500" : "text-white"}`} />
          </button>
          {venue.price && (
            <div className="absolute top-3 left-3 bg-primary/90 text-primary-foreground px-2.5 py-1 rounded-lg text-xs font-semibold font-body">
              {venue.price}
            </div>
          )}
          <div className="absolute bottom-3 left-3 flex gap-1">
            {venue.images.map((_, i) => (
              <span key={i} className={`w-1.5 h-1.5 rounded-full transition-colors ${i === imgIndex ? "bg-white" : "bg-white/40"}`} />
            ))}
          </div>
        </div>

        <div className="p-5">
          <h3 className="font-display font-semibold text-base leading-snug mb-1 line-clamp-2">{venue.name}</h3>
          <p className="text-xs text-primary/80 font-body flex items-center gap-1 mb-2">
            <MapPin className="w-3 h-3" /> {venue.location}
          </p>
          <p className="text-xs text-muted-foreground font-body leading-relaxed mb-3 line-clamp-2">{venue.description}</p>
          <div className="flex flex-wrap gap-1.5 mb-3">
            <span className="text-[11px] text-muted-foreground font-body">👥 {venue.attendees}</span>
            <span className="text-[11px] text-muted-foreground">•</span>
            <span className="text-[11px] text-muted-foreground font-body">🌙 {venue.sleeps}</span>
            <span className="text-[11px] text-muted-foreground">•</span>
            <span className="text-[11px] text-muted-foreground font-body">🛏️ {venue.beds} beds</span>
            <span className="text-[11px] text-muted-foreground">•</span>
            <span className="text-[11px] text-muted-foreground font-body">🛁 {venue.baths} baths</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {venue.amenities.slice(0, 3).map((a) => (
              <span key={a} className="inline-flex items-center gap-1 text-[11px] bg-transparent text-foreground/80 px-2 py-1 rounded-md font-body border border-foreground/15">
                {amenityIcons[a] || "✨"} {a}
              </span>
            ))}
            {venue.amenities.length > 3 && (
              <span className="text-[11px] text-muted-foreground font-body px-2 py-1">+{venue.amenities.length - 3}</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

const StatBadge = ({ icon, label, highlight }: { icon: string; label: string; highlight?: boolean }) => (
  <span className={`inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md font-body border ${highlight ? "border-primary/30 text-primary font-semibold" : "border-foreground/20 text-foreground"}`}>
    {icon} {label}
  </span>
);

export default Venues;
