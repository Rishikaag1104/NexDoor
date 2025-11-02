import React, { useState } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const OfferHelpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    typeOfHelp: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "helpers"), {
        ...formData,
        createdAt: Timestamp.now(),
      });
      alert("✅ Thank you for offering your help!");
      setFormData({
        name: "",
        email: "",
        location: "",
        typeOfHelp: "",
        message: "",
      });
    } catch (error) {
      console.error("Error saving data:", error);
      alert("❌ Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-700 to-indigo-600 text-white px-4">
      <div className="bg-white text-gray-800 rounded-xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Offer Your Help 🤝</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-2 border rounded-lg"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full p-2 border rounded-lg"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="location"
            placeholder="Your Location"
            className="w-full p-2 border rounded-lg"
            value={formData.location}
            onChange={handleChange}
            required
          />

          <select
            name="typeOfHelp"
            className="w-full p-2 border rounded-lg"
            value={formData.typeOfHelp}
            onChange={handleChange}
            required
          >
            <option value="">Select Type of Help</option>
            <option value="food">🍲 Food Delivery</option>
            <option value="education">📚 Tutoring / Education</option>
            <option value="medical">🏥 Medical Aid</option>
            <option value="groceries">🛒 Groceries / Errands</option>
            <option value="other">💬 Other</option>
          </select>

          <textarea
            name="message"
            placeholder="Describe how you can help..."
            className="w-full p-2 border rounded-lg"
            rows="3"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className={`w-full bg-purple-600 text-white py-2 rounded-lg font-semibold transition ${
              loading ? "opacity-60" : "hover:bg-purple-700"
            }`}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default OfferHelpForm;
