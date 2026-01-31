function Footer() {
  return (
    <footer id="contact" className="bg-sky-50 py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-700">

        {/* Brand */}
        <div>
          <a href="#home">
            <h3 className="text-2xl font-bold mb-4 text-sky-400 hover:text-sky-500 transition">
              Wakalinks Travels
            </h3>
          </a>
          <p>
            Making your travel dreams a reality.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-sky-400">Contact Us</h4>

          <p className="mb-2">
            📞{" "}
            <a
              href="tel:+2348012345678"
              className="hover:text-sky-400 transition"
            >
              +234 806 369 0700
            </a>
          </p>

          <p className="mb-2">
            ✉️{" "}
            <a
              href="mailto:waklinkstravels@gmail.com"
              className="hover:text-sky-400 transition"
            >
              wakalinkstravels@gmail.com
            </a>
          </p>

          <p>📍 Nigeria</p>
        </div>

        {/* CTA */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-sky-400">
            Book Your Trip
          </h4>
          <p className="mb-4">
            Ready to start your journey? Talk to our travel experts today.
          </p>

          <a
            href="https://wa.me/2348063690700"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-sky-400 text-white px-6 py-3 rounded-lg font-semibold hover:bg-sky-500 transition"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-12 text-sm">
        © {new Date().getFullYear()} Wakalinks Travels. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
