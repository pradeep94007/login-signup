import React from 'react'
import Corp from './componets/Corp'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Login from './componets/Login';
import Signup from './componets/Signup';

function App() {
  return (
    <div>
   
      <BrowserRouter>
    <ToastContainer></ToastContainer>
      <Routes>
        <Route  path='/' element={ <Corp/>}> </Route>
        <Route  path='/Login' element={ <Login/>}> </Route>
        <Route  path='/Signup' element={ <Signup/>}> </Route>


       
      </Routes>
    </BrowserRouter>

    </div>
  )
}

export default App