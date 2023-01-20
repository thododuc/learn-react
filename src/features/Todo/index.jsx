import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import TodoList from './components/TodoList';

TodoFeature.propTypes = {
  
};

function TodoFeature(props) {
  const initTodoList = [
    {
      id: 1,
      title: 'Eat',
      status: 'new',
    },
    {
      id: 2,
      title: 'Sleep',
      status: 'completed',
    },
    {
      id: 3,
      title: 'Code',
      status: 'new',
    },
  ]

  const [todoList, setTodoList] = useState(initTodoList);
  const handleTodoClick = (todo, idx) => {
    const newTodoList = [...todoList];
    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === 'completed'? 'new':'completed',
    }
    setTodoList(newTodoList);
  }

  return (
    <div>
      <h2>Todo List</h2>
      <TodoList todoList={todoList} onTodoClick={handleTodoClick}/>
    </div>
  );
}

export default TodoFeature;