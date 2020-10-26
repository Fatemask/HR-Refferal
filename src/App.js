import React from 'react';
import './App.css';
import Layout from './Component/Layout/layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import Main from './Component/maincomponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div>
        <Main/>
      </div>
      </BrowserRouter>
      {/* <Layout/> */}
    </div>
  );
}

export default App;
