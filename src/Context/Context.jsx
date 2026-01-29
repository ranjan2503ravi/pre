import React, { createContext } from 'react'
import { useState } from 'react';
export const MyContext = createContext();
const Context = ({ children }) => {
    const [Data, setData] = useState({name:"ravi"})
  return (
      <div>
          <MyContext.Provider value={{Data,setData}}>
              {children}
          </MyContext.Provider>
    </div>
  )
}

export default Context