import React from 'react'
import classes from './Counter.module.scss'

export const Counter = () => {
  const [count, setCount] = React.useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  return (
    <div>
      <button className={classes.btn} onClick={increment}>+</button>
      <h2>Count: {count}</h2>
      <button onClick={decrement}>-</button>
    </div>
  )
}
