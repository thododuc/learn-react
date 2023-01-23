import React from 'react';
import { Link, Navigate, NavLink, Route, Routes } from 'react-router-dom';
import TodoFeature from './features/Todo';
// import logo from './logo.svg';
import AlbumFeature from './features/Album';

function App() {

  return (
    <div className='App'>
      <p><NavLink to='/albums'>Album</NavLink></p>
      <Routes>
        
        <Route path="home" element={<Navigate to="/" replace/>}/>
        <Route path="/post/:postId" element={<Navigate to="/posts/:postId" replace/>}/>
        <Route path="/" element={<div></div>}/>
        <Route path="/todos/*" element={<TodoFeature/>}/>
        <Route path="/albums" element={<AlbumFeature/>}/>
      </Routes>
    </div>
  );
}

export default App;