import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      </header>
      <div>
        <h1>File Upload</h1>
        <Main />
      </div>
    </div>
  );
}

export default App;
