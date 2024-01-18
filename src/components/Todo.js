import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const Todo = (props) => {
  const [todos, setTodos] = useContext(TodoContext);

  const completeTodo = () => {
    const filterTodos = todos.map((item) => {
      if (item.id === props.id) {
        item.completed = !item.completed;
      }
      return item;
    });

    setTodos(filterTodos);
  };

  const deleteTodo = (e) => {
    e.preventDefault();

    const filteredTodo = todos.filter((item) => {
      return item.id !== props.id;
    });

    setTodos(filteredTodo);
  };

  const isCompleted = props.completed ? 'completed' : '';

  const formattedDate = new Date(props.date).toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  return (
    <div
      className={`todo-item ${isCompleted}`}
      draggable
      onDragStart={() => props.onDragStart(props.index)}
      onDragEnter={() => props.onDragEnter(props.index)}
      onDragEnd={props.onDragEnd}
      onDragOver={(e) => e.preventDefault()}
    >
      <input
        id={props.id}
        type="checkbox"
        checked={props.completed}
        onChange={completeTodo}
      />
      <label htmlFor={props.id}>
        {props.title} - {formattedDate}
      </label>
      <button
        type="button"
        className="btn-delete"
        onClick={(e) => deleteTodo(e)}
      >
        Delete
      </button>
    </div>
  );
};

export default Todo;
