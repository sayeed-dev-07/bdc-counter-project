import { useState } from 'react'

import './App.css'
import Button from './components/Button'

function App() {
  const [counter, setCounter] = useState(0)
  function handleIncrease() {
    setCounter(prev => prev + 1);
  }
  function handleDecrease() {
    setCounter(prev => prev - 1);
  }
  function setZero() {
    setCounter(0);
  }

  return (
    <>
    <div className='min-h-screen w-full flex items-center justify-center bg-[#f3f4f6]'>
      <div className='flex mx-[0.6rem] items-center flex-col p-12 bg-[#fff] justify-center gap-y-[4rem] text-5xl    rounded-2xl'>
          <div className='font-semibold'>
          Count : {counter}
        </div>
        <div className='flex items-center  justify-center gap-y-[0.5rem] gap-x-[2rem] flex-wrap'>
          <Button func={handleIncrease} name='Increase' color='crimson' />
          <Button func={handleDecrease} name='Descrease' color='skyblue' />
          <Button func={setZero} name='Reset' color='#49fa7e' />
        </div>
        </div>
    </div>
    </>
  )
}

export default App
