import React from 'react';
import TodoListItem, {Todo} from "./TodoListItem";
import './TodoList.scss'

type Props = {
    todos: Array<Todo>;
    onRemove: Function;
    onToggle: Function;
}

const TodoList = ( {todos, onRemove, onToggle} : Props) => {

  return(
      <div className="TodoList">
          {
              todos.map(todo => (
                  <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle}/>
              ))
          }
      </div>
  );
};

export default TodoList;
