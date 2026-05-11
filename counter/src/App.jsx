import { useState } from 'react'
import './App.css'

function App() {

  // State variable
  // count is a number that starts at 0
  // setCount is how you change the count variable
  const [count, setCount] = useState(0)

  function increaseCount() {
    setCount(count + 1)
  }

  function decreaseCount() {
    setCount(count - 1)
  }

  function resetCount(){
    setCount(count == 0)
  }

  return (
    <>
      <h2>{count}</h2>
      <button onClick={increaseCount}>Click to increase</button> <br></br>
      <button onClick={decreaseCount}>Click to Decrease</button> <br></br>
      <button onClick={resetCount}>Click to Reset Counter</button> <br></br>
    </>
  )

}

export default App