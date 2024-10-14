import React from 'react'
import { connect } from 'react-redux'
//Extension rfc and component name will give the component
// Recieved props from app.js and here used its value
export const Demo = ({participant, changefunction}) => {

    // Props are immutable they cannot be modified at child component 
    //local scope of participant is modified to the changed name

    participant = "adi";


   
  return (
    <>
    <h1>Today is the first day of my demo</h1>
    <h2>HEllo {participant} </h2>

    
    <button onClick={ ()=>{changefunction("Deepanshi")}}>Change Name</button>
    <h2>Bye {participant} </h2>


    </>
  )
}


export default Demo