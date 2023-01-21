import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TodoFeature from './features/Todo';
// import logo from './logo.svg';
import AlbumFeature from './features/Album';

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/todos" element={<TodoFeature/>}/>
        <Route path="/albums" element={<AlbumFeature/>}/>
      </Routes>
    </div>
  );
}

export default App;