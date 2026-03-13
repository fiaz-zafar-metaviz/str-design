const BASE = "https://www.strwedding.com";

interface Destination {
  name: string;
  image: string;
  comingSoon?: boolean;
}

const destinations: Destination[] = [
  { name: "Caribbean", image: `${BASE}/Uploads/1765429929_1756357735_1000003187.jpg` },
  { name: "Mexico", image: `${BASE}/Uploads/1756357748_1000003184.jpg`, comingSoon: true },
  { name: "Canada", image: `${BASE}/Uploads/1756357764_1000003183.jpg` },
  { name: "Central America", image: `${BASE}/Uploads/1765430101_1756357779_1000003178.jpg` },
  { name: "South America", image: `${BASE}/Uploads/1765430190_1756357791_1000003182.jpg`, comingSoon: true },
  { name: "Europe", image: `${BASE}/Uploads/1765430870_1756357808_1000003177.jpg` },
  { name: "Private Islands", image: `${BASE}/Uploads/1756357865_1000003176.jpg` },
  { name: "Asia", image: `${BASE}/Uploads/1765430988_1756357821_1000003179.jpg`, comingSoon: true },
  { name: "Africa", image: `${BASE}/Uploads/1765431124_1756357833_1000003181.jpg`, comingSoon: true },
  { name: "Oceania", image: `${BASE}/Uploads/1765431563_1756357851_1000003180.jpg` },
];

const Destinations = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
          Destination Collections
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {destinations.map((dest) => (
            <div
              key={dest.name}
              className="group relative block rounded-xl overflow-hidden aspect-[16/9] cursor-pointer"
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Dark overlay for coming soon */}
              {dest.comingSoon && (
                <div className="absolute inset-0 bg-black/40" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Coming Soon text */}
              {dest.comingSoon && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold text-lg tracking-widest animate-pulse z-10">
                  Coming Soon
                </div>
              )}

              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-display font-semibold text-xl text-white">
                  Short Term Rental Wedding Venues in {dest.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
