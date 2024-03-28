import React from "react";
import { CiStar } from "react-icons/ci";
import { NavLink } from "react-router-dom";

function Books({ data }) {
  return (
    <NavLink to={`/CardDetails/${data.bookId}`} className="card-link">
      <div className="card w-96 bg-base-100 shadow-xl mx-auto border border-[#13131326] cursor-pointer">
        <figure className="px-2 pt-10">
          <img src={data.image} alt="Shoes" className="rounded-xl w-[40%]" />
        </figure>
        <div className="card-body work">
          <div className="flex gap-2 list-none work">
            {data.tags.map((book, idx) => (
              <li
                key={idx}
                className="text-[#23BE0A] text-sm bg-[#22be0a15] rounded-2xl p-1 font-medium"
              >
                {book}
              </li>
            ))}
          </div>
          <h2 className="font-bold text-2xl playfair">{data.bookName}</h2>
          <p className="text-[#131313CC] font-medium">By : {data.author}</p>
          <div className="border border-dashed "></div>
          <div className="flex justify-between">
            <p className="text-[#131313CC] font-medium">{data.category}</p>
            <div className="flex gap-1 items-center text-[#131313CC] font-medium">
              <p className="">{data.rating}</p>
              <div className="text-xl ">
                <CiStar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </NavLink>
  );
}

export default Books;
