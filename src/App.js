import React, { useState } from "react";
import "./App.css";

const App =()=>{
 const [inputList, updatedList] = useState("");
 const [addedlist, newaddedlist] =useState([]);

 const addedevent = (event) => {
      updatedList(event.target.value);
 }

 const createList = () =>{
       newaddedlist((oldList) =>{
          return [...oldList, inputList]
       });
       updatedList("");
 };

 const deleteList = (index) => {
       const newList = [...addedlist];
       newList.splice(index, 1);
       newaddedlist(newList);
 };

 const updateList = (index) => {
       const newList = [...addedlist];
       const updatedValue = prompt("Enter the updated value:", newList[index]);
       if (updatedValue !== null && updatedValue !== "") {
          newList[index] = updatedValue;
          newaddedlist(newList);
       }
 };

 return(
    <div className="main-div">
        <div className="center-div">
        <h1>ToDo List</h1>
        <input type="text" placeholder="Add ToDo" onChange={addedevent} value={inputList}></input> 
        <button onClick={createList}>Add</button>
        <ol>
            {addedlist.map((listval, index)=>{
                return <li key={index}>
                          {listval}
                          <button onClick={() => deleteList(index)}>Delete</button>
                          <button onClick={() => updateList(index)}>Update</button>
                       </li>
            })}
        </ol>
        </div>
    </div>
 )
}

export default App;
