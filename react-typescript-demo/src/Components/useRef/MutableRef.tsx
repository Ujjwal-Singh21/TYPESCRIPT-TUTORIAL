import { useState, useEffect, useRef } from 'react'

export const MutableRef = () => {

  const [counter, setCounter] = useState(0)

  const intervalRef = useRef<number | null>(null)

  const stopTimer = () => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current)
    }
  }

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setCounter(timer => timer + 1)
    }, 1000)

    return () => {
      console.log('timer cleared');
      stopTimer()
    }
  }, [])

  return (
    <div>
      <h2> Counter - {counter} </h2>
      <button onClick={() => stopTimer()}> Clear Timer </button>
    </div>
  )
}
