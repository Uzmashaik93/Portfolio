import { Heart } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-white sm:py-8 shadow-inner bg-gradient-to-r from-pink-100 to-purple-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-purple-600 text-sm sm:text-base">
          © {new Date().getFullYear()} Your Name. Made with
          <Heart className="inline h-4 w-4 fill-pink-500 text-pink-500" />
        </p>
      </div>
    </footer>
  );
}

export default Footer;
