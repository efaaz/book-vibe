import React from "react";
import { NavLink } from "react-router-dom";

function Banner() {
  return (
    <div className="container mx-auto">
      <div className="bg-[#1313130D] flex justify-around items-center lg:p-14 p-4 rounded-2xl">
        <div>
          <h1 className="playfair lg:text-5xl text-lg font-bold">
            Books to freshen
          </h1>
          <h1 className="playfair lg:text-5xl text-lg font-bold lg:py-4 mb-4">
            up your bookshelf
          </h1>
          <NavLink
            to="/ListedBooks"
            className={({ isActive }) =>
              `btn bg-green-500 text-white work ${
                isActive
                  ? "btn btn-outline btn-success font-semibold"
                  : "text-gray-700"
              }`
            }
          >
            Listed Books
          </NavLink>
        </div>
        <div className="w-[25%] rounded-lg">
          <img
            className="rounded-lg"
            src="/assets/blob1.jpeg"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
