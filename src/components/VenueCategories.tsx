import venueBeach from "@/assets/venue-beach.jpg";
import venueGarden from "@/assets/venue-garden.jpg";
import venueVilla from "@/assets/venue-villa.jpg";
import venueDestination from "@/assets/venue-destination.jpg";
import venueCastle from "@/assets/venue-castle.jpg";

const categories = [
  { name: "Beach Weddings", count: 840, image: venueBeach },
  { name: "Garden Weddings", count: 620, image: venueGarden },
  { name: "Luxury Villas", count: 1200, image: venueVilla },
  { name: "Destination Weddings", count: 950, image: venueDestination },
  { name: "Castle Venues", count: 180, image: venueCastle },
];

const VenueCategories = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm tracking-[0.3em] uppercase text-primary/80 text-center mb-3 font-body">
          Explore by Style
        </p>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16">
          Venue Categories
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="font-display font-semibold text-lg">{cat.name}</h3>
                <p className="text-sm text-muted-foreground font-body">{cat.count} venues</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VenueCategories;
