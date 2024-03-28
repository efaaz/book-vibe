import React from "react";

function Contacts() {
  return (
    <>
      <div className="text-center work container mx-auto mt-10">
        <h1 className="lg:text-5xl text-2xl font-bold my-6">Contact Us</h1>
        <p className="text-[#131313B3] lg:mx-40 pb-4 font-medium">
          You are just one email away from reaching us!
        </p>
        <div className="lg:flex justify-center gap-8 lg:mx-auto mx-4">
          <div>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text font-medium">Name:</span>
              </div>
              <input type="text" className="input input-bordered w-full " />
            </label>
          </div>
          <div>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text font-medium">Email:</span>
              </div>
              <input type="email" className="input input-bordered w-full" />
            </label>
          </div>
        </div>

        <div className="lg:flex justify-center lg:mx-auto mt-4 mx-4">
        <label className="form-control lg:w-[37.5%]">
          <div className="label">
            <span className="label-text font-medium">Message:</span>
          </div>
          <textarea
            className="textarea textarea-bordered w-full"
          ></textarea>
        </label>
        </div>
        <button className="mx-auto btn btn-success text-white mt-8">Submit</button>
      </div>
    </>
  );
}

export default Contacts;
