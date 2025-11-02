import React from "react";
import communityImg from "../assets/support.png"; // Add a relevant image in /src/assets/
import helpingHands from "../assets/helping-hand.png"; // Another image

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-100 flex flex-col items-center py-16 px-6 md:px-20">
      
      {/* Hero Section */}
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl font-bold text-purple-700 mb-6">
          About <span className="text-blue-600">NexDoor</span>
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          NexDoor is your local community support network — where people come together 
          to help each other in times of need. Whether it’s delivering groceries to a 
          neighbor, finding a blood donor, or helping the elderly with daily tasks, 
          NexDoor brings kindness closer to home. 💜
        </p>
      </div>

      {/* Image + Text Section */}
      <div className="mt-16 flex flex-col md:flex-row items-center gap-12 max-w-6xl">
        <img
          src={communityImg}
          alt="Community"
          className="w-full md:w-1/2 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
        />
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold text-purple-700 mb-4">
            Our Mission 🌍
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We aim to create a connected neighborhood where everyone looks out 
            for each other. NexDoor’s platform allows users to post help requests 
            — from small errands to urgent needs — and volunteers can offer help 
            in just a few clicks. It’s about transforming compassion into action.
          </p>
        </div>
      </div>

      {/* Another Section */}
      <div className="mt-20 flex flex-col-reverse md:flex-row items-center gap-12 max-w-6xl">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold text-purple-700 mb-4">
            Why We Started 💡
          </h2>
          <p className="text-gray-700 leading-relaxed">
            In an age of digital disconnection, we saw a simple truth: 
            *help is just around the corner*. NexDoor started as a small initiative 
            during tough times — when neighbors supported each other without hesitation. 
            Today, we’re turning that spirit into a digital platform that makes 
            community care easier, faster, and more impactful.
          </p>
        </div>
        <img
          src={helpingHands}
          alt="Helping Hands"
          className="w-full md:w-1/2 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Call-to-Action */}
      <div className="mt-24 text-center">
        <h3 className="text-3xl font-bold text-purple-700 mb-4">
          Be a Part of the Change ✨
        </h3>
        <p className="text-gray-600 mb-6">
          Whether you need help or want to lend a hand — NexDoor makes it easy 
          to connect with caring people nearby.
        </p>
        <button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105">
          Join the Community
        </button>
      </div>

    </div>
  );
}
