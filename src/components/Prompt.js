import React, { useState } from "react";
import axios from "axios";
import { useSelector,useDispatch } from "react-redux";
import { increment,decrement } from "../actions/actions";


function Prompt() {
    const [step,setStep]=useState(0);
    const counter = useSelector(state=>state.count);
    const dispatch = useDispatch();
  return (
    <>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
        <h1>React Redux example</h1>
        <h2>Increment/ decrement the value and the counter value will change : {counter}</h2>
        <p>
            Step Size: 
            <input 
                type="number" 
                placeholder="Enter the step size" 
                onChange={(event) => setStep(event.target.value)} 
                style={{ padding: '5px', margin: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
        </p>
        <div>
            <button 
                className="btn btn-primary" 
                onClick={() => dispatch(increment(step))} 
                style={{ marginRight: '10px', padding: '10px 20px', fontSize: '16px' }}
            >
                Increment
            </button>
            <button 
                className="btn btn-primary" 
                onClick={() => dispatch(decrement(step))} 
                style={{ padding: '10px 20px', fontSize: '16px' }}
            >
                Decrement
            </button>
        </div>
    </div>
</>
  )
}




export default Prompt;
