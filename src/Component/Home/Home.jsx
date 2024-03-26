import React, { useContext } from "react";
import UserContex from "../Context/Context";
import Banner from "../Banner/Banner";
import Book from "../Book/Book";

function Home() {
  const { user } = useContext(UserContex);
  return (
    <>
      <Banner />
      <h1 className="text-4xl font-bold text-center mb-4 mt-8 playfair">
        Book
      </h1>
      <div className="container mx-auto grid lg:grid-cols-3 grid-cols-1 lg:justify-between gap-y-4">
        {user.map((book, idx) => (
          <Book key={idx} data={book} />
        ))}
      </div>
    </>
  );
}

export default Home;
