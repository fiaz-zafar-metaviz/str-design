import { Star, Users } from "lucide-react";
import { Link } from "react-router-dom";
import venueBeach from "@/assets/venue-beach.jpg";
import venueVilla from "@/assets/venue-villa.jpg";
import venueMountain from "@/assets/venue-mountain.jpg";
import venueIsland from "@/assets/venue-island.jpg";
import venueVineyard from "@/assets/venue-vineyard.jpg";
import venueGarden from "@/assets/venue-garden.jpg";

const venues = [
  { id: 1, name: "Oceanfront Paradise Estate", location: "Malibu, California", price: "$4,500/night", guests: 150, rating: 4.9, reviews: 128, image: venueBeach },
  { id: 2, name: "Villa Serenity", location: "Tuscany, Italy", price: "$3,800/night", guests: 100, rating: 4.8, reviews: 94, image: venueVilla },
  { id: 3, name: "Alpine Grand Lodge", location: "Aspen, Colorado", price: "$5,200/night", guests: 200, rating: 5.0, reviews: 56, image: venueMountain },
  { id: 4, name: "Private Island Retreat", location: "The Bahamas", price: "$12,000/night", guests: 80, rating: 4.9, reviews: 42, image: venueIsland },
  { id: 5, name: "Vineyard Estate", location: "Napa Valley, California", price: "$3,200/night", guests: 120, rating: 4.7, reviews: 78, image: venueVineyard },
  { id: 6, name: "Rose Garden Manor", location: "Charleston, South Carolina", price: "$2,800/night", guests: 90, rating: 4.8, reviews: 115, image: venueGarden },
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
          <Link to="/venues" className="border border-primary/30 text-primary px-8 py-3 rounded-xl hover:bg-primary/10 transition-colors font-body font-medium inline-block">
            View All Venues
          </Link>
        </div>
      </div>
    </section>
  );
};

const VenueCard = ({ name, location, price, guests, rating, reviews, image }: typeof venues[0]) => (
  <div className="group rounded-2xl overflow-hidden bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 cursor-pointer">
    <div className="relative overflow-hidden aspect-[4/3]">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-lg text-sm font-semibold font-body">
        {price}
      </div>
    </div>
    <div className="p-5">
      <h3 className="font-display font-semibold text-lg mb-1">{name}</h3>
      <p className="text-muted-foreground text-sm mb-3 font-body">{location}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 text-sm text-muted-foreground font-body">
          <Users className="w-4 h-4" />
          Up to {guests} guests
        </div>
        <div className="flex items-center gap-1 text-sm font-body">
          <Star className="w-4 h-4 fill-primary text-primary" />
          <span className="text-foreground font-medium">{rating}</span>
          <span className="text-muted-foreground">({reviews})</span>
        </div>
      </div>
    </div>
  </div>
);

export default FeaturedVenues;
