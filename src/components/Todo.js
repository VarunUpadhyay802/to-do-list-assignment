import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const Todo = (props) => {
  const [todos, setTodos] = useContext(TodoContext);

  const completeTodo = (e) => {
    if (e.target.type !== "checkbox") {
      return; // Only proceed if the checkbox is clicked
    }

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
  });

  return (
    <div
      className={`todo-item ${isCompleted} ${props.dragged ? 'dragged' : ''}`}
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
        onChange={(e) => completeTodo(e)} // Pass the event object
      />
      <label htmlFor={props.id}>
        {props.title} - {formattedDate}
      </label>
      <img src="/delete.jpg" alt="delete"
       className="delete-image"
      onClick={(e) => deleteTodo(e)}/>
    </div>
  );
};

export default Todo;
