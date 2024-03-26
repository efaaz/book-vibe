import React, { useContext } from "react";

function ListedBooks() {
  return (
    <div className="container mx-auto my-6">
      <div className="bg-[#1313130D] p-6 text-center rounded-xl text-black font-semibold text-4xl work">
        Books
      </div>
      <div role="tablist" className="tabs tabs-lifted mt-6">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Read Books"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          Read Books
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Wishlist Books"
          checked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          Wishlist Books
        </div>
      </div>
    </div>
  );
}

export default ListedBooks;
