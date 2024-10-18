import React from 'react'
import Link from 'next/link'

function page() {
  return (
    <div
  className="bg-cover bg-center bg-no-repeat flex justify-center h-screen w-screen items-center "
  style={{ backgroundImage: "url('/r.png')" }}
>
  <div
    className="bg-white shadow-lg p-8 rounded-lg flex flex-col items-center"
    style={{ borderRadius: "20px", color: "#6a6e6f", width: "400px", backgroundImage: "url('/r.png')", }}
  >
    <h1 className="text-3xl font-semibold mb-6 uppercase" style={ { color: "#6a6e6f"}}>Login</h1>

    <div className="mb-4 w-full">
      <input
        type="email"
        id="email"
        placeholder="Email"
        className="w-full px-4 py-2 border border-gray-300 rounded-full text-gray-700 focus:outline-none focus:border-indigo-500"
      />
    </div>

    <div className="mb-6 w-full">
      <input
        type="password"
        id="password"
        placeholder="Password"
        className="w-full px-4 py-2 border border-gray-300 rounded-full text-gray-700 focus:outline-none focus:border-indigo-500"
      />
    </div>

    <button
      type="submit"
      className="w-full bg-indigo-500 text-white px-4 py-2 rounded-full mb-4 hover:bg-indigo-600 transition duration-300"
    >
      Submit
    </button>
    <Link href= "/"
      type="submit"
      className="w-full bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-300 justify-center text-center" 
    >
    👈Back
    </Link>
  </div>
</div>

  )
}

export default page
