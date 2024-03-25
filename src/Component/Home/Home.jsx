import React from 'react'
import Banner from '../Banner/Banner'
import Books from '../Book/Book'

function Home() {
  return (
    <>
        <Banner />
        <h1 className="text-4xl font-bold text-center mb-4 mt-8 playfair">Book</h1>
        <div className="container mx-auto grid lg:grid-cols-3 grid-cols-1 gap-4">
        <Books />  
        <Books />  
        <Books />  
        <Books />  
        <Books />  
        <Books />  
        </div>
    </>
  )
}

export default Home