import { useState } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  // function increment() {
  //   setCount((prevCount) => prevCount + 1)
  // }

  const [color, setColor] = useState('olive')

  function changeColor(color){
    setColor(color)
  }

  return (
    <>
      {/* <h1>Counter-App</h1>
      <h1 className='bg-orange-700 '>Incremented Value: {count}</h1>
      <button onClick={increment}>Increment</button> */}

      <div className='bg-black w-full h-screen duration-100' style={{backgroundColor:color}}>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className=" w-[300px] h-[100px] flex  flex-row justify-center gap-3  shadow-lg bg-white px-3 py-2 rounded-3xl">
          {/* <h1 className="bg-blue-500 text-4xl text-center">Bg changer</h1> */}
          <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg bg-red-500"  onClick={()=>changeColor('red')}>Red</button>
           <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg bg-green-500" onClick={()=>changeColor('green')}>green</button>
        </div>

      </div>
      
      </div>
    </>
  )
}

export default App
