import React from 'react';
import './App.css';
// import BoxContent from './components/BoxContent/BoxContent'
import Header from './components/Header'
import TodoList from './views/TodoList'

      // <h1>Todo List</h1>
      // <BoxContent />

function App() {

	return (
	    <div className="App">
	    	<Header />
	    	<TodoList />
	    </div>
	);
}

export default App;
