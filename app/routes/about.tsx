import { Globe, Code, ExternalLink } from "lucide-react"
import FeatureCard from "~/components/featurecard"

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Acerca de este Proyecto</h1>

        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="p-6 sm:p-8 md:p-10">
            <p className="text-lg text-gray-700 mb-6">
              Este proyecto ha sido desarrollado como una herramienta de aprendizaje y práctica, centrándose en la
              implementación de conceptos avanzados de React y el uso eficiente de APIs externas.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <FeatureCard
                icon={<Globe className="w-8 h-8 text-orange-500" />}
                title="API de RESTCountries"
                description="Utilizamos la API de RESTCountries para obtener datos actualizados sobre países de todo el mundo."
              />
              <FeatureCard
                icon={<Code className="w-8 h-8 text-orange-500" />}
                title="React Router v7"
                description="Implementamos las últimas características de React Router v7 para una navegación fluida y eficiente."
              />
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Objetivos del Proyecto</h2>
            <ul className="list-disc pl-5 mb-6 text-gray-700 space-y-2">
              <li>Profundizar en el uso de APIs externas y el manejo de datos asíncronos en React.</li>
              <li>Practicar la implementación de rutas dinámicas y navegación con React Router v7.</li>
              <li>Desarrollar habilidades en la creación de interfaces de usuario responsivas y atractivas.</li>
              <li>Explorar técnicas de optimización de rendimiento en aplicaciones React.</li>
            </ul>

            <div className="bg-orange-100 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-orange-800 mb-3">¿Quieres saber más?</h3>
              <p className="text-orange-700 mb-4">
                Este proyecto es de código abierto y está disponible para que otros desarrolladores lo exploren,
                aprendan y contribuyan.
              </p>
              <a
                href="https://github.com/deividpa/react-router-v7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                Ver en GitHub
                <ExternalLink className="ml-2 -mr-1 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <footer className="mt-12 text-center text-gray-600">
          <p>
            Desarrollado con <span className="text-red-500">♥</span> por David Pérez Aguirre
          </p>
          <p className="mt-2">
            Datos proporcionados por{" "}
            <a
              href="https://restcountries.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 hover:text-orange-800"
            >
              RESTCountries
            </a>
          </p>
        </footer>
      </div>
    </div>
  )
}