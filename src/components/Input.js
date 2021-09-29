import React, { useState } from 'react'



function Todo({ todo, index}) {
    return(
        <div className="todo">{todo.text}</div>
    )
}

const Input = () => {
    const [todos, setTodos] = useState([
        {
          task: 'Bother someone',
          isCompleted: false
        },
        {
         task: 'Write an email',
         isCompleted: false
       },
       {
         task: 'Play some ball',
         isCompleted: false
       },
       {
         task: 'Drive some place',
         isCompleted: false
       }
   
      ])
    return (
        <div>
            <div className="todoList">
                {todos.map((todo, index) => (
                    console.log(todos),
                    <Todo key={index} index={index} todo={todo} />
                ))}
            </div>
            <h1>This should work!</h1>
           <input></input>
            {/* <input type='text' id='name' value={textInput} onChange={handleUpdatedHeaderText} placeholder='Please enter patient info'></input> */}
            <button>Submit</button>
        </div>
    )
}

export default Input
