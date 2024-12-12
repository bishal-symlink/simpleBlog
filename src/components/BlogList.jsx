import { useState } from "react";
import BlogCard from "./BlogCard"; // Assuming your BlogCard component is already created
import AddBlogModal from "./AddBlogModal"; // Modal component for adding new blog

function BlogList() {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Understanding React Hooks",
      description: "A deep dive into React hooks, useState, useEffect, and more!",
      imageUrl: "https://via.placeholder.com/400x250",
    },
    {
      id: 2,
      title: "JavaScript ES6 Features",
      description: "Exploring the latest features in ES6 and beyond.",
      imageUrl: "https://via.placeholder.com/400x250",
    },
    {
      id: 3,
      title: "Frontend vs Backend",
      description: "What’s the difference between frontend and backend development?",
      imageUrl: "https://via.placeholder.com/400x250",
    },
  ]);

  // Modal state to toggle visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to add a new blog to the list
  const addBlog = (newBlog) => {
    setBlogs([...blogs, { id: blogs.length + 1, ...newBlog }]);
    setIsModalOpen(false); // Close the modal after adding the blog
  };

  return (
    <div className="p-8">
      {/* Add Blog Modal (on top of the list) */}
      {isModalOpen && <AddBlogModal addBlog={addBlog} closeModal={() => setIsModalOpen(false)} />}

      {/* Add New Blog Button (above the list) */}

      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 mb-6">Latest Blog Posts</h2>
      <p className="text-center text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        Stay up-to-date with the latest trends in technology, development, and more. Dive deep into our articles to
        enhance your knowledge.
      </p>
      <div className="text-center mb-6">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
        >
          Add New Blog
        </button>
      </div>

      {/* Blog Cards */}
      <div className="flex flex-wrap justify-around space-x-4 space-y-4">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} post={blog} />
        ))}
      </div>
    </div>
  );
}

export default BlogList;
