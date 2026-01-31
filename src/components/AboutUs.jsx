function AboutUs() {
  return (
    <section id="about" className="py-20 bg-sky-50 px-4 sm:px-6 lg:px-20">
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-center text-sky-400 mb-12">
        About Us
      </h2>

      <div className="max-w-4xl mx-auto text-center md:text-left space-y-8">
        {/* Who We Are */}
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-sky-400">
            Who We Are
          </h3>
          <p className="text-gray-700 text-lg md:text-xl">
            Wakalinks Travels is dedicated to making your travel dreams a reality. 
            From visa processing to study abroad guidance and exciting vacation packages, 
            we handle every step with professionalism, care, and expertise.
          </p>
        </div>

        {/* Why Choose Us */}
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-sky-400" id="why-choose-us">
            Why Choose Us?
          </h3>
          <ul className="list-disc list-inside text-gray-700 text-lg md:text-xl space-y-2">
            <li><strong>Expert Guidance:</strong> Our experienced team ensures smooth processing and reliable advice at every step.</li>
            <li><strong>Affordable Packages:</strong> Tailored travel and study packages that fit your budget without compromising quality.</li>
            <li><strong>Reliable Service:</strong> Timely, professional, and trustworthy service that gives you peace of mind.</li>
            <li><strong>Personalized Support:</strong> We listen to your needs and provide customized solutions for your travel and study goals.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
