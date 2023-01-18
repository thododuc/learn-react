import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'Tho';
  const age = 18;
  const isMale = true;
  const student = {
    name: 'Easy Frontend'
  };
  const colorList = ['red', 'green', 'blue'];
  return (
    <div className='App'>
      <header className='App-header'>
      <img src={logo} className='App-logo' alt='logo'/>
        <p>
        Thích thì nhích tới đích.
        </p>
        <p>
            Xin chao {name} - {age} - {isMale? 'Male' : 'Female'}
        </p>

        {isMale? <p>Male</p> : <p>Female</p>}
        {isMale && <p>Male</p>}
        {isMale &&
        <>
          <p>Warrior</p>
          <p>Female</p>
          <p>Female</p>
        </>
        }
        <p>{student.name}</p>
        <ul>
          {colorList.map(color => (
            <li>{color}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
