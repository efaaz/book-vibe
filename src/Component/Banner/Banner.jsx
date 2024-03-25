import React from "react";

function Banner() {
  return (
    <div className="container mx-auto">
      <div className="bg-[#1313130D] flex justify-around items-center p-14 rounded-2xl">
        <div>
          <h1 className="playfair text-5xl font-bold">Books to freshen</h1>
          <h1 className="playfair text-5xl font-bold py-4 mb-4">
            up your bookshelf
          </h1>
          <button
            onClick={() => h}
            className="btn bg-green-500 text-white work"
          >
            View The List
          </button>
        </div>
        <div className="w-[25%] rounded-lg">
          <img
            className="rounded-lg"
            src="/assets/blob1.jpeg"
            alt="img"
            srcset=""
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
