import { getAllPackages } from '@/lib/tebex';

export default async function ScriptsPage() {
  const packages = await getAllPackages();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">FiveM Scripts</h1>
      <div className="grid gap-6">
        {packages.map((pkg) => (
          <div key={pkg.id} className="border p-4 rounded shadow-sm">
            <h2 className="text-xl font-semibold">{pkg.name}</h2>
            <p className="text-gray-600">{pkg.description}</p>
            <p className="text-green-600 font-bold">${pkg.price / 100}</p>
            <a
              href={pkg.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Buy Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}