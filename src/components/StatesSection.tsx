import { Link } from "react-router-dom";

interface StateCard {
  name: string;
  image: string;
  listings: number;
  comingSoon?: boolean;
}

const usStates: StateCard[] = [
  { name: "Alabama", image: "https://www.strwedding.com/photos/display/stateimg_6785288c643e43.61971806.jpg", listings: 142 },
  { name: "Alaska", image: "https://www.strwedding.com/photos/display/stateimg_678752d4c48c45.31482001.jpg", listings: 28 },
  { name: "Arizona", image: "https://www.strwedding.com/photos/display/stateimg_6787531d38e919.99162711.jpg", listings: 95 },
  { name: "Arkansas", image: "https://www.strwedding.com/photos/display/stateimg_6787534e9d2f47.66422243.jpg", listings: 63 },
  { name: "California", image: "https://www.strwedding.com/photos/display/stateimg_6787538a342147.93731504.jpg", listings: 380 },
  { name: "Colorado", image: "https://www.strwedding.com/photos/display/stateimg_678753b946ff01.90574870.jpg", listings: 175 },
  { name: "Connecticut", image: "https://www.strwedding.com/photos/display/stateimg_678753edb7b4c5.79839651.jpg", listings: 42 },
  { name: "Delaware", image: "https://www.strwedding.com/photos/display/stateimg_6787541fc02f89.49789453.jpg", listings: 18 },
  { name: "Florida", image: "https://www.strwedding.com/photos/display/stateimg_678754978935f4.59121311.jpg", listings: 520 },
  { name: "Georgia", image: "https://www.strwedding.com/photos/display/state603eaedf52ce74ed3dbd088aff8268c36a65a882.png", listings: 165 },
  { name: "Hawaii", image: "https://www.strwedding.com/photos/display/stateimg_678754dfc633f7.79988975.jpg", listings: 88 },
  { name: "Idaho", image: "https://www.strwedding.com/photos/display/stateimg_6787550cd50af3.61073997.jpg", listings: 35 },
  { name: "Illinois", image: "https://www.strwedding.com/photos/display/stateimg_6787551e6d2f11.58649662.jpg", listings: 0, comingSoon: true },
  { name: "Indiana", image: "https://www.strwedding.com/photos/display/stateimg_6787553b7990a7.87211828.jpg", listings: 0, comingSoon: true },
  { name: "Iowa", image: "https://www.strwedding.com/photos/display/stateimg_67875556268c56.54826576.jpg", listings: 0, comingSoon: true },
  { name: "Kentucky", image: "https://www.strwedding.com/photos/display/stateimg_678755aabbb8d2.25766879.jpg", listings: 72 },
  { name: "Louisiana", image: "https://www.strwedding.com/photos/display/stateimg_678755cad83ab3.82254524.jpg", listings: 55 },
  { name: "Maine", image: "https://www.strwedding.com/photos/display/stateimg_678755e5eb63f2.15963023.jpg", listings: 48 },
  { name: "Maryland", image: "https://www.strwedding.com/photos/display/stateimg_678756082e84e3.98621917.jpg", listings: 60 },
  { name: "Michigan", image: "https://www.strwedding.com/photos/display/stateimg_67875641e28556.53792709.jpg", listings: 85 },
  { name: "Mississippi", image: "https://www.strwedding.com/photos/display/stateimg_678756729b5e89.53453210.jpg", listings: 32 },
  { name: "Missouri", image: "https://www.strwedding.com/photos/display/stateimg_678756959e3488.04715111.jpg", listings: 90 },
  { name: "Montana", image: "https://www.strwedding.com/photos/display/stateimg_678756b5f287f5.03312712.jpg", listings: 40 },
  { name: "Nevada", image: "https://www.strwedding.com/photos/display/stateimg_678756dac0a2e4.64512205.jpg", listings: 65 },
  { name: "New York", image: "https://www.strwedding.com/photos/display/stateimg_67875724543f22.31234407.jpg", listings: 210 },
  { name: "North Carolina", image: "https://www.strwedding.com/photos/display/stateimg_6787574735f766.37662908.jpg", listings: 195 },
  { name: "Oregon", image: "https://www.strwedding.com/photos/display/stateimg_678757887e3dd1.08610101.jpg", listings: 78 },
  { name: "Pennsylvania", image: "https://www.strwedding.com/photos/display/stateimg_678757a1411ba2.36720202.jpg", listings: 110 },
  { name: "South Carolina", image: "https://www.strwedding.com/photos/display/stateimg_678757f06bb1d3.57432103.jpg", listings: 145 },
  { name: "Tennessee", image: "https://www.strwedding.com/photos/display/stateimg_678757fc1b44c4.67890304.jpg", listings: 155 },
  { name: "Texas", image: "https://www.strwedding.com/photos/display/stateimg_6787582174ac20.64792368.jpg", listings: 290 },
  { name: "Virginia", image: "https://www.strwedding.com/photos/display/stateimg_67875876cc7da8.77283506.jpg", listings: 120 },
  { name: "Washington", image: "https://www.strwedding.com/photos/display/stateimg_6787589b14e759.66728607.jpg", listings: 95 },
  { name: "Wisconsin", image: "https://www.strwedding.com/photos/display/stateimg_678758c2d62c10.55173708.jpg", listings: 0, comingSoon: true },
  { name: "Wyoming", image: "https://www.strwedding.com/photos/display/stateimg_678758e23d3111.44618809.jpg", listings: 22 },
];

const StatesSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm tracking-[0.3em] uppercase text-primary/80 text-center mb-3 font-body">
          Browse by State
        </p>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
          Short Term Rental Wedding Venues in the USA
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto font-body">
          Explore stunning wedding venues across all 50 states
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {usStates.map((state) => (
            <Link
              key={state.name}
              to={state.comingSoon ? "#" : `/venues?location=${encodeURIComponent(state.name)}`}
              className="group relative block rounded-2xl overflow-hidden aspect-[16/10] cursor-pointer"
            >
              <img
                src={state.image}
                alt={state.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://www.strwedding.com/images/photo-1501785888041-af3ef285b470.jfif";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* State name & listing count */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-display font-semibold text-lg text-white">{state.name}</h3>
                {!state.comingSoon && (
                  <p className="text-xs text-white/70 font-body">{state.listings} listings</p>
                )}
              </div>

              {/* Coming Soon Badge */}
              {state.comingSoon && (
                <div className="absolute top-3 right-3 bg-primary/90 text-primary-foreground text-xs font-semibold font-body px-3 py-1 rounded-lg">
                  Coming Soon
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatesSection;
