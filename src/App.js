import logo from './logo.svg';
import './App.css';
import Demo from './components/Demo';
import Info from './components/info';
import { useState } from 'react';

function App() {
  let member = "Shubham";
  // IF the state variable are const , how there values will change , so here member1 is not a variable her 
  //it is a component whose values get changes 
  const [member1, setMember] = useState("BRo")

//   function changeName(newName){
//     {/* There is not context of pointers in react, so if you want to change at child component in props 
// whatever value we are getting from props from parent to child it can be modified 
// so the button which i have implemented will not change the whole global state 
// so there is no change in the virtual dom and actual dom  */}
//     member = newName;
//     console.log("New name will be", member)
// same work can be done by using use state hook

// }
  return (
    // We are expecting app function to return 2 elements but to ensure 2 are return ,
    // we need to wrap the demo and <h1> to div tag and only one component is returned either we can use div tag or we can use empty tags
    // or we can use react.fragments in place of div tag to return a single component
    <div>
    <h1>Hello......</h1>
    <Demo participant = {member1} changefunction={setMember}/>
    <Info participant = {member}/>

    
    </div>
  );
}
function Welcome() {
  return (
    <h1>Welcome.....</h1>
  );
}
// Default exporter of a file
export default App;
