import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
// import PropTypes from 'prop-types';
import TodoList from '../../components/TodoList';
import queryString from 'query-string';

ListPage.propTypes = {
  
};

function ListPage(props) {
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

  const location = useLocation()
  const [todoList, setTodoList] = useState(initTodoList);
  const [filteredStatus, setFilteredStatus] = useState(() => {
    const params = queryString.parse(location.search);
    console.log(params)
    return params.status || 'all'
  });


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

export default ListPage;