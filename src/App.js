import './App.css';
import Input from './components/Input.js';

import { useState, useEffect } from 'react';
import {Outlet} from 'react-router-dom';

function App() {
  const [taxOwed, setTaxOwed] = useState(null);

  useEffect(()=>{},[taxOwed]);

  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
