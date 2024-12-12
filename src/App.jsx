import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import BlogCard from "./components/BlogCard";
import Footer from "./components/Footer";

import blogoneImage from "./assets/blog1.gif";
import blogtwoImage from "./assets/blog2.jpg";
import blogthreeImage from "./assets/nature.jpg";
import BlogList from "./components/BlogList";
import About from "./components/About";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding React Hooks",
      description: "A deep dive into React hooks, useState, useEffect, and more!",
      imageUrl: blogoneImage,
    },
    {
      id: 2,
      title: "JavaScript ES6 Features",
      description: "Exploring the latest features in ES6 and beyond.",
      imageUrl: blogtwoImage,
    },
    {
      id: 3,
      title: "Frontend vs Backend",
      description: "What’s the difference between frontend and backend development?",
      imageUrl: blogthreeImage,
    },
  ];

  return (
    <div className="font-sans text-gray-900">
      <Navbar />
      <Banner />
      <div className="p-8 bg-gradient-to-r from-slate-100 via-sky-100 to-sky-200">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 text-center mb-6 transform hover:scale-105 transition-transform duration-300">
          Latest Blog Posts
        </h2>
        <p className="text-center text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Stay up-to-date with the latest trends in technology, development, and more. Dive deep into our articles to
          enhance your knowledge and skillset.
        </p>
        <div className="flex flex-wrap justify-around space-x-1 space-y-4">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
      <BlogList />
      <About />
      <Login />
      <SignUp />
      <Footer />
    </div>
  );
}

export default App;
