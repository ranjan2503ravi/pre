import React, { useContext } from 'react'
import { MyContext } from '../Context/Context'
import { useState } from 'react'
export const Home = () => {
  const { Data, setData, onSent } = useContext(MyContext)
  const [Input, setInput] = useState("")

  const handle = () => {
  onSent(Input)
}


  return (
    <div>
     <div className="flex items-center gap-2 m-auto bg-white p-3 rounded-lg shadow-md w-full max-w-md">
  <input
    onChange={(e) => setInput(e.target.value)}
    value={Input}
    type="text"
    placeholder="Enter the prompt..."
    className="flex-1 px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
  />
  <button onClick={handle} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
    Click
  </button>
      </div>
     {Data && Data.length > 0 ? (
  <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
    {Data.map((item) => (
      <div key={item.idMeal} className="border p-2 rounded shadow">
        <img src={item.strMealThumb} alt={item.strMeal} />
        <p className="mt-2 font-semibold">{item.strMeal}</p>
      </div>
    ))}
  </div>
) : (
  <p className="text-center mt-6 text-gray-500">No data found</p>
)}


    </div>
  )
}
