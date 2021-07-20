import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import A1exporter from './component/A1exporter';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <A1exporter/>
      </BrowserRouter>

    </React.Fragment>
  );
}

export default App;
