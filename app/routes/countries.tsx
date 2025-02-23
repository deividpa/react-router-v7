import { useState } from "react";
import { Link } from "react-router";
import type { Route } from "./+types/countries";

export async function clientLoader() {
  // fetch data from https://restcountries.com/v3.1/all
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();
  return data;
}

export default function Countries({ loaderData }: Route.ComponentProps) {
  const [search, setSearch] = useState<string>("");
  const [region, setRegion] = useState<string>("all");

  const filteredCountries = loaderData.filter((country: any) => {
    const matchesRegion = !region || country.region.toLowerCase() === region.toLowerCase();
    const matchesCountry = country.translations.spa.common.toLowerCase().includes(search.toLowerCase());
    
    return matchesRegion && matchesCountry;
  });

  return (
    <div className="flex flex-grow bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Países</h1>

        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Busca un país por su nombre"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-grow px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
          <select
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white"
          >
            <option value="">Filtrar por continente</option>
            <option value="africa">África</option>
            <option value="americas">América</option>
            <option value="asia">Asia</option>
            <option value="europe">Europa</option>
            <option value="oceania">Oceanía</option>
          </select>
        </div>
        {filteredCountries.length === 0 && (
          <p className="text-gray-600 text-center">No hay países que coincidan con tu búsqueda.</p>
        )}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCountries.map((country: any, key: number) => (
            <li
              key={country.translations.spa.common}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <Link to={`/countries/${country.name.common}`} className="block p-6 h-full">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{country.translations.spa.common}</h2>
                <div className="text-gray-600">
                  <p>
                    <span className="font-medium text-orange-600">Región:</span> {country.region}
                  </p>
                  <p>
                    <span className="font-medium text-orange-600">Capital:</span> {country.capital}
                  </p>
                  <p>
                    <span className="font-medium text-orange-600">Población:</span>{" "}
                    {country.population.toLocaleString()}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}