import React , { Component } from 'react';
import './BoxContent.css';
import AddTodo from '../AddTodo/AddTodo';
import ShowTodo from '../ShowTodo/ShowTodo';

class BoxContent extends Component {

	state = {
		CurrentValue:'',
		NewValue:[]
	}

	UpdateValueInState = (e) =>{
		this.setState({
			CurrentValue: e.target.value
		})

	}

	AddValueInState = (e) =>{
		e.preventDefault();
		let CurrentValue = this.state.CurrentValue;
		let NewValue = this.state.NewValue;
		if(CurrentValue.length){
			NewValue.push(CurrentValue , ' ')
			this.setState({
				CurrentValue:' ',
				NewValue
			})
		}
	}

	render(){
	  return (
	    <div className="BoxContent">
	    	<p>{this.state.NewValue}</p>
	    	<AddTodo AddValueInState={this.AddValueInState} UpdateValueInState={this.UpdateValueInState} />
	    	<ShowTodo />
	    </div>
	  );
	}
}

export default BoxContent;
