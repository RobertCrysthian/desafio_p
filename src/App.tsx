import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import { CpfProvider } from './context/cpfContext';
import Header from './components/header';
import Form from './pages/Form';
import MyPosts from './pages/MyPosts';

function App() {

  return (
    <BrowserRouter>
      <CpfProvider>
        <Routes>
            <Route path='/' element={<Login />} />
          <Route path='/' element={<Header/>}>
            <Route path='/home' element={<Home />} />
            <Route path='/form' element={<Form />}/>
            <Route path='/myposts' element={<MyPosts />}/>
          </Route>

        </Routes>
      </CpfProvider>
    </BrowserRouter>
  );
}

export default App;
