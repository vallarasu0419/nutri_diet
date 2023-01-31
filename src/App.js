import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';
import Fullproject from './components/full_project/Fullproject';
import PageRoutes from './components/Router';


function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };
  return (
    <div className="App">
      {/* <div className={`mode-${mode}`}>
        <button onClick={toggleMode}>Toggle Mode</button>
      </div> */}
      <PageRoutes />
    </div>

  );
}

export default App;
