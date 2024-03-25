import React from "react";
import { CiStar } from "react-icons/ci";

function Books() {
  return (
    <div className="card w-96 bg-base-100 shadow-xl border border-[#13131326] cursor-pointer">
      <figure className="px-2 pt-10">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/800px-The_Great_Gatsby_Cover_1925_Retouched.jpg"
          alt="Shoes"
          className="rounded-xl w-[40%]"
        />
      </figure>
      <div className="card-body work">
        <div className="flex gap-2 list-none work">
          <li className="text-[#23BE0A] bg-[#22be0a15] rounded-2xl p-2 font-medium">
            Young Adult
          </li>
          <li className="text-[#23BE0A] bg-[#22be0a15] rounded-2xl p-2 font-medium">
            Identity
          </li>
        </div>
        <h2 className="font-bold text-2xl playfair">The Catcher in the Rye</h2>
        <p className="text-[#131313CC]">By : Awlad Hossain</p>
        <div className="border border-dashed "></div>
        <div className="flex justify-between">
          <p className="text-[#131313CC] font-medium">Fiction</p>
          <div className="flex gap-1 items-center text-[#131313CC] font-medium">
            <p className="">4.0 </p>
            <div className="text-xl "><CiStar /></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Books;
