import localTrip from '../assets/images/localtour.jpg';
import internationalTrip from '../assets/images/internationaltour.jpg';
import groupTrip from '../assets/images/grouptour.jpg';

function Destinations() {
  return (
    <section id="destinations" className="py-20 bg-white px-4 sm:px-6 lg:px-20">
      <h2 className="text-4xl font-bold text-center text-sky-400 mb-12">
        Explore Destinations
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Local Trip */}
        <div className="rounded-lg shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-2">
          <img src={localTrip} alt="Local Tours" className="w-full h-64 object-cover"/>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2 text-sky-400">Local Tours</h3>
            <p className="text-gray-700 mb-2">Discover the beauty of your own country with curated local tours.</p>
             <a
  href="#contact"
  className="inline-block bg-sky-400 text-white px-5 py-2 rounded-lg font-medium hover:bg-sky-500 transition"
>
  Book Now
</a>

          </div>
        </div>

        {/* International Trip */}
        <div className="rounded-lg shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-2">
          <img src={internationalTrip} alt="International Tours" className="w-full h-64 object-cover"/>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2 text-sky-400">International Tours</h3>
            <p className="text-gray-700 mb-2">Explore top international destinations with our tailored packages.</p>
              <a
  href="#contact"
  className="inline-block bg-sky-400 text-white px-5 py-2 rounded-lg font-medium hover:bg-sky-500 transition"
>
  Book Now
</a>

          </div>
        </div>

        {/* Group Trip */}
        <div className="rounded-lg shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-2">
          <img src={groupTrip} alt="Group Trips" className="w-full h-64 object-cover"/>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2 text-sky-400">Group Trips</h3>
            <p className="text-gray-700 mb-2">Organize trips with friends, family, or corporate groups easily.</p>
               <a
  href="#contact"
  className="inline-block bg-sky-400 text-white px-5 py-2 rounded-lg font-medium hover:bg-sky-500 transition"
>
  Book Now
</a>
  
          </div>
        </div>
      </div>
    </section>
  );
}

export default Destinations;
