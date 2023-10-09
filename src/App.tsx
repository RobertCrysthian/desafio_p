import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import { CpfProvider } from './context/cpfContext';

function App() {

  return (
    <BrowserRouter>
      <CpfProvider>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </CpfProvider>
    </BrowserRouter>
  );
}

export default App;
