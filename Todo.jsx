import { useState } from "react"

export default function Todo(){
    let [todos,settodos]=useState(["sample Task"]);
    let [newTodo,setnewTodo]=useState("");

    let addNewtask = () =>{
        settodos([...todos,newTodo]);
    }
    let updatevalue=(event)=>{
        setnewTodo(event.target.value);
    }

    return (
        <>
         <input placeholder="Add a Task" value={newTodo} onChange={updatevalue}></input>
         <br></br>
         <button onClick={addNewtask}>Add Task</button>
         <br></br>
         <br></br>
         <hr></hr>
         <h4>Tasks</h4>
         <ul>
            {
                todos.map((todo)=>(<li>{todo}</li>))
            }
         </ul>

        </>
    )
}