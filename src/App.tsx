import React from 'react';
import logo from './logo.svg';
import './App.css';

import Display from './display/display';
import Sidebar from './sidebar/sidebar';

function App() {
  return (
    <div className="App" style={{display: 'flex'}}>
      <Display />
      <Sidebar />
    </div>
  );
}

export default App;
