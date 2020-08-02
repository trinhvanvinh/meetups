import React from 'react';
import './App.css';
import Main from './component/Main';
import Navbar from "./component/Navbar";

const App=()=> (

    <div >
      <Navbar />
      <div className="container">
        <Main/>
      </div>

    </div>

)

export default App;
