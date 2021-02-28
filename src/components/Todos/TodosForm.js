import React , { useState } from 'react';
import FeatherIcon from 'feather-icons-react';

const TodoForm = (props) => {

    let [newTitle , setNewTitle] = useState("")
    let [editRender , setEditRender] = useState(false)

    if (props.mode === "edit" && !editRender) {
        setNewTitle(props.todos[0].title);
        setEditRender(true)
    }

    let newTitleHandler = (event) => {
        setNewTitle(event.target.value)
    }

    let addNewTitle = () => {
        let nTitle = newTitle
        setNewTitle("")
        setEditRender(false)
        return props.addTodos(nTitle)
    }

    let btnString = "Edit";

    props.mode === "edit" ? (btnString = "Edit...") : (btnString = "Add")

    return (
    <div className="todos-form">
    	<div className="todos-form_icon" onClick={props.showUncomplete}>
    		<FeatherIcon icon="circle" />
    	</div>
    	<div className="todos-form_form">
    		<input type="text" placeholder="Add New Mession...." onChange={newTitleHandler} value={newTitle} />
    	</div>
    	<div className="todos-form_submit">
    		<button 
                className="btn" 
                onClick={addNewTitle} 
                disabled={newTitle.trim() ? false : true}>{btnString}
            </button>
    	</div>
    </div>
    );
}

export default TodoForm;
