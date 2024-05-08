import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Book from "../Book/Book";
import axios from "axios";

function Home() {
  let [books, setBooks] = useState([])
  // const { user } = useContext(UserContex);
  useEffect(() => {
    axios.get("/api/books")
      .then(function (response) {
        // handle success
        setBooks(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);
  return (
    <>
      <Banner />
      <h1 className="text-4xl font-bold text-center mb-4 mt-8 playfair">
        Book
      </h1>
      <div className="container mx-auto grid lg:grid-cols-3 grid-cols-1 lg:justify-between gap-y-4">
        {books.map((book, idx) => (
          <Book key={idx} data={book} />
        ))}
      </div>
    </>
  );
}

export default Home;
