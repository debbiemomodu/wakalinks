import visa from '../assets/images/visa.jpg';
import study from '../assets/images/studyabroad.jpg';
import vacation from '../assets/images/vacation.jpg';

function Services() {
  return (
    <section id="services" className="py-20 bg-white px-4 sm:px-6 lg:px-20">
      <h2 className="text-4xl font-bold text-center text-sky-400 mb-16">
        Our Services
      </h2>

      {/* Visa Processing */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 mb-16">
        <div className="md:w-1/2 w-full">
  <img
    src={visa}
    alt="Visa Processing"
    className="rounded-lg shadow-md w-full max-h-85 object-cover"
  />
</div>

        <div className="md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-sky-400">
            Visa Processing
          </h3>
          <p className="text-gray-700 mb-4">
            We handle visa applications for multiple countries. Our team ensures all your documents are correct, guides you through embassy requirements, and makes the process fast and stress-free.
          </p>
          <ul className="list-disc pl-5 text-gray-600 mb-4 text-left md:text-left">
            <li>Student, tourist, and business visas</li>
            <li>Document verification and guidance</li>
            <li>Fast and reliable service</li>
          </ul>
          <a
            href="#contact"
            className="bg-sky-400 text-white px-6 py-3 rounded-lg hover:bg-sky-500 transition inline-block"
          >
            Book Now
          </a>
        </div>
      </div>

      {/* Study Abroad */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-8 mb-16">
        <div className="md:w-1/2">
          <img
            src={study}
            alt="Study Abroad"
            className="rounded-lg shadow-md w-full h-auto"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-sky-400">
            Study Abroad
          </h3>
          <p className="text-gray-700 mb-4">
            Our experts provide full guidance for studying abroad: choosing universities, applying for admissions, securing scholarships, and handling travel logistics.
          </p>
          <ul className="list-disc pl-5 text-gray-600 mb-4 text-left md:text-left">
            <li>University selection and admission guidance</li>
            <li>Scholarship and financial planning</li>
            <li>Visa and travel support</li>
          </ul>
          <a
            href="#contact"
            className="bg-sky-400 text-white px-6 py-3 rounded-lg hover:bg-sky-500 transition inline-block"
          >
            Book Now
          </a>
        </div>
      </div>

      {/* Vacation Packages */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 mb-16">
        <div className="md:w-1/2">
          <img
            src={vacation}
            alt="Vacation Packages"
            className="rounded-lg shadow-md w-full h-auto"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-sky-400">
            Vacation Packages
          </h3>
          <p className="text-gray-700 mb-4">
            Explore our curated vacation packages for local and international destinations. We plan your trip to ensure comfort, fun, and unforgettable memories.
          </p>
          <ul className="list-disc pl-5 text-gray-600 mb-4 text-left md:text-left">
            <li>Luxury, budget, and family packages</li>
            <li>Custom itineraries</li>
            <li>Assistance with travel bookings and accommodation</li>
          </ul>
          <a
            href="#contact"
            className="bg-sky-400 text-white px-6 py-3 rounded-lg hover:bg-sky-500 transition inline-block"
          >
            Book Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;
