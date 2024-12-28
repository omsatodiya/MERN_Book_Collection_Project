import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { useState } from "react";
import { createPortal } from "react-dom";
import BookModal from "./BookModal";

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-transparent rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:scale-102">
      {/* Publish Year Badge */}
      <div className="absolute top-4 right-4">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-300 text-grey-900">
          {book.publishYear}
        </span>
      </div>

      {/* Card Content */}
      <div className="p-6">
        {/* Book Title Section */}
        <div className="flex items-center mb-4">
          <PiBookOpenTextLight className="text-indigo-500 text-2xl flex-shrink-0" />
          <h3 className="ml-3 text-lg font-medium text-gray-900 truncate">
            {book.title}
          </h3>
        </div>

        {/* Author Section */}
        <div className="flex items-center mb-4">
          <BiUserCircle className="text-indigo-500 text-2xl flex-shrink-0" />
          <p className="ml-3 text-sm text-gray-600">{book.author}</p>
        </div>

        {/* ID Display */}
        <div className="mb-4">
          <p className="text-xs text-gray-500">ID: {book._id}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-2 mt-4 pt-4 border-t border-gray-100">
          <button
            onClick={() => setShowModal(true)}
            className="p-2 text-indigo-600 hover:text-indigo-800 rounded-full hover:bg-indigo-50 transition-colors"
            title="Show Details"
          >
            <BiShow className="text-xl" />
          </button>

          <Link
            to={`/books/details/${book._id}`}
            className="p-2 text-blue-600 hover:text-blue-800 rounded-full hover:bg-blue-50 transition-colors"
            title="View Info"
          >
            <BsInfoCircle className="text-xl" />
          </Link>

          <Link
            to={`/books/edit/${book._id}`}
            className="p-2 text-emerald-600 hover:text-emerald-800 rounded-full hover:bg-emerald-50 transition-colors"
            title="Edit Book"
          >
            <AiOutlineEdit className="text-xl" />
          </Link>

          <Link
            to={`/books/delete/${book._id}`}
            className="p-2 text-red-600 hover:text-red-800 rounded-full hover:bg-red-50 transition-colors"
            title="Delete Book"
          >
            <MdOutlineDelete className="text-xl" />
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
