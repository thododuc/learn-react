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
  const [filteredStatus, setFilteredStatus] = useState('all')
  const handleTodoClick = (todo, idx) => {
    const newTodoList = [...todoList];
    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === 'completed'? 'new':'completed',
    }
    setTodoList(newTodoList);
  }

  const handleShowAll = () => {
    setFilteredStatus('all');
  }
  const handleShowCompleted = () => {
    setFilteredStatus('completed');
  }
  const handleShowNew = () => {
    setFilteredStatus('new');
  }

  const renderedTodoList = todoList.filter(todo => filteredStatus === 'all' || filteredStatus === todo.status)
  console.log(renderedTodoList);

  return (
    <div>
      <h2>Todo List</h2>
      <p>Misson - {filteredStatus}</p>
      <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick}/>

      <div>
        <button onClick={handleShowAll}>Show All</button>
        <button onClick={handleShowCompleted}>Show Completed</button>
        <button onClick={handleShowNew}>Show New</button>
      </div>
    </div>
  );
}

export default TodoFeature;