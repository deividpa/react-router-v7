import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="shadow-lg text-white py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} RESTExplorer: Made with ❤️ by David Pérez
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link
            to="https://github.com/deividpa"
          >
            <FaGithub className="w-6 h-6 hover:text-gray-300 transition" />
          </Link>
          <Link
            to="https://www.linkedin.com/in/david-perez-aguirre/"
          >
            <FaLinkedin className="w-6 h-6 hover:text-gray-300 transition" />
          </Link>
        </div>
      </div>
    </footer>
  );
}