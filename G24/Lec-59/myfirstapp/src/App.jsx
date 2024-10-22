import React from 'react'
import Person from './components/Person'
import LearnJSX from './components/LearnJSX'
import TernaryOperator from './components/TernaryOperators'
import TodoList from './components/TodoList'
import './App.css'

const App = () => {
  return (
      <>
      {/* <TodoList/> */}
      {/* <TernaryOperator/> */}
      {/* <LearnJSX/> */}
      {/* <h1>This is a heading</h1> */}
      <Person name= "Tushar" age="25" crush="Piggy"/>
      <Person name= "Kanav" age="23" crush="Soniya"/>
      <Person name= "Shivangi" age="24" crush="Prateek"/>
      </>
  )
}

export default App


// import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

// function App(){
//     return _jsxs("div", {
//   children: [_jsx("h1", {
//     children: "This is a heading"
//   }), _jsx("p", {
//     children: "This is a para"
//   })]
// });
// }
// export default App;