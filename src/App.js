import './App.css';
import Input from './components/Input.js';

import { useState, useEffect } from 'react';

function App() {
  const [text, setText] = useState([]);
  const [length, setLength] = useState(text.length);

  useEffect(()=>{},[length]);

  return (
    <div className="App">
      <Input text={text} setText={setText} setLength={setLength} />
      <div>
        {text.map((element, index) => {
          return (
            <h1 key={`${element}-${index}`}>{element}</h1>
          );
        })}
        {text}
      </div>
    </div>
  );
}

export default App;
