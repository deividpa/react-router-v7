export default function FeatureCard(
  { icon, title, description }: { icon: React.ReactNode; title: string; description: string }
) {
  return (
    <div className="bg-gray-50 rounded-lg p-6 shadow-md">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="ml-3 text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-700">{description}</p>
    </div>
  )
}
