import { CREATE_TODO, MARK_TODO, REMOVE_TODO } from './actions';

export const todos = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TODO: {
      const { text } = payload;
      const newTodo = {
        text,
        isComplete: false,
      };
      return state.concat(newTodo);
    }
    case REMOVE_TODO: {
      const { text } = payload;
      return state.filter(todo => todo.text !== text);
    }
    case MARK_TODO: {
      const { text } = payload;
      return state.map(todo => todo.text !== text)
    }
    default: {
      return state; 
    }
  }
};