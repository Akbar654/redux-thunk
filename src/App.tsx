import React from 'react';
import './App.css';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: any;
  }
}

function App() {
  return (
    <div className="App">
      <h2>React Redux</h2>
    </div>
  );
}

export default App;
