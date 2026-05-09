import React, { useReducer } from 'react'

const initialState = { count: 0 }

function reducer(state, action) {
	console.log(state, 'state')
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      throw new Error()
  }
}

function App() {
	return <div>
		<Counter></Counter>
		<Counter1></Counter1>


	</div>
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
			<Counter2 state={state} dispatch={dispatch}></Counter2>
    </>
  )
}

// 不会实时刷新
function Counter1() {
  const [state, dispatch] = useReducer(reducer, initialState)
	console.log(state, "state1111111")
  return (
    <>
      <p>Count: {state.count}</p>
    </>
  )
}

// 会实时刷新
function Counter2({state, dispatch}: any) {
  return (
    <>
      <p>Count: {state.count}</p>
    </>
  )
}

export default App
