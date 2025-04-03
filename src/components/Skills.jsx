import { Sparkles } from "lucide-react";
import React from "react";

function Skills() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-purple-50 to-pink-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-8 sm:mb-12">
          <h2
            className="text-2xl sm:text-3xl font-bold text-purple-800"
            style={{ fontFamily: "'Comic Sans MS', cursive" }}
          >
            My Skills
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-3xl mx-auto">
          {[
            "JavaScript",
            "React",
            "Node.js",
            "TypeScript",
            "Tailwind CSS",
            "PostgreSQL",
          ].map((skill) => (
            <div
              key={skill}
              className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <p className="text-center text-purple-600 font-medium text-sm sm:text-base">
                {skill}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
