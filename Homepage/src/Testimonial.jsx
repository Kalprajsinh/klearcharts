import React, { useState } from 'react';

function Testimonial() {
  const testimonials = [
    {
      name: "Alice Johnson",
      email: "alize@gmail.com",
      text: "This is a testimonial from Alice Johnson.",
      photo: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
      rating: 5
    },
    {
      name: "Charlie Brown",
      email: "alize@gmail.com",
      text: "This is a testimonial from Charlie Brown. This is a testimonial from Frank Miller.",
      photo: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
      rating: 4
    },
    {
      name: "Dave Wilson",
      email: "alize@gmail.com",
      text: "This is a testimonial from Dave Wilson. This is a testimonial from Frank Miller. This is a testimonial from Frank Miller.",
      photo: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
      rating: 3
    },
    {
      name: "Eve Davis",
      email: "alize@gmail.com",
      text: "This is a testimonial from Eve Davis. This is a testimonial from Frank Miller.",
      photo: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
      rating: 5
    },
    {
      name: "Frank Miller",
      email: "alize@gmail.com",
      text: "This is a testimonial from Frank Miller. ".repeat(5),
      photo: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
      rating: 4
    }
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {testimonials.map((testimonial, index) => {
        const isExpanded = expandedIndex === index;
        const shouldTruncate = testimonial.text.length > 120 && !isExpanded;

        return (
          <div
            key={index}
            className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg duration-300 flex flex-col"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={testimonial.photo}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                <p className="text-zinc-400 text-sm">{testimonial.email}</p>
              </div>
            </div>

            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 ${
                    i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .587l3.668 7.568L24 9.423l-6 5.898L19.335 24 12 19.897 4.665 24 6 15.321 0 9.423l8.332-1.268z" />
                </svg>
              ))}
            </div>

            <p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed">
              "{shouldTruncate ? testimonial.text.slice(0, 120) + '...' : testimonial.text}"
              {testimonial.text.length > 120 && (
                <button
                  onClick={() =>
                    setExpandedIndex(isExpanded ? null : index)
                  }
                  className="ml-2 text-blue-500 hover:underline text-xs"
                >
                  {isExpanded ? 'Show less' : 'Read more'}
                </button>
              )}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Testimonial;
