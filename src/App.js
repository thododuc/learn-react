import React from 'react';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import TodoFeature from './features/Todo';
// import logo from './logo.svg';
import AlbumFeature from './features/Album';

function App() {

  return (
    <div className='App'>
      <p><Link to='/todos'>Todo</Link></p>
      <p><Link to='/albums'>Album</Link></p>

      <p><NavLink to='/todos'>Todo</NavLink></p>
      <p><NavLink to='/albums'>Album</NavLink></p>
      <Routes>
        <Route path="/" element={<div></div>} />
        <Route path="/todos" element={<TodoFeature/>}/>
        <Route path="/albums" element={<AlbumFeature/>}/>
      </Routes>
    </div>
  );
}

export default App;