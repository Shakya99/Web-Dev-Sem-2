import React from 'react'

const App = () => {
  return (
    <div className="bg-gray-300">
    <nav className="bg-blue-600 text-white text-lg flex">
  <h1 className="text-2xl">MySite</h1>
  <a href="#" className="text-base">Home</a>
  <a href="#" className="text-base">About</a>
  <a href="#" className="text-base">Contact</a>
</nav>

      <h1 className="text-3xl text-gray-800">
        Hello world!
      </h1>

      <p className="text-orange-600">
        This is a simple React + Tailwind page.
      </p>

    </div>
  )
}

export default App