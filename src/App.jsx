import { SplitText, ScrollTrigger } from "gsap/all"
import React from 'react'
import gsap from 'gsap'

gsap.registerPlugin(SplitText, ScrollTrigger)

const App = () => {
  return (
    <div className="flex-center flex-col  min-h-screen bg-green-500">
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <p className="text-lg text-black">
        This is a simple example of using Tailwind CSS with React.
      </p>
      <div className="mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Click Me
        </button>
      </div>
    </div>
  )
}

export default App