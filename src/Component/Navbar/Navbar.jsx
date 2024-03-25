import React from 'react'
import { NavLink } from 'react-router-dom';
import "../../index.css"


function Navbar() {
  return (
    <div className="container mx-auto work">
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><NavLink to="/" className={({isActive}) =>
                                        `mx-4 text-lg ${isActive ? "btn btn-outline btn-success font-semibold" : "text-gray-700"} `
                                    }>Home</NavLink></li>
        <li><NavLink to="/ListedBooks" className= {({isActive}) =>
                                        `mx-4 text-lg ${isActive ? "btn btn-outline btn-success font-semibold" : "text-gray-700"}`
                                    }>Listed Books</NavLink></li>
        <li><NavLink to="/PagesToRead" className={({isActive}) =>
                                        `mx-4 text-lg ${isActive ? "btn btn-outline btn-success font-semibold" : "text-gray-700"}`
                                    }>Pages To Read</NavLink></li>
      </ul>
    </div>
    <a className="btn btn-ghost lg:text-3xl text-xl font-bold">Book Vibe</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 flex items-center">
    <li><NavLink to="/" className={({isActive}) =>
                                        `mx-2 text-lg ${isActive ? "btn btn-outline btn-success font-semibold" : "text-gray-700"} `
                                    }>Home</NavLink></li>
        <li><NavLink to="/ListedBooks" className= {({isActive}) =>
                                        `mx-2 text-lg ${isActive ? "btn btn-outline btn-success font-semibold" : "text-gray-700"}`
                                    }>Listed Books</NavLink></li>
        <li><NavLink to="/PagesToRead" className={({isActive}) =>
                                        `mx-2 text-lg ${isActive ? "btn btn-outline btn-success font-semibold" : "text-gray-700"}`
                                    }>Pages To Read</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
  <button className="btn btn-success mr-4 text-white">Sign in</button>
  <button className="btn btn-info text-white">Sign Up</button>
  </div>
    </div>
    </div>
  )
}

export default Navbar