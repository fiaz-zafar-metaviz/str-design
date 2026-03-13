import { useParams } from "react-router-dom";
import { useState } from "react";
import { MapPin, Users, Bed, Bath, Maximize, Heart, Share2, ChevronLeft, ChevronRight, Calendar, Mail, Image as ImageIcon, Play } from "lucide-react";
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

interface VenueData {
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
  houseRules?: string[];
  cancellationPolicy?: string;
}

const allVenues: VenueData[] = [
  {
    id: 1,
    name: "Oceanfront Paradise Estate – Stunning Beachfront Villa with Heated Pool & Spa",
    location: "Malibu, CA",
    description: "Oceanfront Paradise Estate is an elegant, upscale beachfront home designed for weddings, family gatherings, retreats, and larger groups. Situated directly on the beach with panoramic ocean views, this stunning property features modern luxury with coastal charm. Key features include a heated infinity pool, outdoor kitchen, and expansive wrap-around decks perfect for ceremonies and receptions.\n\nThe property spans over 8,000 square feet with 18 bedrooms and 19 bathrooms, sleeping up to 40 guests comfortably. The open floor plan features floor-to-ceiling windows that flood the space with natural light and provide uninterrupted ocean views from nearly every room.\n\nThe outdoor spaces are truly exceptional, with multiple terraces perfect for ceremony setups, a heated infinity pool overlooking the ocean, a fully equipped outdoor kitchen for catering, and beautifully landscaped gardens.",
    images: [venueBeach, venueIsland, venueDestination, venueVilla, venueGarden],
    attendees: 150, sleeps: 40, beds: 18, baths: 19, sqft: 8396, price: "$4,500/night",
    amenities: ["Amazing Views", "Beach", "Outdoor Pool", "Waterfront", "Fishing"],
    houseRules: ["No smoking inside", "Quiet hours 10pm - 8am", "No fireworks", "Pets allowed with approval", "Max occupancy must be respected"],
    cancellationPolicy: "Free cancellation up to 30 days before check-in. After that, the first night is non-refundable. Cancel before check-in and get a 50% refund of every night except the first.",
  },
  {
    id: 2,
    name: "Villa Serenity – Tuscan Countryside Estate with Olive Groves & Vineyard Views",
    location: "Tuscany, Italy",
    description: "Villa Serenity is a breathtaking Tuscan estate set among rolling hills and olive groves. This historic property has been meticulously restored to offer modern luxury while preserving its authentic Italian character. Perfect for intimate destination weddings with up to 100 guests, featuring stone courtyards, a private chapel, and stunning panoramic views of the countryside.\n\nEvery detail has been carefully considered, from the original terracotta floors to the hand-painted frescoes in the main salon.",
    images: [venueVilla, venueVineyard, venueGarden, venueDestination, venueCastle],
    attendees: 100, sleeps: 30, beds: 12, baths: 14, sqft: 6200,
    amenities: ["Amazing Views", "Garden", "Fireplace", "Outdoor Pool"],
    houseRules: ["No smoking", "Respect quiet hours", "No pets"],
    cancellationPolicy: "Full refund if cancelled 14 days before check-in.",
  },
  {
    id: 3,
    name: "Alpine Grand Lodge – Mountain Retreat with Panoramic Peak Views & Hot Springs",
    location: "Aspen, CO",
    description: "Alpine Grand Lodge is a magnificent mountain retreat nestled in the heart of Aspen. This grand timber-frame lodge offers breathtaking views of snow-capped peaks and pristine forests. With expansive outdoor spaces for ceremonies against a mountain backdrop, plus luxurious indoor gathering areas with soaring ceilings and stone fireplaces, it's the ultimate mountain wedding destination.\n\nThe lodge features 22 bedrooms spread across three levels, a grand living room with 30-foot ceilings, a gourmet kitchen, private hot springs, and a dedicated event space.",
    images: [venueMountain, venueCastle, venueVineyard, venueBeach, venueIsland],
    attendees: 200, sleeps: 58, beds: 22, baths: 18, sqft: 12000, price: "$5,200/night",
    amenities: ["Amazing Views", "Hot Tub", "Fireplace", "Pet Friendly", "Gym"],
    houseRules: ["No smoking", "Keep trails clean", "Pets on leash outdoors"],
    cancellationPolicy: "Full refund 30 days before. 50% refund 14 days before.",
  },
  {
    id: 4,
    name: "Private Island Retreat – Exclusive Tropical Paradise with Crystal Clear Waters",
    location: "The Bahamas",
    description: "Private Island Retreat offers the ultimate exclusive wedding experience on your own private island in the Bahamas. Surrounded by crystal-clear turquoise waters and pristine white sand beaches, this property provides unmatched privacy and luxury.\n\nFeatures include overwater bungalows, a private dock, and dedicated staff to ensure your celebration is absolutely perfect.",
    images: [venueIsland, venueBeach, venueDestination, venueGarden, venueVilla],
    attendees: 80, sleeps: 24, beds: 10, baths: 12, sqft: 5400, price: "$12,000/night",
    amenities: ["Amazing Views", "Beach", "Waterfront", "Fishing", "Outdoor Pool"],
    houseRules: ["No glass on beach", "Respect marine life", "No jet skis after 6pm"],
    cancellationPolicy: "Non-refundable. Travel insurance recommended.",
  },
  {
    id: 5,
    name: "Vineyard Estate – Napa Valley Wine Country Manor with Cellar & Tasting Room",
    location: "Napa Valley, CA",
    description: "Vineyard Estate is a stunning wine country property set among acres of meticulously maintained vineyards. This elegant manor combines rustic charm with refined luxury, offering a private wine cellar, professional tasting room, and sweeping views of the valley.",
    images: [venueVineyard, venueGarden, venueVilla, venueBeach, venueCastle],
    attendees: 120, sleeps: 34, beds: 14, baths: 16, sqft: 7800,
    amenities: ["Amazing Views", "Garden", "Fireplace", "Outdoor Pool"],
    houseRules: ["No smoking", "Wine tastings by appointment only"],
    cancellationPolicy: "Full refund 21 days before check-in.",
  },
  {
    id: 6,
    name: "Rose Garden Manor – Historic Charleston Estate with Lush Gardens & Ballroom",
    location: "Charleston, SC",
    description: "Rose Garden Manor is a historic Southern estate surrounded by award-winning rose gardens and ancient oak trees draped in Spanish moss. This beautifully restored property features a grand ballroom, wraparound porches, and multiple garden spaces perfect for romantic ceremonies.",
    images: [venueGarden, venueVilla, venueCastle, venueBeach, venueIsland],
    attendees: 90, sleeps: 28, beds: 11, baths: 13, sqft: 6500, price: "$2,800/night",
    amenities: ["Garden", "Pet Friendly", "Amazing Views"],
    houseRules: ["No smoking", "Pets must stay off furniture", "No red wine on white carpet"],
    cancellationPolicy: "Full refund 14 days before check-in.",
  },
  {
    id: 7,
    name: "Cliffside Mediterranean Villa – Stunning Sunset Views over the Aegean Sea",
    location: "Santorini, Greece",
    description: "Perched on the dramatic cliffs of Santorini, this Mediterranean villa offers some of the most spectacular sunset views in the world. The white-washed architecture with blue accents creates a timeless Greek island aesthetic.",
    images: [venueDestination, venueIsland, venueBeach, venueVilla, venueVineyard],
    attendees: 70, sleeps: 20, beds: 8, baths: 10, sqft: 4800,
    amenities: ["Amazing Views", "Waterfront", "Outdoor Pool", "Hot Tub"],
    houseRules: ["No smoking indoors", "Use pool at own risk"],
    cancellationPolicy: "50% refund if cancelled 14 days before.",
  },
  {
    id: 8,
    name: "Castle Grandeur – Fairy Tale European Castle with Towers, Moat & Grand Hall",
    location: "Loire Valley, France",
    description: "Castle Grandeur is a magnificently preserved medieval castle in the heart of France's Loire Valley. Complete with towers, a moat, and a grand banquet hall, this fairy-tale venue brings storybook dreams to life. The castle grounds include manicured French gardens, a private vineyard, and a centuries-old chapel perfect for intimate ceremonies.",
    images: [venueCastle, venueVilla, venueGarden, venueDestination, venueMountain],
    attendees: 180, sleeps: 50, beds: 20, baths: 22, sqft: 15000, price: "$8,500/night",
    amenities: ["Amazing Views", "Garden", "Fireplace", "Bunk Room"],
    houseRules: ["No smoking", "No climbing castle walls", "Guided tours available"],
    cancellationPolicy: "Full refund 30 days before. No refund after.",
  },
];

