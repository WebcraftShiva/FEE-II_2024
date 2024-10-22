// rafce:
import React from 'react'
import Person from './components/Person'
import './App.css';
import LearnJsx from './components/LearnJSX'
import TernaryOperators from './components/TernaryOperators'


const App = () => {
  return (


    
    // <TernaryOperators/>
    // <LearnJsx/>
    <>
     <Person name="Tushar" age="25" crush="Piggy"/>
    <Person name="kanav" age="23" crush="Swati"/>
    <Person name="Ramya" age="22" crush="Raman"/>
    </>
  )
}

export default App


// import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

// function App(){
//   return _jsxs("div", {
//   children: [ _jsx("h1", {
//     children: "This is a heading"
//   }), _jsx("p", {
//     children: "This is a paragraph"
//   })]
// });
// }
// export default App;