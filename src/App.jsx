import './App.css';
import {React, useState} from 'react'
import Quiz from './pagina2.jsx'
import { StartButton } from './button';

import {
  BrowserRouter,
  Routes,
  Route,  
} from "react-router-dom";




const App = () => {
  const mybutton = (value) => {
    if(value) {
      return(
         <a href="/quiz" rel="noreferrer">
          <button onClick={event => {setHome(event, false)}}  className="initial-button"><p>Start Learning!</p></button>
        </a>)
    }
  }

  return (
    <div>
    <BrowserRouter>

    <Routes>
      <Route
      path="/quiz"
      element={<Quiz/>}
      />
      <Route
      path="/"
      element={<StartButton/>}
      />
    </Routes>

    </BrowserRouter>


    </div>       
  )
}

export default App;
