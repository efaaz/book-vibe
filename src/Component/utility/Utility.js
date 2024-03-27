const getStoredReadBook = () => {
  const storedReadBook = localStorage.getItem("readedBook");
  if (storedReadBook) {
    return JSON.parse(storedReadBook);
  }
  return [];
};

const saveReadedBook = (id) => {
  const storedReadBook = getStoredReadBook();
  const exists = storedReadBook.find((bookId) => bookId === id);
  if (!exists) {
    storedReadBook.push(id);
    localStorage.setItem("readedBook", JSON.stringify(storedReadBook));
  }
};

const getStoredWishlistBook = () => {
  const storedWishlistBook = localStorage.getItem("wishlistBooks");
  if (storedWishlistBook) {
    return JSON.parse(storedWishlistBook);
  }
  return [];
};

const saveWishlistBook = (id) => {
  const storedWishlistBook = getStoredWishlistBook();
  const exists = storedWishlistBook.find((bookId) => bookId === id);
  if (!exists) {
    storedWishlistBook.push(id);
    localStorage.setItem("wishlistBooks", JSON.stringify(storedWishlistBook));
  }
};

export {
  getStoredReadBook,
  saveReadedBook,
  getStoredWishlistBook,
  saveWishlistBook,
};
