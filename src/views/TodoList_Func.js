import React , { useState } from 'react';
import Todos from '../components/Todos/Todos'
import TodosForm from '../components/Todos/TodosForm'

const TodoList = () => {

	// let initialState = [
	// 	{id: 1 , title: "شراء مستلزمات" , done: false },
	// 	{id: 2 , title: "شراء منتجات" , done: false },
	// 	{id: 3 , title: "مشاهدة كورس ريأكت" , done: false },
	// 	{id: 4 , title: "كتابة كود المشروع الجديد" , done: false }
	// ]

	let initialState = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []

	let [todos , setTodos] = useState(initialState);
	let [aciveTodos , setAciveTodos] = useState({});
	// mode => add || "not-done" || edit
	let [mode , setMode] = useState("add");

	let setToLocal = (todos) => {
		localStorage.setItem("todos" , JSON.stringify(todos))
	}

	let changeTodoCompletion = (id) => {
		let curTodos = [...todos];
		let newTodos = curTodos.map((el) => {
			if (el.id === id) {
				el.done = !el.done
				return el
			}
			return el
		})
		setToLocal(newTodos)
		setTodos(newTodos)
	}

	let deleteTodo = (id) => {
		let curTodos = [...todos];
		let newTodos = curTodos.filter((el) => el.id !== id)
		setToLocal(newTodos)
		setTodos(newTodos)
	}

	let addTodos = (title) => {

		if (mode !== 'edit') {
			let newTodo = {
				id:Date.now(),
				title:title,
				done:false
			}

			let newTodos = [...todos , newTodo];
			setToLocal(newTodos)
			setTodos(newTodos)
			
		}else{

			let curTodos = [...todos];
			let newTodos = curTodos.map((el) => {
				if (el.id === aciveTodos.id) {
					el.title = title
					return el
				}
				return el
			});
			setToLocal(newTodos)
			setTodos(newTodos)
			setAciveTodos({})
			setMode("add")
		}
	}

	let showUncomplete = () => {
		// if (mode === 'not-done') {
		// 	setMode("add")
		// }else
		// {
		// 	setMode("not-done")
		// }

		mode === 'not-done' ? setMode("add") : setMode("not-done")
	}

	let currentTodos = [...todos]

	if (mode === 'not-done') {

		currentTodos = currentTodos.filter((todo) => !todo.done)
	}

	let editMode = (todo) => {
		setMode("edit")
		setAciveTodos(todo)
	}


	return (
		<main>
	    <div className="container">
	    	<div className="todos">
	    		<TodosForm 
	    			addTodos={addTodos} 
	    			showUncomplete={showUncomplete} 
	    			mode={mode} 
	    			todos={mode !== "edit" ? currentTodos : [aciveTodos]}
	    		/>
	    		<Todos 
	    			todos={ mode !== 'edit' ? currentTodos : [aciveTodos]} 
	    			changeTodoCompletion={changeTodoCompletion} 
	    			deleteTodo={deleteTodo} 
	    			editMode={editMode} 
	    		/>
	    	</div>
	    </div>
		</main>
	);
}

export default TodoList;
