import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Feed from './scenes/Feed';
import Post from './scenes/Post';
import Upload from './components/Upload';
import './App.css';

function App() {
  return (
    <div className="App">
      <Upload />
      <Routes>
        <Route index element={<Feed />}/>
        <Route path="/post" element={<Post />}/>
        <Route path="/upload" element={<Upload />}/>
        {/* <img src="https://firebasestorage.googleapis.com/v0/b/upload-storage-ee.appspot.com/o/photos%2FScreen%20Shot%202022-11-11%20at%2010.24.43%20AM.png?alt=media" className="App-logo" alt="logo" /> */}
      </Routes>
    </div>
  );
}

export default App;
