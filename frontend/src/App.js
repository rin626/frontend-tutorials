
import React from 'react';
import './App.css';
import Posts from './Posts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>This project helps understanding HTTP</h1>
      </header>
      <main>
        <Posts />
      </main>
    </div>
  );
}

export default App;
