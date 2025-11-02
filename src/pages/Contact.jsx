export default function Contact() {
  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center px-6 py-10 bg-gradient-to-b from-indigo-900 via-purple-800 to-blue-700">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg mb-6 text-center max-w-xl">
        Have suggestions, feedback, or want to volunteer?  
        Fill out the form below and our team will get back to you.
      </p>
      <form className="w-full max-w-md bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-2 mb-4 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-2 mb-4 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none"
        />
        <textarea
          rows="4"
          placeholder="Your Message"
          className="w-full px-4 py-2 mb-4 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none"
        ></textarea>
        <button
          type="submit"
          className="w-full py-2 bg-green-500 hover:bg-green-300 rounded-full font-semibold transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
