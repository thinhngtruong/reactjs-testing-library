import React from 'react'

const Counter = () => {
 const [counter, setCounter] = React.useState(0)
  
 return (
  <>
    <h1 data-testid="counter">{ counter }</h1>
    <button data-testid="button-up" onClick={() => setCounter(counter + 1)}> Up</button>
    <button disabled={counter === 0} data-testid="button-down" onClick={() => setCounter(counter - 1)}>Down</button>
 </>
    )
  }
  
export default Counter