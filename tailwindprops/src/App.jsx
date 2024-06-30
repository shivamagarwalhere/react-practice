import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-800 text-white p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card username="shivamagarwalhere" btnText="Visit Profile"/>
      <Card username="anandabhushek"/>
    </>
  )
}

export default App
