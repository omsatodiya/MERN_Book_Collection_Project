import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import { BsTable, BsGrid3X3Gap } from "react-icons/bs";
import BooksTable from "../components/home/BooksTable";
import BooksCard from "../components/home/BooksCard";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");

  useEffect(() => {
    setLoading(true);
    axios
      .get("/api/books")
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Book Collection Manager
          </h1>
          <p className="text-lg text-gray-600">
            Manage and organize your book collection with ease
          </p>
        </div>

        {/* Controls Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          {/* View Toggle */}
          <div className="flex items-center bg-white rounded-lg shadow-sm p-1">
            <button
              className={`flex items-center px-4 py-2 rounded-md transition-all ${
                showType === "table"
                  ? "bg-indigo-500 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
              onClick={() => setShowType("table")}
            >
              <BsTable className="mr-2" />
              Table
            </button>
            <button
              className={`flex items-center px-4 py-2 rounded-md transition-all ${
                showType === "card"
                  ? "bg-indigo-500 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
              onClick={() => setShowType("card")}
            >
              <BsGrid3X3Gap className="mr-2" />
              Cards
            </button>
          </div>

          {/* Add Book Button */}
          <Link
            to="/books/create"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-sm"
          >
            <MdOutlineAddBox className="text-xl mr-2" />
            Add New Book
          </Link>
        </div>

        {/* Content Section */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          {loading ? (
            <div className="flex justify-center">
              <Spinner />
            </div>
          ) : (
            <div className="transition-all duration-300 ease-in-out">
              {showType === "table" ? (
                <BooksTable books={books} />
              ) : (
                <BooksCard books={books} />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
