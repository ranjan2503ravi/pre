import React, { useContext } from 'react'
import { MyContext } from '../Context/Context'
const Home = () => {
  const { Data, setData } = useContext(MyContext);
  console.log(Data)
  const handleClick = () => {
    setData({name:"hello"})
  }
  return (
    <div>
      {Data.name}
<button onClick={handleClick}>click</button>

    </div>
  )
}

export default Home