import React from 'react'
import './Person.css'


const Person = ({name,age,crush}) => {
  return (
    <div className='person'>
        <h1>Name: {name}</h1>
        <h2>Age: {age}</h2>
        <h3>Crush: {crush}</h3>
    </div>
  )
}

// const Person = (props) => {
//   return (
//     <div className='person'>
//         <h1>Name: {props.name}</h1>
//         <h2>Age: {props.age}</h2>
//         <h3>Crush: {props.crush}</h3>
//     </div>
//   )
// }

export default Person