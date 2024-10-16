import logo from './logo.svg';
import './App.css';
import Demo from './components/Demo';
import Info from './components/Info';
import Counter from './components/counter';
import Tableview from './components/Tableview';
import Registration from './components/Registration';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  let member = "Shubham";

  // member1 is a state variable initialized with "Bro", not a regular variable.
  // Its value changes when the setMember function is invoked.
  const [member1, setMember] = useState("Bro");
  const changeName = (newName) =>{
    setMember(newName);
    console.log("New name will be :", member1)
  }

  // function changeName(newName){
  //   // In React, there is no concept of pointers. To modify data passed through props from parent to child, 
  //   // you would need to pass a function that alters the state in the parent component.
  //   // Directly modifying props in the child will not update the state of the virtual DOM or the real DOM.
  //   member = newName;
  //   console.log("New name will be", member);
  //   // We can achieve the same behavior using the useState hook.
  // }

  return (
    // App returns two elements. To ensure that only one root element is returned, 
    // we can wrap them in a div tag or use empty tags (React Fragments) to return multiple elements.
   //classname is marked as app for styling,Inherint property for react
   <div className="App">
      <h1>Hello......</h1>
      <div className='split-screen'>
  <Tableview/>
  <Registration/>
  </div>
    </div>
  );
}

function Welcome() {
  return (
    <h1>Welcome.....</h1>
  );
}

// Default export for the App component
export default App;