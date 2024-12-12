function BlogCard({ post }) {
  return (
    <div className="bg-white rounded-lg shadow-md w-80 overflow-hidden transform transition-all duration-300 hover:scale-105 hover:cursor-pointer hover:shadow-xl">
      <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
        <p className="text-gray-600 mb-4">{post.description}</p>
        <a href={`/blog/${post.id}`} className="text-blue-500 hover:underline">
          Read More
        </a>
      </div>
    </div>
  );
}

export default BlogCard;
