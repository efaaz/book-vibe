import React from "react";

function ErrorPage() {
  return (
    <div className="flex justify-center items-center h-screen  gap-2">
      <div>
        <h1 className="text-7xl text-red-600 mb-4">404 <span className="text-black">error</span></h1>
        <p className="text-7xl">Not Found</p>
      </div>
    </div>
  );
}

export default ErrorPage;
