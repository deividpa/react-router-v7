import { Link } from "react-router";
import type { Route } from "./+types/home";
import { FaArrowRight } from "react-icons/fa6";
import { FaBookReader } from "react-icons/fa";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "RESTExplorer" },
    { name: "Check out country data!", content: "Welcome to RESTExplorer!" },
  ];
}

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center flex-grow bg-gradient-to-b from-orange-100 to-orange-200  text-center">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 relative">
          <img
            src="world.jpg"
            alt="World Image"
            className="w-full h-auto shadow-lg border-r border-gray-800"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-orange-900 mix-blend-overlay filter blur-md" />
        </div>
        <div className="md:w-1/2 md:p-5 mt-5 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-6 text-orange-800">
            Welcome to RESTExplorer
          </h1>
          <p className="text-xl mb-8 text-gray-700 max-w-2xl">
            Discover fascinating information about countries around the world using our intuitive explorer.
          </p>
          <div className="flex flex-row gap-x-3">
            <Link
              to="/countries"
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
            > 
              <span>Start Exploring</span>
              <FaArrowRight className="inline-block ml-2" />
            </Link>
            <Link
              to="/about"
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              <span>Learn more</span>
              <FaBookReader className="inline-block ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
