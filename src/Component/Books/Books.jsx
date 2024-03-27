import React from "react";
import React, { useContext } from "react";
import UserContex from "../Context/Context";
import Book from "../Book/Book";
function Books() {
  const { user } = useContext(UserContex);
  return (
    <>
      {user.map((books) => {
        <Book key={books.bookId} data={books}></Book>;
      })}
    </>
  );
}

export default Books;
