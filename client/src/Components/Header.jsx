import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  return (
    <header className="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 shadow-md rounded-b-lg fixed top-0 w-full z-50">
      <div className="flex flex-col sm:flex-row justify-between items-center max-w-6xl mx-auto p-3 sm:p-4">
        <div className="w-full sm:w-auto flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
              <span className="text-indigo-700">GharJagga </span>
              <br className="sm:hidden" />
              <span className="text-purple-900">Nepal</span>
            </h1>
          </Link>
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-2 sm:p-3 rounded-lg flex items-center shadow-sm mt-2 sm:mt-0 w-full sm:w-auto"
        >
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className="text-purple-600" />
          </button>
        </form>
        <ul className="flex gap-4 mt-2 sm:mt-0 w-full sm:w-auto justify-center sm:justify-end">
          <Link to="/">
            <li className="text-purple-800 hover:underline">Home</li>
          </Link>
          <Link to="/about">
            <li className="text-purple-800 hover:underline">About</li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <img
                className="rounded-full h-7 w-7 object-cover"
                src={currentUser.avatar}
                alt="profile"
              />
            ) : (
              <li className="text-purple-800 hover:underline">Sign in</li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}
