import React from 'react'
import { NavLink } from 'react-router-dom'

function AboutUs() {
  return (
    <>
        <div className="text-center work container mx-auto mt-10">
            <h1 className="lg:text-5xl text-2xl font-bold my-6">About Us</h1>
            <p className="text-[#131313B3] lg:mx-40 mx-4 pb-4 font-medium">Explore the literary haven of our Book Vibe! Immerse yourself in our world of words, where passion for literature meets unparalleled dedication to curate exceptional reading journeys. Our mission is simple: to ignite the spark of imagination in every reader.</p>
            <p className="text-[#131313B3] lg:mx-40 mx-4 pb-4 font-medium">Dive into our meticulously crafted platform, a sanctuary for book enthusiasts spanning across genres and realms. From the allure of fiction to the intrigue of non-fiction, from the enchantment of fantasy to the thrill of mystery, we offer an eclectic array of titles to captivate hearts and minds alike.</p>
            <p className="text-[#131313B3] lg:mx-40 mx-4 pb-4 font-medium">Whether you're on the hunt for the latest chart-toppers or undiscovered treasures waiting to be unearthed, our shelves are stocked with treasures to satisfy every literary palate. Join us on this adventure of exploration and discovery. Welcome to our world of books – where stories come alive and reading dreams flourish. Happy reading!</p>
            <NavLink
                to="/Contacts"
                className="btn btn-success text-white"
              >
               Contact Us
              </NavLink>
        </div>
    </>
  )
}

export default AboutUs