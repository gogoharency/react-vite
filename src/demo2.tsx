import React, { useReducer, useContext, createContext } from 'react'

const UserContext = createContext({})

function App() {
  function reducer(state: string, action: { [key: string]: any }) {
    switch (action.type) {
      case 'increment':
        return action.name
      case 'decrement':
        return action.name
      default:
        throw state
    }
  }
  const [name, dispatch] = useReducer(reducer, 'tom')
  return (
    <UserContext.Provider value={{ name, dispatch }}>
      <div>
        <Counter></Counter>
        <Counter1></Counter1>
      </div>
    </UserContext.Provider>
  )
}

function Counter() {
  const { dispatch }: any = useContext(UserContext)
  return (
    <>
      <p>Count</p>
      <button onClick={() => dispatch({ type: 'decrement', name: Math.random() + '' })}>-</button>
    </>
  )
}

// 会实时刷新
function Counter1() {
	const { name }: any = useContext(UserContext)
  return (
    <>
      <p>Count1: {name}</p>
    </>
  )
}

export default App
