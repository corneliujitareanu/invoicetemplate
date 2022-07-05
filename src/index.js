import React from 'react'
import './App.css'

import Template from './Template'

function App({data = {}}) {
  return (
    <div className="App">
     <Template data={data}/>
    </div>
  );
}

export default App
