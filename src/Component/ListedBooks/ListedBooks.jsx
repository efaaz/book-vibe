import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadBook, getStoredWishlistBook } from "../utility/Utility";
import { NavLink } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

function ListedBooks() {
  const books = useLoaderData();
  const [readedbooks, setReadedBooks] = useState([]);
  const [wishlistbook, setwishlistbook] = useState([]);

  useEffect(() => {
    const storedBooks = getStoredReadBook();
    const wishlistBooks = getStoredWishlistBook();
    if (books.length > 0) {
      const readedBooks = books.filter((book) =>
        storedBooks.includes(book.bookId)
      );
      setReadedBooks(readedBooks);
      const wishlistbook = books.filter((book) =>
        wishlistBooks.includes(book.bookId)
      );
      setwishlistbook(wishlistbook);
    }
  }, [books]);
  const sortByRatingDescending = () => {
    const sortedReadedBooks = [...readedbooks].sort(
      (a, b) => b.rating - a.rating
    );
    setReadedBooks(sortedReadedBooks);
  };
  const sortByNumOfPagesDescending = () => {
    const sortedReadedBooks = [...readedbooks].sort(
      (a, b) => b.totalPages - a.totalPages
    );
    setReadedBooks(sortedReadedBooks);
  };
  const sortByPublishYearDescending = () => {
    const sortedReadedBooks = [...readedbooks].sort(
      (a, b) => b.yearOfPublishing - a.yearOfPublishing
    );
    setReadedBooks(sortedReadedBooks);
  };

  return (
    <div className="container mx-auto my-6 work">
      <div className="bg-[#1313130D] p-6 text-center rounded-xl text-black font-semibold text-4xl work">
        Books
      </div>
      <div className="flex justify-center">
        <div className="dropdown dropdown-bottom text-center mt-6">
          <div tabIndex={0} role="button" className="btn m-1 bg-[#23BE0A]">
            Sort By <IoIosArrowDown />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <button onClick={sortByRatingDescending}>Rating</button>
            </li>
            <li>
              <button onClick={sortByNumOfPagesDescending}>
                Number of pages
              </button>
            </li>
            <li>
              <button onClick={sortByPublishYearDescending}>
                Publisher year
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div role="tablist" className="tabs tabs-lifted mt-6">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Read Books"
          defaultChecked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-4 mx-auto"
        >
          {readedbooks.map((book, idx) => (
            <div
              key={idx}
              className="card lg:card-side bg-base-100 border border-[#13131326] container mx-auto mt-16 work"
            >
              <img
                src={book.image}
                className="lg:w-[21%] w-[80%] lg:pl-12 lg:p-0 p-2 my-auto mx-auto lg:pt-0 pt-4 "
                alt="Album"
              />

              <div className="card-body">
                <h2 className="font-bold text-4xl playfair">{book.bookName}</h2>
                <p className="text-[#131313CC] font-medium flex-grow-0 mb-2">
                  By: {book.author}
                </p>
                <div className="flex gap-2 list-none work py-4 font-bold">
                  Tags:{" "}
                  {book.tags.map((tag, idx) => (
                    <li
                      key={idx}
                      className="text-[#23BE0A] bg-[#22be0a15] rounded-2xl px-1 font-medium"
                    >
                      #{tag}
                    </li>
                  ))}
                </div>
                <p className="font-semibold">
                  <span className="font-normal text-base text-[#131313B3]">
                    Number of pages:{" "}
                  </span>
                  {book.totalPages}
                </p>
                <p className="font-semibold">
                  <span className="font-normal text-base text-[#131313B3]">
                    Publisher:{" "}
                  </span>
                  {book.publisher}
                </p>
                <p className="font-semibold">
                  <span className="font-normal text-base text-[#131313B3]">
                    Year of Publishing:{" "}
                  </span>
                  {book.yearOfPublishing}
                </p>
                <p className="font-semibold">
                  <span className="font-normal text-base text-[#131313B3]">
                    Rating:{" "}
                  </span>
                  {book.rating}
                </p>
                <div className="flex gap-2 list-none">
                  <li className="text-[#328EFF] bg-[#328EFF26] rounded-2xl py-1 px-2 font-medium">
                    Category: {book.category}
                  </li>
                  <li className="text-[#FFAC33] bg-[#FFAC3326] rounded-2xl py-1 px-2 font-medium">
                    Rating: {book.rating}
                  </li>
                  <NavLink
                    to={`/CardDetails/${book.bookId}`}
                    className="card-link pt-1"
                  >
                    <button className="bg-[#23BE0A] text-white rounded-2xl px-2 py-1 ">
                      View Details
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Wishlist Books"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-2 mx-auto"
        >
          {wishlistbook.map((book, idx) => (
            <div
              key={idx}
              className="card lg:card-side bg-base-100 border border-[#13131326] container mx-auto mt-16 work"
            >
              <img
                src={book.image}
                className="lg:w-[21%] w-[80%] lg:pl-12 lg:p-0 p-2 my-auto mx-auto lg:pt-0 pt-4 "
                alt="Album"
              />

              <div className="card-body">
                <h2 className="font-bold text-4xl playfair">{book.bookName}</h2>
                <p className="text-[#131313CC] font-medium flex-grow-0 mb-2">
                  By: {book.author}
                </p>
                <div className="flex gap-2 list-none work py-4 font-bold">
                  Tags:{" "}
                  {book.tags.map((tag, idx) => (
                    <li
                      key={idx}
                      className="text-[#23BE0A] bg-[#22be0a15] rounded-2xl px-1 font-medium"
                    >
                      #{tag}
                    </li>
                  ))}
                </div>
                <p className="font-semibold">
                  <span className="font-normal text-base text-[#131313B3]">
                    Number of pages:{" "}
                  </span>
                  {book.totalPages}
                </p>
                <p className="font-semibold">
                  <span className="font-normal text-base text-[#131313B3]">
                    Publisher:{" "}
                  </span>
                  {book.publisher}
                </p>
                <p className="font-semibold">
                  <span className="font-normal text-base text-[#131313B3]">
                    Year of Publishing:{" "}
                  </span>
                  {book.yearOfPublishing}
                </p>
                <p className="font-semibold">
                  <span className="font-normal text-base text-[#131313B3]">
                    Rating:{" "}
                  </span>
                  {book.rating}
                </p>
                <div className="flex gap-2 list-none">
                  <li className="text-[#328EFF] bg-[#328EFF26] rounded-2xl py-1 px-2 font-medium">
                    Category: {book.category}
                  </li>
                  <li className="text-[#FFAC33] bg-[#FFAC3326] rounded-2xl py-1 px-2 font-medium">
                    Rating: {book.rating}
                  </li>
                  <NavLink
                    to={`/CardDetails/${book.bookId}`}
                    className="card-link pt-1"
                  >
                    <button className="bg-[#23BE0A] text-white rounded-2xl px-2 py-1 ">
                      View Details
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListedBooks;
