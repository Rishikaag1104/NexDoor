import { Link } from "react-router-dom";

export default function HelpRequests() {
  const categories = [
    { name: "Food", desc: "Provide meals or essential food supplies." },
    { name: "Education", desc: "Help with tutoring, study materials, or online learning." },
    { name: "Medical", desc: "Assist with medicines or health check-ups." },
    { name: "Groceries", desc: "Deliver groceries or basic household needs." },
    { name: "Other", desc: "Any other form of support or help." },
  ];

  return (
    <div className="min-h-screen text-white px-6 py-10 bg-gradient-to-b from-indigo-900 via-purple-800 to-blue-700">
      <h1 className="text-4xl font-bold text-center mb-8">
        Help Requests by Category 💡
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:scale-105 transition"
          >
            <h2 className="text-2xl font-semibold mb-2">{cat.name}</h2>
            <p className="mb-4 text-gray-200">{cat.desc}</p>

            <Link to={`/offer?category=${cat.name.toLowerCase()}`}>
              <button className="px-4 py-2 bg-green-600 hover:bg-green-400 rounded-full text-white font-semibold transition">
                View Requests →
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
