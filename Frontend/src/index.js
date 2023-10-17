import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Home from './Admin/Home';
import UserLogin from './Admin/Patient/UserLogin';
import UserRegister from './Admin/Patient/UserRegister';
import P_Welcome from './Admin/Patient/P_Welcome';
import P_Header from './P_Header';
import DocterLogin from './Admin/Docter/DocterLogin';
import D_Welcome from './Admin/Docter/D_Welcome';
import DocterRegister from './Admin/Docter/DocterRegister';
import Speciality from './Admin/Speciality/Speciality';
import Footer from './Footer';
import Login from './Admin/Login/Login';
import Features from './Admin/Features/Features';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/features' element={<Features/>}/>
      <Route path='/speciality' element={<Speciality/>}/>
      <Route path='/header' element={<Header/>}/>
      <Route path='/footer' element={<Footer/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/userlogin' element={<UserLogin/>}/>
      <Route path='/uRegister' element={<UserRegister/>}/>
      <Route path='/pWelcome' element={<P_Welcome/>}/>
      <Route path='/pHeader' element={<P_Header/>}/>
      <Route path='/dLogin' element={<DocterLogin/>}/>
      <Route path='/dRegister' element={<DocterRegister/>}/>
      <Route path='/dWelcome' element={<D_Welcome/>}/>
    </Routes>
    </BrowserRouter>
  </div>
);

