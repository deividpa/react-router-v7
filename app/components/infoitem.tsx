export default function InfoItem(
  { icon, label, value }: { icon: React.ReactNode; label: string; value: string | number })
{
  return (
    <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
      <div className="text-orange-500">{icon}</div>
      <div>
        <p className="text-sm font-medium text-gray-500">{label}</p>
        <p className="text-lg font-semibold text-gray-800">{value}</p>
      </div>
    </div>
  )
}