const VenueDetail = () => {
  const { id } = useParams();
  const venue = allVenues.find((v) => v.id === Number(id));
  const [mainImg, setMainImg] = useState(0);
  const [liked, setLiked] = useState(false);

  if (!venue) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-24 text-center py-40">
          <h1 className="text-3xl font-display font-bold mb-4">Venue Not Found</h1>
          <p className="text-muted-foreground font-body">The venue you're looking for doesn't exist.</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Stats Bar - horizontal scrollable */}
      <div className="pt-20 border-b border-border/30">
        <div className="max-w-7xl mx-auto px-4 py-3 overflow-x-auto">
          <div className="flex items-center gap-2 min-w-max">
            <StatBadge icon="👥" label={`Attendees: ${venue.attendees}`} />
            <StatBadge icon="🌙" label={`Sleeps: ${venue.sleeps}`} />
            <StatBadge icon="🛏️" label={`Beds ${venue.beds}`} />
            <StatBadge icon="🛁" label={`Baths ${venue.baths}`} />
            <StatBadge icon="" label={`Ft² ${venue.sqft.toLocaleString()}`} />
            {venue.amenities.map((a) => (
              <StatBadge key={a} icon={amenityIcons[a] || "✨"} label={a} />
            ))}
          </div>
        </div>
      </div>

      {/* Gallery - 1 big left, 4 small in 2x2 grid right */}
      <div className="max-w-7xl mx-auto px-4 pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-2 rounded-2xl overflow-hidden" style={{ height: "clamp(300px, 50vh, 500px)" }}>
          {/* Main big image - left 60% */}
          <div className="lg:col-span-3 relative overflow-hidden">
            <img src={venue.images[mainImg]} alt={venue.name} className="w-full h-full object-cover" />
            <button
              onClick={() => setMainImg((i) => (i - 1 + venue.images.length) % venue.images.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-black/70 transition-colors"
            >
              <ChevronLeft className="w-4 h-4 text-white" />
            </button>
            <button
              onClick={() => setMainImg((i) => (i + 1) % venue.images.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-black/70 transition-colors"
            >
              <ChevronRight className="w-4 h-4 text-white" />
            </button>
            <button
              onClick={() => setLiked(!liked)}
              className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-black/70 transition-colors"
            >
              <Heart className={`w-4 h-4 ${liked ? "fill-red-500 text-red-500" : "text-white"}`} />
            </button>
          </div>
          {/* 4 small images - right 2x2 grid */}
          <div className="lg:col-span-2 hidden lg:grid grid-cols-2 grid-rows-2 gap-2">
            {venue.images.slice(1, 5).map((img, i) => (
              <div key={i} className="relative overflow-hidden cursor-pointer" onClick={() => setMainImg(i + 1)}>
                <img src={img} alt="" className="w-full h-full object-cover hover:opacity-80 transition-opacity" />
                {/* Show image count on last thumbnail */}
                {i === 3 && venue.images.length > 5 && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="flex items-center gap-1.5 text-white text-sm font-body font-medium">
                      <ImageIcon className="w-4 h-4" />
                      {venue.images.length}+
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Title & Location */}
      <div className="max-w-7xl mx-auto px-4 pt-6 pb-2">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="font-display font-bold text-2xl md:text-3xl leading-tight mb-2">{venue.name}</h1>
            <p className="text-primary font-body flex items-center gap-1.5 text-sm">
              <MapPin className="w-4 h-4" /> {venue.location}
            </p>
          </div>
          <div className="flex gap-2 shrink-0">
            <button className="w-10 h-10 rounded-xl border border-border flex items-center justify-center hover:bg-secondary/50 transition-colors">
              <Share2 className="w-4 h-4 text-foreground" />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left - Details */}
          <div className="lg:col-span-2 space-y-0">
            {/* Description */}
            <DetailSection title="About This Venue">
              <div className="text-muted-foreground font-body leading-relaxed text-sm whitespace-pre-line">
                {venue.description}
              </div>
            </DetailSection>

            {/* Amenities */}
            <DetailSection title="Amenities">
              <div className="flex flex-wrap gap-2">
                {venue.amenities.map((a) => (
                  <span key={a} className="inline-flex items-center gap-1.5 text-sm text-foreground px-4 py-2 rounded-md font-body border border-foreground/20">
                    {amenityIcons[a] || "✨"} {a}
                  </span>
                ))}
              </div>
            </DetailSection>

            {/* Property Details */}
            <DetailSection title="Property Details">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <DetailItem label="Attendees" value={venue.attendees.toString()} />
                <DetailItem label="Sleeps" value={venue.sleeps.toString()} />
                <DetailItem label="Bedrooms" value={venue.beds.toString()} />
                <DetailItem label="Bathrooms" value={venue.baths.toString()} />
                <DetailItem label="Square Feet" value={venue.sqft.toLocaleString()} />
                <DetailItem label="Property Type" value="Entire Home" />
              </div>
            </DetailSection>

            {/* House Rules */}
            {venue.houseRules && (
              <DetailSection title="House Rules">
                <ul className="space-y-2">
                  {venue.houseRules.map((rule, i) => (
                    <li key={i} className="text-sm text-muted-foreground font-body flex items-start gap-2">
                      <span className="text-foreground/40 mt-0.5">•</span>
                      {rule}
                    </li>
                  ))}
                </ul>
              </DetailSection>
            )}

            {/* Cancellation Policy */}
            {venue.cancellationPolicy && (
              <DetailSection title="Cancellation Policy">
                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                  {venue.cancellationPolicy}
                </p>
              </DetailSection>
            )}

            {/* Location */}
            <DetailSection title="Location">
              <div className="bg-secondary/30 rounded-xl h-64 flex items-center justify-center border border-border/30">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground font-body">{venue.location}</p>
                  <p className="text-xs text-muted-foreground/60 font-body mt-1">Map coming soon</p>
                </div>
              </div>
            </DetailSection>
          </div>

          {/* Right - Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 bg-card border border-border/50 rounded-2xl p-6">
              {venue.price ? (
                <div className="mb-5">
                  <span className="text-3xl font-display font-bold text-foreground">{venue.price}</span>
                </div>
              ) : (
                <div className="mb-5">
                  <span className="text-lg font-display font-semibold text-muted-foreground">Contact for pricing</span>
                </div>
              )}

              <div className="space-y-3 mb-6">
                <div className="bg-secondary/50 rounded-xl p-3 border border-border/30">
                  <label className="text-xs font-semibold text-foreground font-body block mb-1">Check In</label>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground font-body">
                    <Calendar className="w-4 h-4" />
                    Select date
                  </div>
                </div>
                <div className="bg-secondary/50 rounded-xl p-3 border border-border/30">
                  <label className="text-xs font-semibold text-foreground font-body block mb-1">Check Out</label>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground font-body">
                    <Calendar className="w-4 h-4" />
                    Select date
                  </div>
                </div>
                <div className="bg-secondary/50 rounded-xl p-3 border border-border/30">
                  <label className="text-xs font-semibold text-foreground font-body block mb-1">Guests</label>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground font-body">
                    <Users className="w-4 h-4" />
                    Add guests
                  </div>
                </div>
              </div>

              <button className="w-full bg-foreground text-background font-semibold py-4 rounded-xl hover:opacity-90 transition-opacity font-body text-sm">
                Request to Book
              </button>

              <button className="w-full mt-3 border border-border text-foreground font-medium py-3 rounded-xl hover:bg-secondary/50 transition-colors font-body text-sm flex items-center justify-center gap-2">
                <Mail className="w-4 h-4" />
                Contact Host
              </button>

              <p className="text-xs text-muted-foreground font-body text-center mt-4">You won't be charged yet</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

/* Detail Section wrapper */
const DetailSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="py-6 border-b border-border/30">
    <h2 className="font-display font-semibold text-xl mb-4">{title}</h2>
    {children}
  </div>
);

/* Detail Item for property details grid */
const DetailItem = ({ label, value }: { label: string; value: string }) => (
  <div className="bg-secondary/30 rounded-xl p-4 border border-border/30">
    <p className="text-xs text-muted-foreground font-body mb-1">{label}</p>
    <p className="text-lg font-display font-semibold text-foreground">{value}</p>
  </div>
);

const StatBadge = ({ icon, label }: { icon: string; label: string }) => (
  <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md font-body border border-foreground/20 text-foreground whitespace-nowrap">
    {icon} {label}
  </span>
);

export default VenueDetail;
