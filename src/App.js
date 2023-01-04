import './App.css';
import Input from './components/Input.js';

import { useState, useEffect } from 'react';

function App() {
  const [taxOwed, setTaxOwed] = useState(null);
  const [ca, setCa] = useState(false);
  const [az, setAz] = useState(false);

  useEffect(()=>{},[taxOwed]);

  const handleChange = (e) => {
    if(e.target.id === "AZ") {
      if(!az) {
        setAz(true);
      } else {
        setAz(false);
      }
    } else if (e.target.id === "CA") {
      if(!ca) {
        setCa(true);
      } else {
        setCa(false);
      }
    }
  }

  return (
    <div className="App">
      <Input taxOwed={taxOwed} ca={ca} az={az} setTaxOwed={setTaxOwed} />
      {taxOwed ?
        <h1>You owe ${taxOwed} in taxes for the 2022 year</h1>
        :
        <h1>Input income for year 2022</h1>
      }
      <label>
        <input type="checkbox" id="CA" onChange={handleChange}></input>
        CA
      </label>
      <label>
        <input type="checkbox" id="AZ" onChange={handleChange}></input>
        AZ
      </label>
    </div>
  );
}

export default App;
