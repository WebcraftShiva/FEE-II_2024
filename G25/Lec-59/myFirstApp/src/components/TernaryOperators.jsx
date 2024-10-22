// Ternary operators: (condition) ?  (statement1) : (statement2)

import React from 'react'

const TernaryOperators = () => {

    let randomNum = Math.floor(Math.random()*5 +1)

    let luckyNum = 3;

  return (
    <div>
        <h1>Are you a lucky on? {random}</h1>
        {(randomNum === luckyNum) ? 
        <h1>You are a lucky one</h1> : <h1>ooh! no you have a bad luck boyy</h1>
        }
    </div>
  )
}

export default TernaryOperators