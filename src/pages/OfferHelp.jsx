import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useSearchParams } from "react-router-dom"; // ✅ Add this

export default function OfferHelp() {
  const [requests, setRequests] = useState([]);
  const [filter, setFilter] = useState("All");
  const [searchParams] = useSearchParams();
  const categoryFromURL = searchParams.get("category");

  // 1️⃣ Handle URL category parameter
useEffect(() => {
  console.log("✅ OfferHelp component mounted");
  if (categoryFromURL) {
    setFilter(
      categoryFromURL.charAt(0).toUpperCase() + categoryFromURL.slice(1)
    );
  }
}, [categoryFromURL]);

// 2️⃣ Fetch Firestore data and listen for updates
useEffect(() => {
  const unsubscribe = onSnapshot(
    collection(db, "requests"),
    (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("🔥 Firestore data:", data);
      setRequests(data);
    },
    (error) => {
      console.error("❌ Firestore Error:", error);
    }
  );

  // Cleanup listener when component unmounts
  return () => unsubscribe();
}, []);


  // Filter logic
  const filteredRequests =
    filter === "All"
      ? requests
      : requests.filter(
          (req) =>
            req.typeOfNeed?.toLowerCase() === filter.toLowerCase()
        );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 to-purple-600 text-white px-4">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center text-white py-6"
      >
        Offer a Helping Hand 💜
      </motion.h1>
      

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
  {["All", "Food", "Education", "Medical", "Groceries", "Other"].map((cat) => (
    <motion.button
      key={cat}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setFilter(cat)}
      className={`px-5 py-2 rounded-full font-medium ${
        filter === cat
          ? "bg-purple-700 text-white"
          : "bg-white text-purple-700 border border-purple-700 hover:bg-purple-100"
      } transition-all`}
    >
      {cat}
    </motion.button>
  ))}
</div>


      {/* Help Request Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredRequests.map((req) => (
          <motion.div
            key={req.id}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl p-6 transition-all"
          >
            <h2 className="text-xl font-semibold text-purple-700 mb-2">
              {req.name}
            </h2>
            <p className="text-gray-600 text-sm mb-1">
              <strong>📧 Email:</strong> {req.email}
            </p>
            <p className="text-gray-600 text-sm mb-1">
              <strong>📍 Location:</strong> {req.location}
            </p>
            <p className="text-gray-600 text-sm mb-1">
              <strong>💡 Type:</strong> {req.typeOfNeed}
            </p>
            <p className="text-gray-700 mt-2 mb-4 italic">
              “{req.message}”
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800 transition-all w-full"
              onClick={() => alert(`You offered help to ${req.name}!`)}
            >
              Offer Help 🤝
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {filteredRequests.length === 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-gray-200 mt-10"
        >
          No requests found in this category.
        </motion.p>
      )}
    </div>
  );
}
