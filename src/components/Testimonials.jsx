function Testimonials() {
  const reviews = [
    {
      feedback: "Wakalink Travels made my study abroad process seamless. From visa guidance to university admission, everything was handled professionally!",
      name: "Amina O.",
      rating: 5,
    },
    {
      feedback: "Our family vacation to Dubai was unforgettable! Every detail was planned perfectly. Highly recommended.",
      name: "Emeka L.",
      rating: 5,
    },
    {
      feedback: "I never thought international travel could be this stress-free. Wakalink team took care of everything from start to finish.",
      name: "Chinwe M.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-sky-50 px-4 sm:px-6 lg:px-20">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-sky-400 mb-12">
          What Our Travelers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition transform hover:-translate-y-2"
            >
              {/* Feedback */}
              <p className="text-gray-700 mb-4 italic">“{review.feedback}”</p>

              {/* Name */}
              <p className="font-semibold text-sky-500 mb-2">— {review.name}</p>

              {/* Star Rating */}
              <div className="flex justify-center md:justify-start">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-yellow-400"
                  >
                    <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.78 1.402 8.174L12 18.897l-7.336 3.867 1.402-8.174L.132 9.21l8.2-1.192z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}

export default Testimonials;
