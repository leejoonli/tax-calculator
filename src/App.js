import './App.css';
import Input from './components/Input.js';

import { useState, useEffect } from 'react';

function App() {
  const [text, setText] = useState([]);

  useEffect(()=>{
    console.log('hello world');
  },[text]);

  return (
    <div className="App">
      <Input text={text} setText={setText} />
      <div>
        {text.map((element, index) => {
          return (
            <h1 key={`${element}-${index}`}>{element}</h1>
          );
        })}
      </div>
    </div>
  );
}

export default App;
