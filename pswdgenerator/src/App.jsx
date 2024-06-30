import { useCallback, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const pswdGenerator  = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllowed) str+="0123456789"
    if (charAllowed) str+="!@#$%^&*()_+{}|\\"

    for (let index = 0; index < length; index++) {
      pass+= str.charAt(Math.floor(Math.random() *str.length + 1));
    }

    setPassword(pass)

  }, [length, numAllowed, charAllowed, setPassword])

  pswdGenerator( )

  return (
    <>
      <h1 className='text-4xl text-center text-white'>Password Generator</h1>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
        <input 
        type="text"
        value={password}
        className='outline-none w-full py-1 px-3 rounded-sm'
        placeholder='Password'
        readOnly
         />
         <button className= 'outline-none bg-orange-700 rounded-sm text-white px-3 mt-2 py-0.5 shrink-0'>Copy</button>
         <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" 
          min={6}
          max={50}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{
            setLength(e.target.value)
          }}
          />
          <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
          type="checkbox"
          defaultChecked={numAllowed}
          id="numberInput"
          onChange={()=>{
            setNumAllowed((prev) => !prev)
          }}
          />
          <label>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
          type="checkbox"
          defaultChecked={charAllowed}
          id="charInput"
          onChange={()=>{
            setCharAllowed((prev) => !prev)
          }}
          />
          <label>Characters</label>
        </div>
      </div>
      </div>
      
    </>
  )
}

export default App
