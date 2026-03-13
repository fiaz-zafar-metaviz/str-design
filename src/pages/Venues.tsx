import { useState } from "react";
import { Search, MapPin, Users, CalendarDays, LayoutGrid, List, ChevronLeft, ChevronRight, Heart, Image as ImageIcon } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
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
  "Amazing Views": "🌅", "Beach": "🏖️", "Waterfront": "🌊", "Outdoor Pool": "🏊",
  "Fishing": "🎣", "Pet Friendly": "🐾", "Fireplace": "🔥", "Hot Tub": "🛁",
  "Bunk Room": "🛏️", "Garden": "🌿", "Gym": "🏋️", "Game Room": "🎮", "Theater Room": "🎬",
  "Event Space": "🎪", "Indoor Pool": "🏊", "Sauna": "🧖", "Basketball": "🏀",
};

interface Venue {
  id: number; name: string; location: string; description: string; images: string[];
  attendees: number; sleeps: number; beds: number; baths: number; sqft: number;
  price?: string; amenities: string[];
}

const allVenues: Venue[] = [
  { id: 1, name: "Oceanfront Paradise Estate – Stunning Beachfront Villa with Heated Pool & Spa", location: "Malibu, CA", description: "Oceanfront Paradise Estate is an elegant, upscale beachfront home designed for weddings, family gatherings, retreats, and larger groups. Situated directly on the beach with panoramic ocean views.", images: [venueBeach, venueIsland, venueDestination], attendees: 150, sleeps: 40, beds: 18, baths: 19, sqft: 8396, price: "$4,500/night", amenities: ["Amazing Views", "Beach", "Outdoor Pool", "Waterfront", "Fishing"] },
  { id: 2, name: "Villa Serenity – Tuscan Countryside Estate with Olive Groves & Vineyard Views", location: "Tuscany, Italy", description: "Villa Serenity is a breathtaking Tuscan estate set among rolling hills and olive groves. This historic property has been meticulously restored to offer modern luxury.", images: [venueVilla, venueVineyard, venueGarden], attendees: 100, sleeps: 30, beds: 12, baths: 14, sqft: 6200, amenities: ["Amazing Views", "Garden", "Fireplace", "Outdoor Pool"] },
  { id: 3, name: "Alpine Grand Lodge – Mountain Retreat with Panoramic Peak Views & Hot Springs", location: "Aspen, CO", description: "Alpine Grand Lodge is a magnificent mountain retreat nestled in the heart of Aspen. This grand timber-frame lodge offers breathtaking views of snow-capped peaks.", images: [venueMountain, venueCastle, venueVineyard], attendees: 200, sleeps: 58, beds: 22, baths: 18, sqft: 12000, price: "$5,200/night", amenities: ["Amazing Views", "Hot Tub", "Fireplace", "Pet Friendly", "Gym"] },
  { id: 4, name: "Private Island Retreat – Exclusive Tropical Paradise with Crystal Clear Waters", location: "The Bahamas", description: "Private Island Retreat offers the ultimate exclusive wedding experience on your own private island in the Bahamas surrounded by crystal-clear turquoise waters.", images: [venueIsland, venueBeach, venueDestination], attendees: 80, sleeps: 24, beds: 10, baths: 12, sqft: 5400, price: "$12,000/night", amenities: ["Amazing Views", "Beach", "Waterfront", "Fishing", "Outdoor Pool"] },
  { id: 5, name: "Vineyard Estate – Napa Valley Wine Country Manor with Cellar & Tasting Room", location: "Napa Valley, CA", description: "Vineyard Estate is a stunning wine country property set among acres of meticulously maintained vineyards with a private wine cellar and tasting room.", images: [venueVineyard, venueGarden, venueVilla], attendees: 120, sleeps: 34, beds: 14, baths: 16, sqft: 7800, amenities: ["Amazing Views", "Garden", "Fireplace", "Outdoor Pool"] },
  { id: 6, name: "Rose Garden Manor – Historic Charleston Estate with Lush Gardens & Ballroom", location: "Charleston, SC", description: "Rose Garden Manor is a historic Southern estate surrounded by award-winning rose gardens and ancient oak trees draped in Spanish moss.", images: [venueGarden, venueVilla, venueCastle], attendees: 90, sleeps: 28, beds: 11, baths: 13, sqft: 6500, price: "$2,800/night", amenities: ["Garden", "Pet Friendly", "Amazing Views"] },
  { id: 7, name: "Cliffside Mediterranean Villa – Stunning Sunset Views over the Aegean Sea", location: "Santorini, Greece", description: "Perched on the dramatic cliffs of Santorini, this Mediterranean villa offers some of the most spectacular sunset views in the world.", images: [venueDestination, venueIsland, venueBeach], attendees: 70, sleeps: 20, beds: 8, baths: 10, sqft: 4800, amenities: ["Amazing Views", "Waterfront", "Outdoor Pool", "Hot Tub"] },
  { id: 8, name: "Castle Grandeur – Fairy Tale European Castle with Towers, Moat & Grand Hall", location: "Loire Valley, France", description: "Castle Grandeur is a magnificently preserved medieval castle in the heart of France's Loire Valley with towers, a moat, and a grand banquet hall.", images: [venueCastle, venueVilla, venueGarden], attendees: 180, sleeps: 50, beds: 20, baths: 22, sqft: 15000, price: "$8,500/night", amenities: ["Amazing Views", "Garden", "Fireplace", "Bunk Room"] },
  { id: 9, name: "Lakefront Lodge – Serene Mountain Lake Estate with Private Dock & Kayaks", location: "Lake Tahoe, CA", description: "Lakefront Lodge is a spectacular mountain lake estate offering serene waterfront living with a private dock, kayaks, and stunning alpine views.", images: [venueMountain, venueBeach, venueGarden], attendees: 110, sleeps: 36, beds: 15, baths: 14, sqft: 7200, price: "$3,800/night", amenities: ["Amazing Views", "Waterfront", "Fishing", "Hot Tub", "Fireplace"] },
  { id: 10, name: "Desert Oasis Ranch – Luxury Southwest Estate with Infinity Pool & Mountain Views", location: "Scottsdale, AZ", description: "Desert Oasis Ranch is a luxurious Southwest estate surrounded by dramatic desert landscapes with mountain views and starlit skies.", images: [venueDestination, venueVineyard, venueVilla], attendees: 130, sleeps: 42, beds: 17, baths: 15, sqft: 9500, price: "$4,200/night", amenities: ["Amazing Views", "Outdoor Pool", "Hot Tub", "Gym", "Pet Friendly"] },
  { id: 11, name: "Tropical Plantation House – Hawaiian Beachfront Estate with Lush Gardens", location: "Maui, HI", description: "Tropical Plantation House is a stunning Hawaiian beachfront estate nestled among lush tropical gardens with direct beach access and island charm.", images: [venueIsland, venueGarden, venueBeach], attendees: 85, sleeps: 26, beds: 11, baths: 12, sqft: 5800, amenities: ["Beach", "Garden", "Amazing Views", "Outdoor Pool"] },
  { id: 12, name: "Mountain Creek Chalet – Rustic Luxury Lodge with Ski-In/Ski-Out Access", location: "Park City, UT", description: "Mountain Creek Chalet is a rustic luxury lodge offering ski-in/ski-out access with breathtaking mountain panoramas and cozy fireside gathering spaces.", images: [venueMountain, venueCastle, venueVineyard], attendees: 95, sleeps: 32, beds: 13, baths: 11, sqft: 6800, price: "$3,500/night", amenities: ["Amazing Views", "Hot Tub", "Fireplace", "Game Room", "Gym"] },
  { id: 13, name: "Southern Magnolia Plantation – Antebellum Estate with Spanish Moss & Pond", location: "Savannah, GA", description: "Southern Magnolia Plantation is a grand antebellum estate featuring ancient live oaks draped in Spanish moss and a picturesque reflecting pond.", images: [venueGarden, venueVilla, venueDestination], attendees: 140, sleeps: 38, beds: 16, baths: 17, sqft: 8200, price: "$3,200/night", amenities: ["Garden", "Amazing Views", "Pet Friendly", "Outdoor Pool"] },
  { id: 14, name: "Coastal Cliff Estate – Dramatic Pacific Coast Property with Ocean Caves", location: "Big Sur, CA", description: "Coastal Cliff Estate is a dramatic property perched on the Pacific Coast cliffs with breathtaking ocean views and access to hidden ocean caves.", images: [venueBeach, venueDestination, venueIsland], attendees: 60, sleeps: 18, beds: 7, baths: 9, sqft: 4200, amenities: ["Amazing Views", "Waterfront", "Hot Tub", "Fireplace"] },
  { id: 15, name: "Rivendell Grand Estate – 17,000 Sq Ft Mountain Canyon Luxury Retreat", location: "Smithfield, UT", description: "Rivendell Grand Estate spans 17,000 square feet of pure luxury in a stunning mountain canyon setting with basketball court and theater room.", images: [venueCastle, venueMountain, venueVilla], attendees: 200, sleeps: 70, beds: 25, baths: 20, sqft: 17000, price: "$6,500/night", amenities: ["Amazing Views", "Bunk Room", "Event Space", "Basketball", "Theater Room", "Indoor Pool", "Hot Tub", "Fireplace", "Game Room", "Gym"] },
  { id: 16, name: "Waterfall Paradise – Secluded Tropical Estate with Private Waterfall & Grotto", location: "Kauai, HI", description: "Waterfall Paradise is a secluded tropical estate featuring its own private waterfall and natural grotto perfect for magical ceremonies.", images: [venueIsland, venueGarden, venueBeach], attendees: 75, sleeps: 22, beds: 9, baths: 11, sqft: 5100, amenities: ["Amazing Views", "Garden", "Waterfront", "Outdoor Pool"] },
  { id: 17, name: "French Chateau Elegance – Loire Valley Castle with Wine Cave & Formal Gardens", location: "Amboise, France", description: "French Chateau Elegance is a stunning Loire Valley castle featuring a centuries-old wine cave and meticulously maintained formal French gardens.", images: [venueCastle, venueGarden, venueVineyard], attendees: 160, sleeps: 44, beds: 18, baths: 20, sqft: 13000, price: "$7,800/night", amenities: ["Amazing Views", "Garden", "Fireplace", "Bunk Room", "Event Space"] },
  { id: 18, name: "Beachcomber Villa – Luxurious Caribbean Oceanfront Home with Infinity Pool", location: "Turks and Caicos", description: "Beachcomber Villa is a luxurious Caribbean oceanfront home with an infinity pool overlooking pristine turquoise waters and white sand beaches.", images: [venueBeach, venueIsland, venueDestination], attendees: 65, sleeps: 16, beds: 7, baths: 8, sqft: 4000, price: "$5,800/night", amenities: ["Beach", "Outdoor Pool", "Amazing Views", "Waterfront", "Fishing"] },
  { id: 19, name: "Redwood Forest Retreat – Majestic Northern California Estate Among Giants", location: "Mendocino, CA", description: "Redwood Forest Retreat is a majestic estate nestled among towering ancient redwood trees in Northern California, offering a cathedral-like natural setting.", images: [venueMountain, venueGarden, venueVilla], attendees: 100, sleeps: 30, beds: 12, baths: 14, sqft: 6400, amenities: ["Amazing Views", "Garden", "Fireplace", "Pet Friendly", "Hot Tub"] },
  { id: 20, name: "Skyline Penthouse Estate – Urban Luxury Rooftop Wedding Venue with City Views", location: "Miami, FL", description: "Skyline Penthouse Estate is an ultra-modern urban luxury venue occupying the top floors of a waterfront tower with panoramic city and ocean views.", images: [venueDestination, venueVilla, venueBeach], attendees: 120, sleeps: 28, beds: 12, baths: 14, sqft: 7000, price: "$4,800/night", amenities: ["Amazing Views", "Outdoor Pool", "Gym", "Event Space", "Sauna"] },
];

