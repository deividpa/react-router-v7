import InfoItem from "~/components/infoitem";
import type { Route } from "./+types/country";
import { ArrowLeft, Flag, Globe, MapPin, Users } from "lucide-react";
import { Link } from "react-router";

export async function clientLoader({params}: Route.LoaderArgs) {
  const countryName = params.countryName;

  const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`);
  const data = await res.json();
  return data[0];
}

export default function Country({ loaderData }: Route.ComponentProps) {
  const country = {
    name: loaderData?.translations?.spa?.common || loaderData?.name?.common || "N/A",
    officialName: loaderData?.translations?.spa?.official || loaderData?.name?.official || "N/A",
    region: loaderData?.region || "N/A",
    subregion: loaderData?.subregion || "N/A",
    capital: loaderData?.capital[0] || "N/A",
    area: loaderData?.area,
    population: loaderData?.population,
    flag: loaderData?.flags?.svg || loaderData?.flags?.png,
  }

  return (
    <div className="flex flex-grow bg-gray-100 py-7 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <Link
          to="/countries"
          className="inline-flex items-center text-orange-600 hover:text-orange-800 mb-8 transition-colors duration-200"
        >
          <ArrowLeft className="mr-2" size={20} />
          Volver a la lista de países
        </Link>

        <div className="flex flex-col md:flex-row md:items-center transition-all duration-300 ease-in-out">
          <div className="w-full md:w-1/2">
            <div className="bg-white shadow-xl rounded-lg overflow-hidden">
              <div className="relative h-64 sm:h-80 md:h-96">
                <img
                  src={country.flag}
                  alt={`Bandera de ${country.name}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/5 hover:bg-black/90 mix-blend-multiply flex items-center justify-center transition duration-500 ease-in-out">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center">
                    {country.officialName}
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="rounded-lg overflow-hidden">
              <div className="px-5">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">{country.name}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  <InfoItem icon={<Globe size={24} />} label="Región" value={country.region} />
                  <InfoItem icon={<MapPin size={24} />} label="Subregión" value={country.subregion} />
                  <InfoItem icon={<Flag size={24} />} label="Capital" value={country.capital} />
                  <InfoItem icon={<Users size={24} />} label="Población" value={country.population.toLocaleString()} />
                </div>
                <div className="mt-8 p-3 bg-orange-100 rounded-lg">
                  <h3 className="text-xl font-semibold text-orange-800 mb-2">Área</h3>
                  <p className="text-2xl font-bold text-orange-600">
                    {country.area.toLocaleString()} km<sup>2</sup>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}