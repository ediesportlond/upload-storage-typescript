import React from 'react';
import Upload from './components/Upload';
import './App.css';

function App() {
  return (
    <div className="App">
      <Upload />
      <header className="App-header">
        <img src="https://firebasestorage.googleapis.com/v0/b/upload-storage-ee.appspot.com/o/photos%2FScreen%20Shot%202022-11-11%20at%2010.24.43%20AM.png?alt=media" className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
