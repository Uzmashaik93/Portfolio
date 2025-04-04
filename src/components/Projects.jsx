import { ExternalLink } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const cardVariants = [
  {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }, // Fade-in with zoom-in
  {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }, // Fade-in with zoom-in
];

const parentVariants = {
  visible: { transition: { staggerChildren: 0.2 } }, // Stagger animation by 0.2s
};

function Projects() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-pink-50 to-purple-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-8 sm:mb-12">
          <h2
            className="text-2xl sm:text-3xl font-bold text-purple-800"
            style={{ fontFamily: "'Comic Sans MS', cursive" }}
          >
            My Creations
          </h2>
        </div>

        {/* Motion Parent Container */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }} // Runs animation every time visible
          variants={parentVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto "
        >
          {[1, 2, 3, 4].map((project, index) => (
            <motion.div
              key={project}
              variants={cardVariants[index % cardVariants.length]} // Apply fade-in with zoom-in for each card
              className="bg-white rounded-lg overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <img
                src={`https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&q=80&w=800`}
                alt={`Project ${project}`}
                className="w-full h-40 sm:h-48 object-cover"
              />
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-purple-800 mb-1">
                  Project Title {project}
                </h3>
                <p className="text-purple-600 mb-4 text-xs font-light sm:text-base">
                  A magical project that brings joy and innovation together!
                </p>
                <div className="flex flex-wrap gap-2 sm:flex-nowrap sm:justify-between sm:items-center">
                  <div className="flex flex-wrap gap-1 font-extralight text-xs">
                    <span className="px-2 sm:px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-xs sm:text-sm">
                      React
                    </span>
                    <span className="px-2 sm:px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-xs sm:text-sm">
                      Node.js
                    </span>
                    <span className="px-2 sm:px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-xs sm:text-sm">
                      Node.js
                    </span>
                  </div>
                  <a
                    href="#"
                    className="text-purple-500 hover:text-purple-700 flex items-center sm:text-base mt-2 sm:mt-0"
                  >
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
