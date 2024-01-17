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
      {filteredTodos.length > 0 ? (
        filteredTodos.map((todo) => <Todo key={todo.id} {...todo} />)
      ) : (
        <p>
          {showCompleted
            ? "Not a single task is completed."
            : "No tasks to display."}
        </p>
      )}
    </>
  );
};
export default TodoList