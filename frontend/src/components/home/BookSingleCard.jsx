import { useState } from "react";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import BookModal from "./BookModal";

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-102 w-full max-w-sm mx-auto">
      {/* Card Content */}
      <div className="p-4 sm:p-6">
        {/* Book Title Section */}
        <div className="flex items-center mb-3 sm:mb-4">
          <PiBookOpenTextLight className="text-xl sm:text-2xl text-indigo-500 flex-shrink-0" />
          <h3 className="ml-2 sm:ml-3 text-base sm:text-lg font-medium text-gray-900 truncate">
            {book.title}
          </h3>
        </div>

        {/* Author Section */}
        <div className="flex items-center mb-3 sm:mb-4">
          <BiUserCircle className="text-xl sm:text-2xl text-indigo-500 flex-shrink-0" />
          <p className="ml-2 sm:ml-3 text-xs sm:text-sm text-gray-600 truncate">
            {book.author}
          </p>
        </div>

        {/* Publish Year Badge */}
        <div className="  sm:top-1 sm:right-1 md:top-2  md:right-2">
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-indigo-300 text-gray-900">
            {book.publishYear}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-2 mt-3 pt-3 border-t border-gray-100">
          <button
            onClick={() => setShowModal(true)}
            className="p-1.5 text-indigo-600 hover:text-indigo-800 rounded-full hover:bg-indigo-50 transition-colors"
            title="Show Details"
          >
            <BiShow className="text-lg" />
          </button>

          <Link
            to={`/books/details/${book._id}`}
            className="p-1.5 text-blue-600 hover:text-blue-800 rounded-full hover:bg-blue-50 transition-colors"
            title="View Info"
          >
            <BsInfoCircle className="text-lg" />
          </Link>

          <Link
            to={`/books/edit/${book._id}`}
            className="p-1.5 text-emerald-600 hover:text-emerald-800 rounded-full hover:bg-emerald-50 transition-colors"
            title="Edit Book"
          >
            <AiOutlineEdit className="text-lg" />
          </Link>

          <Link
            to={`/books/delete/${book._id}`}
            className="p-1.5 text-red-600 hover:text-red-800 rounded-full hover:bg-red-50 transition-colors"
            title="Delete Book"
          >
            <MdOutlineDelete className="text-lg" />
          </Link>
        </div>
      </div>

      {/* Modal Portal */}
      {showModal &&
        createPortal(
          <BookModal book={book} onClose={() => setShowModal(false)} />,
          document.body
        )}
    </div>
  );
};

export default BookSingleCard;
