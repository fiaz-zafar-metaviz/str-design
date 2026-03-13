import { Link } from "react-router-dom";

const BASE = "https://www.strwedding.com";

interface StateCard {
  name: string;
  image: string;
  slug: string;
}

const usStates: StateCard[] = [
  { name: "Alabama", image: `${BASE}/photos/display/stateimg_6785288c643e43.61971806.jpg`, slug: "alabama" },
  { name: "Alaska", image: `${BASE}/photos/display/stateimg_6785294b677c68.04899069.jpg`, slug: "alaska" },
  { name: "Arizona", image: `${BASE}/photos/display/stateimg_6787531d38e919.99162711.jpg`, slug: "arizona" },
  { name: "Arkansas", image: `${BASE}/photos/display/img_67f0d7274668c1.51980489.jpeg`, slug: "arkansas" },
  { name: "California", image: `${BASE}/photos/display/stateimg_6787538a342147.93731504.jpg`, slug: "california" },
  { name: "Colorado", image: `${BASE}/photos/display/img_68071da3ad07e2.91798545.jpg`, slug: "colorado" },
  { name: "Connecticut", image: `${BASE}/photos/display/img_68071e70cfe1e3.83611652.jpg`, slug: "connecticut" },
  { name: "Delaware", image: `${BASE}/photos/display/stateimg_67875464d5a224.17388261.jpg`, slug: "delaware" },
  { name: "Florida", image: `${BASE}/photos/display/stateimg_678754978935f4.59121311.jpg`, slug: "florida" },
  { name: "Georgia", image: `${BASE}/photos/display/state603eaedf52ce74ed3dbd088aff8268c36a65a882.png`, slug: "georgia" },
  { name: "Hawaii", image: `${BASE}/photos/display/stateimg_678754c513cdd9.27816992.jpg`, slug: "hawaii" },
  { name: "Idaho", image: `${BASE}/photos/display/stateimg_678754d8daccf3.31783283.jpg`, slug: "idaho" },
  { name: "Illinois", image: `${BASE}/photos/display/stateimg_678754ec0c0931.54634587.jpg`, slug: "illinois" },
  { name: "Indiana", image: `${BASE}/photos/display/stateimg_6787550d6e3ed5.28017518.jpg`, slug: "indiana" },
  { name: "Iowa", image: `${BASE}/photos/display/stateimg_678755261f0750.82654013.jpg`, slug: "iowa" },
  { name: "Kansas", image: `${BASE}/photos/display/stateimg_678755510c56b6.45499461.jpg`, slug: "kansas" },
  { name: "Kentucky", image: `${BASE}/photos/display/stateimg_6787556ff23099.94407250.jpg`, slug: "kentucky" },
  { name: "Louisiana", image: `${BASE}/photos/display/stateimg_6787558681cf43.67347693.jpg`, slug: "louisiana" },
  { name: "Maine", image: `${BASE}/photos/display/stateimg_678755a0ec0818.49268219.jpg`, slug: "maine" },
  { name: "Maryland", image: `${BASE}/photos/display/stateimg_678755c980fae8.96505117.jpg`, slug: "maryland" },
  { name: "Massachusetts", image: `${BASE}/photos/display/img_68071dd7497293.95220806.jpg`, slug: "massachusetts" },
  { name: "Michigan", image: `${BASE}/photos/display/stateimg_678756214287f0.12671161.jpg`, slug: "michigan" },
  { name: "Minnesota", image: `${BASE}/photos/display/stateimg_6787563c49b791.98130192.jpg`, slug: "minnesota" },
  { name: "Mississippi", image: `${BASE}/photos/display/stateimg_6787564f568640.15915035.jpg`, slug: "mississippi" },
  { name: "Missouri", image: `${BASE}/photos/display/statebd00560a068ae240ab1fe8bc2f4e50afff823e34.jpg`, slug: "missouri" },
  { name: "Montana", image: `${BASE}/photos/display/stateimg_6787565ed78e29.32884666.jpg`, slug: "montana" },
  { name: "Nebraska", image: `${BASE}/photos/display/img_67ce7eaac2ab68.63264045.jpg`, slug: "nebraska" },
  { name: "Nevada", image: `${BASE}/photos/display/stateimg_678756889edfd2.91987526.jpg`, slug: "nevada" },
  { name: "New Hampshire", image: `${BASE}/photos/display/stateimg_678756a3099cb1.98206876.jpg`, slug: "new-hampshire" },
  { name: "New Jersey", image: `${BASE}/photos/display/img_68cbd9e7b469c7.99572692.jpg`, slug: "new-jersey" },
  { name: "New Mexico", image: `${BASE}/photos/display/stateimg_678756ca4f6c51.36099994.jpg`, slug: "new-mexico" },
  { name: "New York", image: `${BASE}/photos/display/stateimg_678756dac0a2e4.64512205.jpg`, slug: "new-york" },
  { name: "North Carolina", image: `${BASE}/photos/display/stateimg_678756f155c4f5.05170211.jpg`, slug: "north-carolina" },
  { name: "North Dakota", image: `${BASE}/photos/display/stateimg_6787572d753294.70113639.jpg`, slug: "north-dakota" },
  { name: "Ohio", image: `${BASE}/photos/display/stateimg_6787574ab75305.88505874.jpg`, slug: "ohio" },
  { name: "Oklahoma", image: `${BASE}/photos/display/stateimg_678757598a5261.55702145.jpg`, slug: "oklahoma" },
  { name: "Oregon", image: `${BASE}/photos/display/stateimg_67875769df0fd3.32919733.jpg`, slug: "oregon" },
  { name: "Pennsylvania", image: `${BASE}/photos/display/stateimg_6787579574d631.96248373.jpg`, slug: "pennsylvania" },
  { name: "Rhode Island", image: `${BASE}/photos/display/img_68071e451df268.72462400.jpg`, slug: "rhode-island" },
  { name: "South Carolina", image: `${BASE}/photos/display/stateimg_678757f06bb1d3.57432103.jpg`, slug: "south-carolina" },
  { name: "South Dakota", image: `${BASE}/photos/display/stateimg_67875800c51252.77274422.jpg`, slug: "south-dakota" },
  { name: "Tennessee", image: `${BASE}/photos/display/stateimg_678758102ba209.55262356.jpg`, slug: "tennessee" },
  { name: "Texas", image: `${BASE}/photos/display/stateimg_6787582174ac20.64792368.jpg`, slug: "texas" },
  { name: "Utah", image: `${BASE}/photos/display/stateimg_6787584d670e44.96906354.jpg`, slug: "utah" },
  { name: "Vermont", image: `${BASE}/photos/display/stateimg_6787585bd72843.15169919.jpg`, slug: "vermont" },
  { name: "Virginia", image: `${BASE}/photos/display/stateimg_6787586f7af809.52760821.jpg`, slug: "virginia" },
  { name: "Washington", image: `${BASE}/photos/display/stateimg_6787587d2be668.04705236.jpg`, slug: "washington" },
  { name: "West Virginia", image: `${BASE}/photos/display/stateimg_6787588ed07cd4.91049648.jpg`, slug: "west-virginia" },
  { name: "Wisconsin", image: `${BASE}/photos/display/stateimg_6787589e500ed9.41933259.jpg`, slug: "wisconsin" },
  { name: "Wyoming", image: `${BASE}/photos/display/stateimg_678758b06f7f96.06518858.jpg`, slug: "wyoming" },
];

const StatesSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
          Short Term Rental Wedding Venues in the USA
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {usStates.map((state) => (
            <Link
              key={state.name}
              to={`/venues?location=${encodeURIComponent(state.name)}`}
              className="group relative block rounded-xl overflow-hidden aspect-[16/10] cursor-pointer"
            >
              <img
                src={state.image}
                alt={state.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `${BASE}/images/photo-1501785888041-af3ef285b470.jfif`;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-display font-semibold text-lg text-white">{state.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatesSection;
