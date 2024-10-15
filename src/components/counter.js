import React, { useState } from 'react'

function Counter() {
    const [number,setNumber] = useState(10);
    function increment(){
        setNumber(number +1)
        // If I give multiple setNumber (number +1) will it incrase by 2 
        // answer is no : When function executed it takes the last input of a function 
        // and the last one is executedfor eg:
        // setNumber(number +1)
        // setNumber(number +2)
        // setNumber(number +4)
        // Number+4 will get executed
        // but if we want to increment by 8 then we use call back method 
        setNumber(prenumber => prenumber +1)
        setNumber(prenumber => prenumber +2)
        setNumber(prenumber => prenumber +4)




    }
    function decrement(){
        setNumber(number - 1)
    }
  return (
    <div>
        <h1>Count value is : {number}</h1>
        {/* we gave arrow function when we want the compiler to wait for the event trigger happens
        if we dont give arrow function then the compiler will not wait and it enters into infinite look */}
        {/* we use this when we want to set it once but for repitive calling we use function */}
        {/* <button onClick={()=>{setNumber(number + 1)}}>Increment</button>
        <button onClick={()=>{setNumber(number - 1 )}}>Decrement</button> */}
        <button onClick={increment}>Increment </button>
        <button onClick={decrement}>Decrement </button>


    </div>
  )
}

export default Counter