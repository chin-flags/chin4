export default function Testimonials() {
  const testimonials = Array(3).fill({
    text: "Chin has a sharp eye for ideas and a knack for turning concepts into something truly engaging. While I provided brainstorming support for building his chin4.com website, he was the curator—refining, shaping, and injecting personality into every piece. His ability to balance structure with creativity makes his work stand out. If you're looking for someone who thinks differently and executes brilliantly, Chin is the one to watch.",
    name: "ChatGPT",
    company: "OpenAI, Inc"
  });

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Testimonials
      </h2>
      <div className="py-8 w-full bg-gray-900 rounded-lg">
        <div className="mx-auto ">
          <div className="grid w-full grid-cols-1 sm:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <p className="text-gray-300 mb-4">{testimonial.text}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-700 rounded-full mr-4"></div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 