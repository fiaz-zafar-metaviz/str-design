import { ArrowRight } from "lucide-react";

const destinations = [
  {
    name: "United States",
    venues: 2800,
    tags: ["Florida", "California", "Hawaii", "Texas", "Colorado"],
    image: "https://www.strwedding.com/Uploads/1756272917_UnitedStatesofAmerica.jpg",
  },
  {
    name: "Caribbean",
    venues: 540,
    tags: ["Bahamas", "Jamaica", "Puerto Rico", "Saint Lucia"],
    image: "https://www.strwedding.com/Uploads/1756357730_1000003184.jpg",
  },
  {
    name: "Mexico",
    venues: 320,
    tags: ["Cancún", "Cabo", "Tulum", "Puerto Vallarta"],
    image: "https://www.strwedding.com/Uploads/1756357753_1000003185.jpg",
  },
  {
    name: "Europe",
    venues: 280,
    tags: ["Spain", "Italy", "Greece", "Turkey"],
    image: "https://www.strwedding.com/Uploads/1765430870_1756357808_1000003177.jpg",
  },
];

const Destinations = () => {
  return (
    <section className="py-24 px-4 bg-dark-gradient">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm tracking-[0.3em] uppercase text-primary/80 text-center mb-3 font-body">
          Destination Collections
        </p>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
          Explore Destinations
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto font-body">
          From coast to coast and across the globe, find your perfect wedding destination
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {destinations.map((dest) => (
            <div
              key={dest.name}
              className="group relative rounded-2xl overflow-hidden aspect-[16/9] cursor-pointer"
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="font-display font-bold text-2xl mb-1">{dest.name}</h3>
                <p className="text-sm text-muted-foreground mb-3 font-body">{dest.venues} venues available</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {dest.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-secondary px-3 py-1 rounded-full text-secondary-foreground font-body">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all font-body">
                  Explore <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
