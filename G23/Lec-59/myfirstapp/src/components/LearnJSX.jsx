import React from 'react'

const LearnJSX = () => {

    const randomNum = Math.floor(Math.random()* 10 + 1)

  return (
    <>

    
    {/* 1. */}
    <h1>Learning About JSX :</h1>

    <h2>Random Number: 
        {Math.floor(Math.random()* 5 + 1)} 
    </h2>
    <h2>Random Number: 
        {randomNum} 
    </h2>
    </>
  )
}

export default LearnJSX