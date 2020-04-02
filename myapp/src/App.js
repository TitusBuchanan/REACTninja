import React, { Component } from 'react';
import Ninjas from './Ninjas'


function App() {
  return (
    <div className="App">
      <h1>My First React App</h1>
      <p>Welcome :)</p>
      <Ninjas name="Ryu" age="27" belt="black"/>
      <Ninjas name="Teezus" age="21007" belt="blue"/>
    </div>
  );
}

export default App;
