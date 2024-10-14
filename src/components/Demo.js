import React from 'react'
import { connect } from 'react-redux'

// The "Demo" component is receiving props from app.js and utilizing its values here.
export const Demo = ({ participant, changefunction }) => {

    // Props in React are read-only and cannot be altered directly in child components.
    // We are assigning a new value to the local "participant" variable within the component's scope.

    participant = "adi";

  return (
    <>
      <h1>Today is the first day of my demo</h1>
      <h2>Hello {participant}</h2>
      
      {/* The button click triggers the changefunction to update the participant's name */}
      <button onClick={ () =>  changefunction("Deepanshi") }>Change Name</button>
      
      <h2>Bye {participant}</h2>
    </>
  )
}

export default Demo;