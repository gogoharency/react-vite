import React,  {useContext} from "react";

const UserContext = React.createContext({ name: '' })

function App() {
  return (
    <UserContext.Provider value={{ name: 'jack' }}>
      <div>
        <p>欢迎学习React后台课程</p>
        <Child1 />
      </div>
    </UserContext.Provider>
  )
}

function Child1() {
  return (
    <div>
      <p>
        <span>Child1</span>
      </p>
      <p>
        <Child2 />
      </p>
    </div>
  )
}

function Child2() {
  const { name } = useContext(UserContext)
  return <span>Child2{name}</span>
}

export default App
