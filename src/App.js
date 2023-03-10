import React from 'react';
import { Link, Navigate, NavLink, Route, Routes } from 'react-router-dom';
import TodoFeature from './features/Todo';
// import logo from './logo.svg';
import AlbumFeature from './features/Album';
import NotFound from './components/NotFound';

function App() {

  return (
    <div className='App'>
      <p><NavLink to='/todos'>Todo</NavLink></p>
      <p><NavLink to='/albums'>Album</NavLink></p>
      <Routes>
        
        <Route path="home" element={<Navigate to="/" replace/>}/>
        <Route path="/post/:postId" element={<Navigate to="/posts/:postId" replace/>}/>
        <Route path="/" element={<div></div>}/>
        <Route path="/todos/*" element={<TodoFeature/>}/>
        <Route path="/albums" element={<AlbumFeature/>}/>

        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;