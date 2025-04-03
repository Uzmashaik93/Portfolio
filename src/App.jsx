import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";

function App() {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  return (
    <div className="min-h-screen bg-pink-50">
      <Navbar />
      <div className="bg-white shadow-md lg:p-15">
        {/* Hero Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }} // 🔥 Runs animation every time it appears
          variants={variants}
          className="mt-15 border-t-1 border-l-1 border-r-1 border-b-black"
        >
          <Hero />
        </motion.div>
        {/* About Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }} // 🔥 Runs animation every time it appears
          variants={variants}
          className="border-l-1 border-r-1 border-b-black"
        >
          <About />
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }} // 🔥 Runs animation every time it appears
          variants={variants}
          className="border-l-1 border-r-1 border-b-black"
        >
          <Skills />
        </motion.div>
        {/* Projects Section */}
        <div className="border-l-1 border-r-1 border-b-black">
          <Projects />
        </div>
        {/* Contact Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }} // 🔥 Runs animation every time it appears
          variants={variants}
          className="border-l-1 border-r-1 border-b-1 border-b-black"
        >
          <Contact />
        </motion.div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
