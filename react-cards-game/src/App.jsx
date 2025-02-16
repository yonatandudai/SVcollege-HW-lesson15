import React, { useState } from 'react';
import './App.css';
import Opening from './components/Opening';
import Game from './components/Game';
import {BrowserRouter, Routes , Route} from 'react-router-dom';
import FinishGame from './components/FinishGame';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Opening />} />
        <Route path="/game" element={<Game />} />
        <Route path="/finish-game" element={<FinishGame />} />
      </Routes>
    </BrowserRouter>  
  )
}

export default App
