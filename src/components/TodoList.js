import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import Todo from "./Todo";

const TodoList = () => {
  const [todos, setTodos] = useContext(TodoContext);
  const [showCompleted  , setShowCompleted] = useState(false);
  const [filterOption, setFilterOption] = useState('all'); // Default to show all todos

  const handleSort = (dragIndex, dropIndex) => {
    const todosClone = [...todos];
    const draggedTodo = todosClone[dragIndex];
    todosClone.splice(dragIndex, 1);
    todosClone.splice(dropIndex, 0, draggedTodo);
    setTodos(todosClone);
  };

  const onDragStart = (index) => {
    // Set the dragged todo index in the TodoList
    setDraggedIndex(index);
  };

  const onDragEnter = (index) => {
    // Set the index where the dragged todo is dragged over
    setDropIndex(index);
  };

  const onDragEnd = () => {
    // Reorder todos based on the drag and drop indices
    if (draggedIndex !== dropIndex) {
      handleSort(draggedIndex, dropIndex);
    }

    // Reset the drag and drop indices
    setDraggedIndex(null);
    setDropIndex(null);
  };

  const [draggedIndex, setDraggedIndex] = useState(null);
  const [dropIndex, setDropIndex] = useState(null);

  const hasTasks = todos.length > 0;
  const handleFilterChange = (event) => {
    setFilterOption(event.target.value);
  };


  const filteredTodos = todos.filter((item) => {
    switch (filterOption) {
      case 'all':
        return true;
      case 'completed':
        return item.completed;
      case 'incomplete':
        return !item.completed;
      default:
        return true;
    }
  });
  return (
    <>
      {hasTasks && (
        <div className="filter-container">
          <label>
          
            <select value={filterOption} onChange={handleFilterChange}>
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="incomplete">Incomplete</option>
            </select>
          </label>
        </div>
      )}
      {filteredTodos.length > 0 ? (
        filteredTodos.map((todo, index) => (
          <Todo
            key={todo.id}
            index={index}
            onDragStart={onDragStart}
            onDragEnter={onDragEnter}
            onDragEnd={onDragEnd}
            {...todo}
          />
        ))
      ) : (
        <p>
          {filterOption === 'completed'
            ? "No completed tasks."
            : filterOption === 'incomplete'
            ? "No incomplete tasks."
            : "No tasks to display."}
        </p>
      )}
    </>
  );
};

export default TodoList;