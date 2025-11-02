import { useState } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const PostRequest = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    typeOfNeed: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "requests"), formData);
      alert("✅ Your request has been posted successfully!");
      setFormData({
        name: "",
        email: "",
        location: "",
        typeOfNeed: "",
        message: "",
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-700 to-purple-600 text-white px-4">
      <div className="bg-white text-gray-800 rounded-xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">
          Post a Help Request 🙏
        </h1>

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
            name="typeOfNeed"
            className="w-full p-2 border rounded-lg"
            value={formData.typeOfNeed}
            onChange={handleChange}
            required
          >
            <option value="">Select Type of Need</option>
            <option value="food">🍲 Food</option>
            <option value="education">📚 Education Support</option>
            <option value="medical">🏥 Medical Help</option>
            <option value="groceries">🛒 Groceries</option>
            <option value="other">💬 Other</option>
          </select>

          <textarea
            name="message"
            placeholder="Describe your situation..."
            className="w-full p-2 border rounded-lg"
            rows="3"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostRequest;
