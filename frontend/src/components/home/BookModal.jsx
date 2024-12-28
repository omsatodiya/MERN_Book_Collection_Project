import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiBookOpen, BiUserCircle, BiCalendar } from "react-icons/bi";

const BookModal = ({ book, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div className="relative bg-white rounded-lg max-w-2xl w-full mx-4 md:mx-auto shadow-xl transform transition-all">
        {/* Background overlay */}
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          onClick={onClose}
        />

        {/* Modal panel */}
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          {/* Header */}
          <div className="bg-indigo-600 px-4 py-3 sm:px-6 flex justify-between items-center">
            <h3 className="text-lg leading-6 font-medium text-white">
              Book Details
            </h3>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <AiOutlineClose className="h-6 w-6" />
            </button>
          </div>

          {/* Content */}
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6">
            <div className="space-y-6">
              {/* Title */}
              <div className="flex items-center space-x-3">
                <BiBookOpen className="text-indigo-500 text-2xl" />
                <h2 className="text-xl font-semibold text-gray-900">
                  {book.title}
                </h2>
              </div>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <BiUserCircle className="text-indigo-500 text-2xl" />
                <p className="text-gray-700">{book.author}</p>
              </div>

              {/* Publish Year */}
              <div className="flex items-center space-x-3">
                <BiCalendar className="text-indigo-500 text-2xl" />
                <p className="text-gray-700">{book.publishYear}</p>
              </div>

              {/* Description */}
              <div className="border-t border-gray-200 pt-4 mt-4">
                <h4 className="text-lg font-medium text-gray-900 mb-2">
                  Description
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  This book was added to our collection and provides valuable
                  insights into its subject matter. It represents an important
                  addition to our literary catalogue.
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              onClick={onClose}
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
