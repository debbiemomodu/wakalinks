import instagram from "../assets/images/instagram.jpg";  
function Footer() {
  return (
    <footer id="contact" className="bg-sky-50 py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-700">

        {/* Brand */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-sky-400">Follow Us</h4>
          <p className="mb-2">
            <img
              src={instagram}
              alt="Instagram Wakalink Travels"
              className="w-10 h-10 inline-block mr-2 rounded-full object-cover"
            />
            <a
              href="https://www.instagram.com/wakalink_travels?igsh=MTV3bW0wYjYxZzIyMA=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition"
            >
              @wakalink_travels
            </a>
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-sky-400">Contact Us</h4>

          <p className="mb-2">
            📞{" "}
            <a
              href="tel:+2347076847203"
              className="hover:text-sky-400 transition"
            >
              +234 707 684 7203
            </a>
          </p>

          <p className="mb-2">
            ✉️{" "}
            <a
              href="mailto:wakalinktravels@gmail.com"
              className="hover:text-sky-400 transition"
            >
              wakalinktravels@gmail.com
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
            href="https://wa.me/+2347076847203"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-sky-400 text-white px-6 py-3 rounded-lg font-semibold hover:bg-sky-500 transition"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-12 text-sm">
        © {new Date().getFullYear()} Wakalink Travels. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
