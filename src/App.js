import React from 'react'
import { TodoProvider } from './context/TodoContext'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import "./App.css"


const App = () => {
  return (
	<div>
		
	<TodoProvider>
			<div className="container">
				<h1 className='app-title'>Todo List</h1>
				<AddTodo />
				
                    <TodoList />
			</div>
		</TodoProvider>
	</div>
  )
}

export default App