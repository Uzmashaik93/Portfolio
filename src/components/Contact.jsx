import { Heart, Mail } from "lucide-react";
import React from "react";

function Contact() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-purple-50 to-pink-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-8 sm:mb-12">
          <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-pink-500 mr-3 fill-pink-500" />
          <h2
            className="text-2xl sm:text-3xl font-bold text-purple-800"
            style={{ fontFamily: "'Comic Sans MS', cursive" }}
          >
            Let's Connect!
          </h2>
        </div>
        <div className="max-w-2xl mx-auto text-center px-4">
          <p className="text-purple-600 mb-6 sm:mb-8 text-base sm:text-lg">
            Have a project in mind? Let's create something amazing together!
          </p>
          <a
            href="mailto:your@email.com"
            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-colors duration-300 shadow-lg hover:shadow-purple-300 text-sm sm:text-base"
          >
            Send Me a Message
            <Mail className="h-4 w-4 sm:h-5 sm:w-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
