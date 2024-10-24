import React,{useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
const emp = [
  {
    id: "cd34",
    name: "Shubham Srivastava",
    mobile: "08587848703",
    email: "a@gmail.com",
    password: "213131313",
    color: "#99CCFF"
  },
  {
    id: "d648",
    name: "Shubham Srivastava",
    mobile: "08587848703",
    email: "a@gmail.com",
    password: "213131313",
    color: "#99CCFF"
  }
  ];

  
function Tableview() {
  const navigate = useNavigate();

    // The employeeList state is initialized with the employees array.
    //  This state will be used to dynamically reorder the cards during 
    // the drag-and-drop operation. setEmployeeList is used to update the employee list.

    const [employeeList, setEmployeeList] = useState([]); // Use state for employee list
    useEffect(()=>{
      console.log('hellp');
      axios.get("http://localhost:4000/empdatabase").then((resp)=>{   
         setEmployeeList(resp.data);   
      }).catch((error)=>{
        alert("error")
//[] will tell use effect that run only once the certain params inside the state changes
//It will rerendered during the recycle methods so basically at 4 stages.
// if i put [employeelist] in the bracket then it will be rendered when the value of the employee ~list changes
    })
    },[])
    function handleDelete(id){
      console.log(id)
      axios.delete(`http://localhost:4000/empdatabase/${id}`).then((resp)=>{
        // alert(`Details of Employee with id ${id} is deleted `)
        setEmployeeList(employeeList.filter((data)=>data.id !== id))
      }).catch((err)=>{
        alert('Delete failute', err.message)
      })
    }
    function handleUpdate(id){
      console.log("call for update with ",id)
      navigate(`/registeration/${id}`)
    }
    const handleColorChange = (id, e) => {
      e.preventDefault(); // Prevent page refresh
      const newColor = e.target.value;
     const updatelist = employeeList.find(emp =>emp.id === id)
     if(!updatelist){return}
     const updatedemployee ={...updatelist, color: newColor}
     const updateemployeelist = employeeList.map(emp=> emp.id ===id? updatedemployee :emp)
      setEmployeeList(updateemployeelist);
      updateColorInDatabase(id, updatedemployee);     
    }
    const updateColorInDatabase = (id, updatedemployee) => {
      axios.put(`http://localhost:4000/empdatabase/${id}`, updatedemployee )
        .then(() => {
          console.log("Color updated successfully");
        })
        .catch((error) => {
          alert("Error updating color: " + error.message);
        });
    };
    //This function starts when the user starts dragging it 
    // The index of the dragged card is stored in the dataTransfer object so that it can be accessed later during the drop event.
    const handleDragStart =(e, index)=>{
        e.dataTransfer.setData('cardIndex', index);

    }
    const handleDrop = (e, dropIndex) => {
        // Retrieves the index of the card that was dragged.
        const dragIndex = e.dataTransfer.getData('cardIndex');
        // Creates a copy of the employee list to avoid directly modifying the state.
        const updatedList = [...employeeList];
        
        // Reorder employeeList by swapping dragged and dropped elements
        // splice() method is a built-in JavaScript array method that allows you to change the contents of an array by removing or replacing existing elements and/or adding new elements in place.
        // Removes the dragged item from its original position in the list.
        const [draggedItem] = updatedList.splice(dragIndex, 1);
        // Inserts the dragged item at the new position.
        updatedList.splice(dropIndex, 0, draggedItem);
        // Updates the state with the reordered list of employees, causing the UI to re-render with the new order.
        setEmployeeList(updatedList);
      };
    //   This prevents the default behavior of the browser, which blocks the drop event. Without this, dropping a card won’t work.
      const handleDragOver = (e) => {
        e.preventDefault();
      };
    
  return (
//   <div className='container' style={{justifyContent:"center"}}>
  
//     <h1>Employee Data Table</h1>
//     <div style={{display:'flex', alignContent:"center" }}>
//       {
//         employees.map((employee)=>{
//             return(
                
//                 // <card style ={cardStyle}>
//                 //     <ul>
//                 //     <li>{employee.empid}</li>
//                 // <li>{employee.name}</li>
//                 // <li>{employee.designation}</li>
//                 //     </ul>
//                 // </card>

//             <div className="card" style={{width: "18rem;"}}>
//              <div className="card-header"> Employee Data</div>
//             <ul className="list-group list-group-flush">
//             <li className="list-group-item">Employee ID : {employee.empid}</li>
//             <li className="list-group-item">Employee Name: {employee.name}</li>
//             <li className="list-group-item">Employee designation :{employee.designation}</li>
//             </ul>
            
//             </div>
//             )
//         })
//       }
//       {/* <table align='center' border="1" cellPadding="10" cellSpacing="0">
//         <thead>
//           <tr>
//             <th>Emp ID</th>
//             <th>Name</th>
//             <th>Designation</th>
//           </tr>
//         </thead>
//         <tbody>
//             {/* we cant use for / while loop in the react because babel compiler is not designed
//             for these type of loops
//             map method worl, for each work but traditional methods will not work 
//             inside jsx it will not work for eg it will work before return if there is seprate function where only calculation and logics are present 
//             then it will work*/}
//           {/* {employees.map((employee)=>{
//             return(
//             <tr>
//                 <td>{employee.empid}</td>
//                 <td>{employee.name}</td>
//                 <td>{employee.designation}</td>

//             </tr>
//             )
//           })}
//         </tbody>
//     //   </table> */} 
//     </div>
//     </div>
 <div className='container' style={{ justifyContent: "center" }}>
      <h1>Employee Data Table</h1>
      <div style={{ display: 'flex', flexWrap: "wrap" }}>
        {
          employeeList.map((employee, index) => {
            return (
              <div
                className='card'
                style={{
                  width: "18rem",
                  backgroundColor: employee.color, // Color tied to the employee data
                  margin: "10px",
                  border: "none",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                }}
                draggable // Makes the card draggable
                onDragStart={(e) => handleDragStart(e, index)} // Called when drag starts
                onDragOver={handleDragOver} // Allows the card to be dragged over other cards
                onDrop={(e) => handleDrop(e, index)} // Called when the card is dropped
                key={index} // Unique key to identify each card
              >
                <div
                  className='card-header'
                  style={{
                    fontWeight: "bold",
                    fontSize: "1.25rem",
                    textAlign: "center",
                  }}>
                  Employee Data
                </div>
                <ul
                  className='list-group list-group-flush'
                  style={{ padding: "10px" }}>
                  <li
                    className='list-group-item'
                    style={{ backgroundColor: "transparent", border: "none" }}>
                    Employee Name: {employee.name}
                  </li>
                  <li
                    className='list-group-item'
                    style={{ backgroundColor: "transparent", border: "none" }}>
                    Employee mobile: {employee.mobile}
                  </li>
            
                  <li
                    className='list-group-item'
                    style={{ backgroundColor: "transparent", border: "none" }}>
                    Employee Email: {employee.email}
                    </li>
                    <li className='d-flex align-items-center ps-5 pt-5'>
                      <button
                        className='btn btn-danger me-2'
                        onClick={() => handleDelete(employee.id)}>
                        Delete
                      </button>
                      <button
                        className='btn btn-info'
                        onClick={() => handleUpdate(employee.id)}>
                        Update
                      </button>
                  </li>
                  <label>
            
            <input
              type="color"
              value={employee.color}
              onChange={(e) => handleColorChange(employee.id, e)}
            />
          </label>
                </ul>
              </div>
            );
          })
        }
      </div>
    </div> 

  )
}

export default Tableview