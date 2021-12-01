import React, { useState } from 'react';
import './style.css';

function App() {
  const [name, setName] = useState('');

  const [toggle, setToggle] = useState('ON');
  function handleclick() {
    if (toggle == 'ON') {
      setName('Rohit');
      setToggle('OFF');
    } else {
      setName('');
      setToggle('ON');
    }
  }
  return (
    <>
      <h1>{name}</h1>
      <button onClick={handleclick}>click me</button>
    </>
  );
}

export default App;
