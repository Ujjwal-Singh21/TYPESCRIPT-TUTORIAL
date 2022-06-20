import { useReducer } from 'react'

const initialState = {
  count: 0
}

type CounterState = {
  count: number
}

type UpdateActions = {
  type: 'Increment' | 'Decrement'
  payload: number
}

type ResetAction = {
  type: 'Reset'
}

type CounterAction = UpdateActions | ResetAction

const reducer = (state: CounterState, action: CounterAction) => {

  switch (action.type) {
    case 'Increment':
      return { count: state.count + action.payload }
    case 'Decrement':
      return { count: state.count - action.payload }
    case 'Reset':
      return initialState
    default:
      return state
  }
}

export const CounterTwo = () => {
  
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
      <button onClick={() => dispatch({ type: 'Reset' })}> Reset </button>
    </div>
  )
}
