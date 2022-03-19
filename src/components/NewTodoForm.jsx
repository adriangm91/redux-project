import React from 'react';
import { useState } from "react";
import './NewTodoForm.css';
import { connect } from 'react-redux';
import { createTodo } from '../storage/actions';


const NewTodoForm = ({ todos, onCreatePressed }) => {
  const [inputValue, setInputValue] = useState(''); //distructing

return (
  <div className="new-todo-form">
    <input className="new-todo-input" 
    type="text" 
    placeholder="Type in your new ToDo here" 
    value= {inputValue}
    onChange = {e => setInputValue(e.target.value)}
    />
    <button 
    className="new-todo-button"
    onClick={() => {
      const isDuplicate = todos.some(todo => todo.text === inputValue);
      if (!isDuplicate) {
        onCreatePressed(inputValue);
        setInputValue('');
      } else {
        alert('Esa tarea ya existe');
      }
    }}
    >Create ToDo</button>
  </div>
)};

const mapStateToProps = (state) => ({
  todos: state.todos,
}); //mapStateToProps no se le debería de cambiar el nombre

const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: text => dispatch(createTodo(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
