import React from 'react';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Projects from './components/Projects';


function App() {
  const [english, setEnglish] = useState(true);

  return (
    <div className="main-container">
      <Header english={english} setEnglish={setEnglish} />
      <div className='image--container'>
        <h1 className='heading--image--text'>I am Eirik</h1>
      </div>
      <main >
        <Introduction english={english} />
        <Projects />
      </main>
    </div>
  );
}

export default App;