const ITEMS_PER_PAGE = 10;

const Venues = () => {
  const [searchParams] = useSearchParams();
  const locationParam = searchParams.get("location") || "";
  const [view, setView] = useState<"list" | "grid">("list");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [searchLocation, setSearchLocation] = useState(locationParam);
  const [searchGuests, setSearchGuests] = useState("");

  const pageTitle = locationParam
    ? `Short Term Rental Wedding Venues in ${locationParam}`
    : "Short Term Rental Wedding Venues";

  const filtered = allVenues.filter((v) => {
    const matchLoc = !searchLocation || v.location.toLowerCase().includes(searchLocation.toLowerCase()) || v.name.toLowerCase().includes(searchLocation.toLowerCase());
    const matchGuests = !searchGuests || v.attendees >= parseInt(searchGuests);
    return matchLoc && matchGuests;
  });

  // If location param from homepage has no matches, show all venues
  const displayVenues = filtered.length === 0 && locationParam && !searchGuests ? allVenues : filtered;
  const visible = displayVenues.slice(0, visibleCount);
  const hasMore = visibleCount < displayVenues.length;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Sticky Search Bar */}
      <div className="sticky top-0 z-40 pt-20 pb-4 px-6 bg-background/95 backdrop-blur-md border-b border-border/50">
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-2 bg-card border border-border/50 rounded-xl p-2">
          <div className="flex items-center gap-3 bg-secondary rounded-lg px-4 py-3 flex-1">
            <MapPin className="w-4 h-4 text-muted-foreground shrink-0" />
            <input type="text" placeholder="Search by location or venue name..." value={searchLocation} onChange={(e) => { setSearchLocation(e.target.value); setVisibleCount(ITEMS_PER_PAGE); }} className="bg-transparent text-foreground placeholder:text-muted-foreground text-sm w-full outline-none font-body" />
          </div>
          <div className="flex items-center gap-3 bg-secondary rounded-lg px-4 py-3 w-full md:w-44">
            <Users className="w-4 h-4 text-muted-foreground shrink-0" />
            <input type="number" placeholder="Min guests" value={searchGuests} onChange={(e) => { setSearchGuests(e.target.value); setVisibleCount(ITEMS_PER_PAGE); }} className="bg-transparent text-foreground placeholder:text-muted-foreground text-sm w-full outline-none font-body" />
          </div>
          <div className="flex items-center gap-3 bg-secondary rounded-lg px-4 py-3 w-full md:w-44">
            <CalendarDays className="w-4 h-4 text-muted-foreground shrink-0" />
            <input type="text" placeholder="Any dates" className="bg-transparent text-foreground placeholder:text-muted-foreground text-sm w-full outline-none font-body" />
          </div>
          <button className="bg-foreground text-background font-semibold px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity font-body shrink-0 text-sm">
            <Search className="w-4 h-4" />
            Search
          </button>
        </div>
      </div>

      {/* Results Header */}
      <div className="px-6 py-5 flex items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-display font-bold mb-1">{pageTitle}</h1>
          <p className="text-sm text-muted-foreground font-body">
            Showing <span className="text-foreground font-semibold">{visible.length}</span> of <span className="text-foreground font-semibold">{displayVenues.length}</span> venues
          </p>
        </div>
        <div className="flex items-center gap-1 bg-card border border-border/50 rounded-xl p-1">
          <button onClick={() => setView("list")} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${view === "list" ? "bg-foreground text-background shadow-sm" : "text-muted-foreground hover:text-foreground"}`}>
            <List className="w-3.5 h-3.5" /> List
          </button>
          <button onClick={() => setView("grid")} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${view === "grid" ? "bg-foreground text-background shadow-sm" : "text-muted-foreground hover:text-foreground"}`}>
            <LayoutGrid className="w-3.5 h-3.5" /> Grid
          </button>
        </div>
      </div>

      {/* Results */}
      <div className="px-6 pb-16">
        {view === "list" ? (
          <div className="flex flex-col gap-5">
            {visible.map((venue) => <VenueListCard key={venue.id} venue={venue} />)}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {visible.map((venue) => <VenueGridCard key={venue.id} venue={venue} />)}
          </div>
        )}

        {hasMore && (
          <div className="text-center mt-10">
            <button onClick={() => setVisibleCount((c) => c + ITEMS_PER_PAGE)} className="border border-foreground/20 text-foreground px-10 py-3 rounded-xl hover:bg-secondary transition-all font-body font-medium">
              Load More Venues
            </button>
          </div>
        )}

        {displayVenues.length === 0 && (
          <div className="text-center py-20">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
              <Search className="w-7 h-7 text-muted-foreground" />
            </div>
            <p className="text-muted-foreground text-lg font-body mb-2">No venues match your search.</p>
            <p className="text-muted-foreground/60 text-sm font-body">Try adjusting your filters.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

/* ============ LIST CARD — 60% images (40% big + 20% small), 40% content ============ */
const VenueListCard = ({ venue }: { venue: Venue }) => {
  const [imgIndex, setImgIndex] = useState(0);
  const [liked, setLiked] = useState(false);

  return (
    <Link to={`/venue/${venue.id}`} className="block">
      <div className="bg-card rounded-xl border border-border/40 overflow-hidden flex flex-col lg:flex-row hover:border-foreground/10 transition-all duration-300 hover:shadow-lg hover:shadow-black/5">
        {/* Images: 60% width — left big 40%, right 2 stacked 20% */}
        <div className="lg:w-[60%] shrink-0 flex" style={{ height: 220 }}>
          {/* Big image — roughly 2/3 of image area */}
          <div className="relative w-[66%] overflow-hidden">
            <img src={venue.images[imgIndex]} alt={venue.name} className="w-full h-full object-cover" />
            <button onClick={(e) => { e.preventDefault(); setImgIndex((i) => (i - 1 + venue.images.length) % venue.images.length); }} className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-black/70 transition-colors">
              <ChevronLeft className="w-3.5 h-3.5 text-white" />
            </button>
            <button onClick={(e) => { e.preventDefault(); setImgIndex((i) => (i + 1) % venue.images.length); }} className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-black/70 transition-colors">
              <ChevronRight className="w-3.5 h-3.5 text-white" />
            </button>
            <button onClick={(e) => { e.preventDefault(); setLiked(!liked); }} className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-black/70 transition-colors">
              <Heart className={`w-4 h-4 ${liked ? "fill-red-500 text-red-500" : "text-white"}`} />
            </button>
            <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm text-white px-2 py-0.5 rounded-md text-xs font-medium flex items-center gap-1">
              <ImageIcon className="w-3 h-3" />
              {venue.images.length}+
            </div>
          </div>
          {/* 2 small stacked images — 1/3 of image area */}
          <div className="w-[34%] flex flex-col gap-1 pl-1">
            {venue.images.slice(1, 3).map((img, i) => (
              <div key={i} className="relative flex-1 overflow-hidden cursor-pointer" onClick={(e) => { e.preventDefault(); setImgIndex(i + 1); }}>
                <img src={img} alt="" className="w-full h-full object-cover hover:opacity-80 transition-opacity" />
              </div>
            ))}
          </div>
        </div>

        {/* Content: 40% */}
        <div className="lg:w-[40%] p-5 flex flex-col">
          <h3 className="font-display font-semibold text-base leading-tight text-foreground mb-1">{venue.name}</h3>
          <p className="text-sm text-muted-foreground font-body flex items-center gap-1 mb-2">
            <MapPin className="w-3.5 h-3.5" /> {venue.location}
          </p>
          <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4 line-clamp-3">{venue.description}</p>

          {/* Stats */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            <StatBadge icon="👥" label={`${venue.attendees}`} />
            <StatBadge icon="🌙" label={`${venue.sleeps}`} />
            <StatBadge icon="🛏️" label={`${venue.beds}`} />
            <StatBadge icon="🛁" label={`${venue.baths}`} />
            <StatBadge icon="" label={`${venue.sqft.toLocaleString()} ft²`} />
            {venue.price && <StatBadge icon="" label={venue.price} highlight />}
          </div>

          {/* Amenities */}
          <div className="flex flex-wrap gap-1.5 mt-auto">
            {venue.amenities.slice(0, 4).map((a) => (
              <span key={a} className="inline-flex items-center gap-1 text-xs text-foreground/80 px-2 py-1 rounded-md font-body border border-foreground/15">
                {amenityIcons[a] || "✨"} {a}
              </span>
            ))}
            {venue.amenities.length > 4 && (
              <span className="text-xs text-muted-foreground font-body px-2 py-1">+{venue.amenities.length - 4}</span>
            )}
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
      <div className="bg-card rounded-xl border border-border/40 overflow-hidden hover:border-foreground/10 transition-all duration-300 group hover:shadow-lg hover:shadow-black/5">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img src={venue.images[imgIndex]} alt={venue.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <button onClick={(e) => { e.preventDefault(); setImgIndex((i) => (i - 1 + venue.images.length) % venue.images.length); }} className="absolute left-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <ChevronLeft className="w-3.5 h-3.5 text-white" />
          </button>
          <button onClick={(e) => { e.preventDefault(); setImgIndex((i) => (i + 1) % venue.images.length); }} className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <ChevronRight className="w-3.5 h-3.5 text-white" />
          </button>
          <button onClick={(e) => { e.preventDefault(); setLiked(!liked); }} className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
            <Heart className={`w-3.5 h-3.5 ${liked ? "fill-red-500 text-red-500" : "text-white"}`} />
          </button>
          {venue.price && (
            <div className="absolute top-3 left-3 bg-foreground/90 text-background px-2.5 py-1 rounded-lg text-xs font-semibold font-body">{venue.price}</div>
          )}
          <div className="absolute bottom-3 left-3 flex gap-1">
            {venue.images.map((_, i) => <span key={i} className={`w-1.5 h-1.5 rounded-full transition-colors ${i === imgIndex ? "bg-white" : "bg-white/40"}`} />)}
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-display font-semibold text-sm leading-snug mb-1 line-clamp-2">{venue.name}</h3>
          <p className="text-xs text-muted-foreground font-body flex items-center gap-1 mb-2"><MapPin className="w-3 h-3" /> {venue.location}</p>
          <p className="text-xs text-muted-foreground font-body leading-relaxed mb-3 line-clamp-2">{venue.description}</p>
          <div className="flex flex-wrap gap-1.5 mb-3">
            <span className="text-[11px] text-muted-foreground font-body">👥 {venue.attendees}</span>
            <span className="text-[11px] text-muted-foreground">•</span>
            <span className="text-[11px] text-muted-foreground font-body">🌙 {venue.sleeps}</span>
            <span className="text-[11px] text-muted-foreground">•</span>
            <span className="text-[11px] text-muted-foreground font-body">🛏️ {venue.beds}</span>
            <span className="text-[11px] text-muted-foreground">•</span>
            <span className="text-[11px] text-muted-foreground font-body">🛁 {venue.baths}</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {venue.amenities.slice(0, 3).map((a) => (
              <span key={a} className="inline-flex items-center gap-1 text-[11px] text-foreground/80 px-2 py-1 rounded-md font-body border border-foreground/15">{amenityIcons[a] || "✨"} {a}</span>
            ))}
            {venue.amenities.length > 3 && <span className="text-[11px] text-muted-foreground font-body px-2 py-1">+{venue.amenities.length - 3}</span>}
          </div>
        </div>
      </div>
    </Link>
  );
};

const StatBadge = ({ icon, label, highlight }: { icon: string; label: string; highlight?: boolean }) => (
  <span className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded-md font-body border ${highlight ? "border-foreground/30 text-foreground font-semibold" : "border-foreground/15 text-foreground/80"}`}>
    {icon} {label}
  </span>
);

export default Venues;
