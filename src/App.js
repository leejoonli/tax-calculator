import './App.css';
import Input from './components/Input.js';

import { useState, useEffect } from 'react';
import {Outlet} from 'react-router-dom';

function App() {
  const [taxOwed, setTaxOwed] = useState(null);

  useEffect(()=>{},[taxOwed]);

  return (
    <div className="App">
      {/*<Outlet /> <--inserted in wrong place*/}
      <Input taxOwed={taxOwed} setTaxOwed={setTaxOwed} />
      {taxOwed ?
        <h1>You owe ${taxOwed} in taxes for the 2022 year</h1>
        :
        <h1>Input income for year 2022</h1>
      }
    </div>
  );
}

export default App;
