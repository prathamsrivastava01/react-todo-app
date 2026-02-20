import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoApp() {
  let [todos, setTodos] = useState([{ task: "Sample task", id: uuidv4(), isDone: false }]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = (prevTodos) => {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4() }];
    });
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id != id));
  };

  let upperCaseAll = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
       return {
         ...todo,
        task: todo.task.toUpperCase(),
       };
      }),
    );
  };

let lowerCaseAll = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
       return {
         ...todo,
        task: todo.task.toLowerCase(),
       };
      }),
    );
  };

  let upperCaseOne = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if(todo.id === id) {
            return {
            ...todo,
            task: todo.task.toUpperCase(),
            };
        }else{
            return todo;
        }
   
      })
    );
  };

    let lowerCaseOne = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if(todo.id === id) {
            return {
            ...todo,
            task: todo.task.toLowerCase(),
            };
        }else{
            return todo;
        }
   
      })
    );
  };


  let markAsDone = (id) => {
      setTodos((prevTodos) =>
      prevTodos.map((todo) => 
      todo.id === id ? {...todo, isDone: !todo.isDone}
      : todo 
      )
    );
  };

  return (
    <div>
        <h1> Todo WebApp <i class="fa-solid fa-heart"></i> </h1>
        <br></br>
      <input
        placeholder="Add a task"
        value={newTodo}
        onChange={updateTodoValue}
      style={{
        width: "300px",
        height: "30px",
        fontSize: "16px",
        padding: "5px",
        borderRadius:"10px",
     }}
      />

      &nbsp;&nbsp;&nbsp;
      <button onClick={addNewTask}>Add Task</button>
      <br></br>
      <br></br>
      <hr></hr>
      <h2> Todo List </h2>
      <ul>
        {" "}
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
                style={{
                    textDecoration: todo.isDone ? "line-through" : "none", fontWeight: "bold"
                }}
                >
                {todo.task}
                </span>
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => deleteTodo(todo.id)}> Delete </button>
            &nbsp;&nbsp;
            <button onClick={() => upperCaseOne(todo.id)}> UpperCase One </button>
            &nbsp;&nbsp;
            <button onClick={() => lowerCaseOne(todo.id)}> LowerCase One </button>
            &nbsp;&nbsp;
            <button onClick={() => markAsDone(todo.id)}> Mark as Done </button>
          </li>
        ))}
      </ul>

      <br></br>
        <br></br>
      <button onClick={upperCaseAll}> Upper Case All </button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={lowerCaseAll}> Lower Case All </button>
<br></br><br></br><br></br><br></br>
<p> Created by - Pratham Srivastava <i class="fa-solid fa-heart"></i></p>
    </div>
  );
}
