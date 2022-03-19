import React from 'react';
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import './TodoList.css';
import { connect } from 'react-redux';
import {removeTodo} from '../storage/actions';
import { markTodo } from '../storage/actions';


const TodoList = ({ todos = [], onRemovePressed, onMarkPressed}) => (
  <div className="list-wrapper">
    <NewTodoForm />
    {todos.map((todo, index) => (
      <TodoListItem 
      key={index} 
      todo={todo} 
      onRemovePressed ={onRemovePressed} 
      onMarkPressed = {onMarkPressed}
      />
    ))}
  </div>
);

const mapStateToProps = (state) =>({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: text => dispatch(removeTodo(text)),
  onMarkPressed: text => dispatch(markTodo(text)),
 
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
