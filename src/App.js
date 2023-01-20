import React from 'react';
import ColorBox from './components/ColorBox';
import Counter from './components/Counter';
import AlbumFeature from './features/Album';
// import logo from './logo.svg';

function App() {

  return (
    <div className='App'>
      {/* <TodoFeature /> */}
      <AlbumFeature/>
      <ColorBox/>
      <Counter/>
    </div>
  );
}

export default App;