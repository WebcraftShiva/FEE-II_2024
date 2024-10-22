import React from 'react'
import { useState } from 'react';

const State = () => {
    // let count = 0;

    let [count,addCount]=useState(0)

    // let handleCount = () =>{
    //   addCount(count - 1)
    // }

  return (
    <div>
        <h1>Count is: {count}</h1>
        <button onClick={()=>{addCount(count - 1)}}>Increase Count</button>
    </div>
  )
}

export default State