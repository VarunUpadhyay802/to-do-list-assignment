import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
const Todo = (props) => {
  const [todos, setTodos] = useContext(TodoContext);

  const completeTodo = (e) => {
    const filterTodos = todos.map((item) => {
      if (item.id === e.target.value) {
        item.completed = !item.completed;
      }
      return item;
    });

    setTodos(filterTodos);
  };

  const deleteTodo = (e) => {
    e.preventDefault();

    const filteredTodo = todos.filter((item) => {
      return item.id !== e.target.id;
    });

    setTodos(filteredTodo);
  };

  const isCompleted = props.completed ? 'completed' : '';

  // Format the date and time
  const formattedDate = new Date(props.date).toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  return (
    <>
      <p className={`todo-item ${isCompleted}`}>
        <input
          id={props.id}
          type="checkbox"
          checked={props.completed}
          value={props.id}
          onChange={(e) => completeTodo(e)}
        />
        <label htmlFor={props.id}>
          {props.title} - {formattedDate}
        </label>
        <button
          type="button"
          className="btn-delete"
          id={props.id}
          onClick={(e) => deleteTodo(e)}
        >
          Delete
        </button>
      </p>
    </>
  );
};

export default Todo;