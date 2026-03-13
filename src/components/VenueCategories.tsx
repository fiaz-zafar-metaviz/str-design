const categories = [
  { name: "Beach Weddings", count: 840, image: "https://www.strwedding.com/images/beach.jpg" },
  { name: "Waterfront", count: 620, image: "https://www.strwedding.com/images/waterfront.jpg" },
  { name: "Amazing Views", count: 1200, image: "https://www.strwedding.com/images/amazing-event-weddign.jpg" },
  { name: "Pool Venues", count: 950, image: "https://www.strwedding.com/images/indoor-pool.jpg" },
  { name: "Castle Venues", count: 180, image: "https://www.strwedding.com/photos/display/stateimg_6787538a342147.93731504.jpg" },
];

const VenueCategories = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm tracking-[0.3em] uppercase text-primary/80 text-center mb-3 font-body">
          Explore by Style
        </p>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
          Venue Categories
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-lg mx-auto font-body">
          Browse our curated collection of wedding venue styles
        </p>

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
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent group-hover:from-background/95 transition-all duration-300" />
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
