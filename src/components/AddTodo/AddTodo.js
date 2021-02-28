import React , { Component } from 'react';
import './AddTodo.css';
// import AddTodo from './AddTodo/AddTodo';
// import ShowTodo from './ShowTodo/ShowTodo';

class AddTodo extends Component {



	render(){
		
	  return (
	    <div className="AddTodo">
	    	<div>
	    		<button onClick={this.props.AddValueInState}>Add</button>
	    		<input type="text" ref={(v) => {this.input = v}}  placeholder="Add New Mession ..." onChange={this.props.UpdateValueInState} />
	    		<div>
	    			<span></span>
	    		</div>
	    	</div>
	    </div>
	  );
	}
}

export default AddTodo;
