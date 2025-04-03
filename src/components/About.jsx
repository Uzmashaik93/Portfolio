function About() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-pink-50 to-purple-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-8 sm:mb-12">
          <h2
            className="text-2xl sm:text-3xl font-bold text-purple-800"
            style={{ fontFamily: "'Comic Sans MS', cursive" }}
          >
            About Me
          </h2>
        </div>
        <div className="prose prose-lg mx-auto bg-white p-6 sm:p-8 rounded-3xl shadow-xl max-w-3xl">
          <p className="text-purple-700 text-center text-base sm:text-lg">
            Hello there! I'm a creative developer who loves bringing fun and
            functionality together! With a passion for cute designs and powerful
            code, I create delightful digital experiences that make people
            smile! ✨
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
