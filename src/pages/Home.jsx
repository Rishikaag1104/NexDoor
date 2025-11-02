import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImage from "../assets/community.png"; // your image here

const Home = () => {
  return (
    <div className="text-gray-800 bg-gradient-to-br from-purple-100 via-white to-blue-100 min-h-screen flex flex-col overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-20">
        {/* Left Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 text-center md:text-left space-y-6"
        >
          <h1 className="text-5xl font-extrabold text-purple-800 leading-tight">
            Connecting <span className="text-blue-600">Neighbours</span>
            <br /> Who Care ❤️
          </h1>
          <p className="text-lg text-gray-600">
            NexDoor helps people in your community come together — whether you
            need help or want to offer it. Because kindness starts close to home.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <Link to="/help">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-purple-700 text-white rounded-lg shadow-md hover:bg-purple-800 transition-all"
              >
                Get Help
              </motion.button>
            </Link>
            <Link to="/offer">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border-2 border-purple-700 text-purple-700 rounded-lg hover:bg-purple-700 hover:text-white transition-all"
              >
                Offer Help
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 mt-10 md:mt-0"
        >
          <img
            src={heroImage}
            alt="Community Support"
            className="w-full rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white py-16">
        <h2 className="text-3xl font-bold text-center text-purple-800 mb-10">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10 md:px-20">
          {[
            {
              step: "1. Post a Request",
              desc: "Need groceries, help with errands, or support? Post your request easily.",
            },
            {
              step: "2. Offer Help",
              desc: "Check nearby requests and lend a hand to someone who needs it.",
            },
            {
              step: "3. Connect & Support",
              desc: "Once matched, connect safely and make your neighbourhood stronger together.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-purple-50 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-purple-700 mb-2">
                {item.step}
              </h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white"
      >
        <h2 className="text-3xl font-bold mb-4">
          Be the reason someone smiles today 💜
        </h2>
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link to="/help">
            <button className="px-8 py-3 bg-white text-purple-700 font-semibold rounded-lg hover:bg-gray-100 transition-all">
              Get Started
            </button>
          </Link>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Home;
