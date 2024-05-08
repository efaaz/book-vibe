import React, { useEffect, useState } from "react";
import UserContex from "./Context";

const UserContexProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/books"); // Absolute path to the public folder
        const data = await res.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <UserContex.Provider value={{ user, setUser }}>
      {children}
    </UserContex.Provider>
  );
};

export default UserContexProvider;
