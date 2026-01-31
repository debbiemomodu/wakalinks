import plane from "../assets/images/plane.jpg";
function Home() {
  return (
    <section id="home" className="min-h-screen flex flex-col bg-sky-50 pt-20 px-4">
      <div className="text-center max-w-3xl mx-auto">
        {/* Hero Image */}
                     <img
  src={plane}
  alt="Travel illustration"
  className="w-full h-auto max-h-24 sm:max-h-32 md:max-h-40 lg:max-h-48 rounded-xl shadow-lg mb-8 object-cover"
/>



        {/* Headline */}
        <h5 className="text-4xl md:text-5xl font-bold text-sky-400 pt-6 italic">
          Welcome to Wakalink Travels
        </h5>

        {/* Subtext */}
        <p className="mt-4 text-lg md:text-xl text-gray-700 mb-6">
          Explore the world with us — seamless visa processing, exciting vacation packages, and study abroad guidance all in one place.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a
            href="#services"
            className="bg-sky-400 text-white px-6 py-3 rounded-lg hover:bg-sky-500 transition"
          >
            Explore Services
          </a>
          <a
            href="#why-choose-us"
            className="bg-orange-400 text-white px-6 py-3 rounded-lg hover:bg-orange-500 transition"
          >
            Why Choose Us?
          </a>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2">Visa Processing</h3>
            <p className="text-gray-600">
              We handle visa applications smoothly for all destinations.
            </p>
          </div>

          <div className="p-6 bg-sky-100 rounded-lg shadow-md hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2">Study Abroad</h3>
            <p className="text-gray-600">
              Guidance and assistance to make your study abroad journey effortless.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2">Vacation Packages</h3>
            <p className="text-gray-600">
              Exciting local and international vacation packages tailored for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
