import axios from 'axios';
import React, { createContext } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
export const MyContext = createContext();
const Context = ({ children }) => {
    const [Data, setData] = useState([]);
    
    const onSent = async (hello="Arrabiata") => {
       try {
           const Api = `https://www.themealdb.com/api/json/v1/1/search.php?s=${hello}`
           const res = await axios.get(Api)
           console.log(res.data.meals)
           setData(res.data.meals)
           
       } catch (error) {
        console.log(error)
       }
    }
        
    
    
    useEffect(() => {
     onSent()
    }, [])
    
  return (
      <div>
          <MyContext.Provider value={{Data,setData,onSent}}>
              {children}
          </MyContext.Provider>
    </div>
  )
}

export default Context