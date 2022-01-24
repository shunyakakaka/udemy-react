import React, { useState } from 'react'
const App = () => {
  return (
    <Counter></Counter>
  )
}

const Counter = (props) => {
  const [Count, setCount] = useState(0)
  function PlusCount() {
    setCount(Count + 1)
  }

  function MinusCount() {
    setCount(Count - 1)
  }

  return (
    <React.Fragment>
      <button onClick={() => PlusCount()}>+1</button>
      <button onClick={() => MinusCount()}>-1</button>
      <h1>Count: {Count}</h1>
    </React.Fragment>
  )
}

export default App;