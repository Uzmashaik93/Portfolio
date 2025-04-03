export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 bg-gradient-to-b from-indigo-50 via-pink-50 to-purple-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="pt-12 pb-20 flex flex-col items-center">
          {/* Title */}
          <div className="relative mb-8">
            <h1 className="text-2xl md:text-4xl lg:text-4xl font-bold text-center">
              <span className="inline-block text-gray-900 bg-clip-text">
                Web Developer | Full-Stack & Front-End
              </span>
            </h1>
          </div>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12 text-center">
            I craft clean, elegant designs and seamless code, bringing simple
            ideas to life with passion.
          </p>

          {/* Main illustration with the single animation effect */}
          <div className="w-full max-w-3xl mx-auto mb-16 relative">
            <div className="relative border-4 border-white bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 p-6 md:p-10 rounded-xl">
                <div className="h-64 md:h-80 rounded-lg flex items-center justify-center relative overflow-hidden">
                  {/* Placeholder content */}
                  <div className="relative text-center p-8 bg-white bg-opacity-50 backdrop-blur-sm rounded-xl">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
                      Your Magical Content
                    </h3>
                    <p className="text-gray-600">
                      Illustration or content showcase
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-500 hover:to-pink-600 text-white rounded-full font-medium shadow-md hover:shadow-lg relative overflow-hidden">
              Start Exploring
            </button>
            <button className="px-8 py-4 bg-white text-gray-700 rounded-full font-medium shadow-md hover:shadow-lg border-2 border-teal-200">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
