// Add a new component SearchTodo.js
import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

const SearchTodo = () => {
    const [todos, setTodos] = useContext(TodoContext);
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredTodos = todos.filter((todo) =>
        todo.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Search by title..."
                value={searchTerm}
                onChange={handleSearch}
            />
            {/* Render filteredTodos here */}
        </div>
    );
};

export default SearchTodo;
