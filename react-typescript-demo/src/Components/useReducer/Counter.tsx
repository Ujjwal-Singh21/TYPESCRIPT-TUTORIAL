import { useReducer } from 'react'

const initialState = {
  count: 0
}

type CounterState = {
  count: number
}

type CounterAction = {
  type: string
  payload: number
}

const reducer = (state: CounterState, action: CounterAction) => {

  switch (action.type) {
    case 'Increment':
      return { count: state.count + action.payload }
    case 'Decrement':
      return { count: state.count - action.payload }
    default:
      return state
  }
}

export const Counter = () => {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <h2> Count: {state.count} </h2>
      <button onClick={() => dispatch({ type: 'Increment', payload: 10 })}>
        Increment 10
      </button>
      <button onClick={() => dispatch({ type: 'Decrement', payload: 10 })}>
        Decrement 10
      </button>
    </div>
  )
}
