import React, { useState } from 'react';

Counter.propTypes = {
  
};

function Counter(props) {
  const [count, setColor] = useState(0);
  return (
    <div>
      {count}
      <button onClick={() => setColor(x => x+1)}>Increase</button>
    </div>
  );
}

export default Counter;