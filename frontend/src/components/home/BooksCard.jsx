import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import BookSingleCard from "./BookSingleCard";

const BooksCard = ({ books }) => {
  if (!books.length) {
    return (
      <div className="flex flex-col items-center justify-center h-64">
        <PiBookOpenTextLight className="text-6xl text-gray-400" />
        <p className="mt-4 text-xl text-gray-500">No books found</p>
      </div>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
      {books.map((item) => (
        <div
          key={item._id}
          className="transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <BookSingleCard book={item} />
        </div>
      ))}
    </div>
  );
};

export default BooksCard;
