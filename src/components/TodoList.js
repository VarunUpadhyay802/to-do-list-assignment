import { useContext,useState } from "react";
import { TodoContext } from "../context/TodoContext";
import Todo from "./Todo";


const TodoList = () => {
  const [todos] = useContext(TodoContext);
  const [showCompleted, setShowCompleted] = useState(false);

  // Check if there are any tasks before rendering the checkbox
  const hasTasks = todos.length > 0;

  const filteredTodos = showCompleted
    ? todos.filter((item) => item.completed)
    : todos;

  return (
    <>
      {hasTasks && (
        <label>
          Show Completed Tasks
          <input
            type="checkbox"
            checked={showCompleted}
            onChange={() => setShowCompleted(!showCompleted)}
          />
        </label>
      )}
      {filteredTodos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </>
  );
};
export default TodoList