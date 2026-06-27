import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  // let count=10;
  const [countValue,setCountValue]=useState(10);
  const addValue=()=>
  {
    if(countValue<20)
    setCountValue(countValue + 1);
    // console.log("value added",{count: countValue + 1});
  }

  const removeValue=()=>
  {
    if(countValue>0)
    setCountValue(countValue - 1);
    // console.log("value removed",{count: countValue - 1});
  }
  
  return (
    <>
     <h1>Counter App</h1>
     <h2>CountValue: {countValue}</h2>

     <button onClick={addValue}>add value</button>
     <br />
     <br />
     <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
