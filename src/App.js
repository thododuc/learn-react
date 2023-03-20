import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Course88practice from './course/Course88practice';

const App = () => {
  return (
    <div>
      <Router>
        <Course88practice />
      </Router>
    </div>
  );
};

export default App;
