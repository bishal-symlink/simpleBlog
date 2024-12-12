function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white bg-opacity-30 backdrop-blur-md py-4 z-50 shadow-md">
      <ul className="flex justify-center space-x-6 text-white font-semibold">
        <li>
          <a
            href="/"
            className="hover:text-blue-400 transition-all duration-300 hover:underline hover:underline-offset-4"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/about"
            className="hover:text-blue-400 transition-all duration-300 hover:underline hover:underline-offset-4"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="/blogs"
            className="hover:text-blue-400 transition-all duration-300 hover:underline hover:underline-offset-4"
          >
            Blogs
          </a>
        </li>
        <li>
          <a
            href="/login"
            className="hover:text-blue-400 transition-all duration-300 hover:underline hover:underline-offset-4"
          >
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
