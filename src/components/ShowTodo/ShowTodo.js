import React , { Component } from 'react';
import './ShowTodo.css';
// import AddTodo from './AddTodo/AddTodo';
// import ShowTodo from './ShowTodo/ShowTodo';


class ShowTodo extends Component {
	render(){
	  return (
	    <div className="ShowTodo">
	    	<div>
	    		<i className="fa fa-trash fa-lg"></i>
	    		<i className="fa fa-pencil-square-o fa-lg"></i>
	    	</div>	    	
	    	<div>
		    	<span>Todo 1</span>
	    		<div>
	    			<span></span>
	    		</div>
	    	</div>
	    </div>
	  );
	}
}

export default ShowTodo;
