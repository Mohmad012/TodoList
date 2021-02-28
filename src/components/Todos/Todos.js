import React from 'react';
import Todo from './Todo'
const Todos = (props) => {
  return (
    <div className="todos-list">
    	{
    		props.todos.map((todo) => {
    			return (<Todo 
		    				todo={todo} 
		    				key={todo.id} 
		    				changeTodoCompletion={props.changeTodoCompletion} 
		    				deleteTodo={props.deleteTodo} 
		    				editMode={props.editMode} 
    					/>
    			)
    		})
    	}
    	{
    		props.todos.length === 0 ? (
    			<h3 className="no-todos">ﻻ يوجد مهام حالية ....</h3>

    		) : null
    	}
    </div>
  );
}

export default Todos;
