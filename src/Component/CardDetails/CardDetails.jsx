import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import UserContex from "../Context/Context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  saveReadedBook,
  saveWishlistBook,
  getStoredReadBook,
  getStoredWishlistBook,
} from "../utility/Utility";

function CardDetails() {
  const { bookId } = useParams();
  let id = parseInt(bookId);
  const { user } = useContext(UserContex);
  const selectdBook = user.find((book) => book.bookId === id);

  const handleWishlistButtonClick = () => {
    const storedWishlistBooks = getStoredWishlistBook();
    const isBookRead = getStoredReadBook().includes(id);

    if (isBookRead) {
      toast("This book has already been added in read list.");
    } else if (storedWishlistBooks.includes(id)) {
      toast("This book has already been added in wishlist list.");
    } else {
      saveWishlistBook(id);
      toast("This book has been added to your wishlist.");
      setIsBookWishlist(true);
    }
  };

  const handleReadButtonClick = () => {
    const storedReadBooks = getStoredReadBook();
    if (storedReadBooks.includes(id)) {
      toast("This book has already been read.");
    } else {
      saveReadedBook(id);
      toast("This book has been marked as read.");
      setIsBookRead(true);
    }
  };

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl container mx-auto mt-16 work">
      <figure>
        <img src={selectdBook.image} className="w-[100%] p-6" alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="font-bold text-4xl playfair">{selectdBook.bookName}</h2>
        <p className="text-[#131313CC] font-medium flex-grow-0 mb-4">
          By : {selectdBook.author}
        </p>
        <hr />
        <p className="text-[#131313CC] font-medium flex-grow-0 ">
          {selectdBook.category}
        </p>
        <hr />
        <p className="">
          <span className="font-medium">Review: </span>
          {selectdBook.review}
        </p>
        <div className="flex gap-2 list-none work py-4">
          {selectdBook.tags.map((book, idx) => (
            <li
              key={idx}
              className="text-[#23BE0A] bg-[#22be0a15] rounded-2xl p-2 font-medium"
            >
              {book}
            </li>
          ))}
        </div>
        <hr />
        <p className="font-semibold">
          <span className="font-normal text-base text-[#131313B3]">
            Number of pages:{" "}
          </span>
          {selectdBook.totalPages}
        </p>
        <p className="font-semibold">
          <span className="font-normal text-base text-[#131313B3]">
            Publisher:{" "}
          </span>
          {selectdBook.publisher}
        </p>
        <p className="font-semibold">
          <span className="font-normal text-base text-[#131313B3]">
            Year of Publishing:{" "}
          </span>
          {selectdBook.yearOfPublishing}
        </p>
        <p className="font-semibold">
          <span className="font-normal text-base text-[#131313B3]">
            Rating:{" "}
          </span>
          {selectdBook.rating}
        </p>
        <div className="card-actions">
          <button
            className="btn btn-outline"
            onClick={() => {
              handleReadButtonClick();
            }}
          >
            Read
          </button>
          <button
            onClick={() => {
              handleWishlistButtonClick();
            }}
            className="btn btn-info text-white"
          >
            Wishlist
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default CardDetails;
