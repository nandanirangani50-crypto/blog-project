import { FaSearch } from "react-icons/fa";

function Header() {
  return (
    <header className="flex justify-between items-center px-10 py-4 shadow-[0px_2px_10px_#d1d0d0] sticky top-0 bg-white z-50">

      <div className="text-3xl font-bold">
        <a href="#home">
          MY<span className="text-purple-600">BLOG</span>
        </a>
      </div>

      <ul className="flex gap-8 items-center">
        <li><a href="#home">Home</a></li>
        <li><a href="#blogs">Blogs</a></li>
        <li><a href="#categories">Categories</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="text-xl cursor-pointer hover:text-purple-600">
        <FaSearch />
      </div>

    </header>
  );
}

export default Header;