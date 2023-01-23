import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
// import PropTypes from 'prop-types';
import TodoList from './components/TodoList';
import DetailPage from './pages/DetailPage';
import ListPage from './pages/ListPage';

TodoFeature.propTypes = {
  
};

function TodoFeature(props) {
  return (
    <div>
      <p><Link to='todos'>List Page</Link></p>
      <p><Link to='123'>Detail Page</Link></p>
      <Routes>
        <Route path='/' element={<ListPage/>}/>
        <Route path=':todoId' element={<DetailPage/>}/>

      </Routes>
    </div>
  );
}

export default TodoFeature;