import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header/header'
import Footer from './components/footer/footer'
import { Inicio } from './pages/inicio/inicio'
import { About } from './pages/about/about'
import { Menu } from './pages/menu/menu'
import { Menu_tematico } from './pages/menu_tematico/menu_tematico'
import {Carrito} from './pages/carrito/carrito';
import  Menu_tematico  from './pages/menu_tematico/menu_tematico'
import Carrito from './pages/carrito/carrito';
import { Profile } from './pages/profile/profile'
import { Registro } from './pages/registro/registro'
import { Inicio_de_sesion } from './pages/inicio_de_sesion/inicio_de_sesion'
import { Favoritos } from './pages/favoritos/favoritos'
import { Contact } from './pages/contact/contact'
import './App.css'

function App() {
  
  return (
    <BrowserRouter>
    <Header></Header>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/Menu" element={<Menu/>}/>
        <Route path="/Menu_tematico" element={<Menu_tematico/>}/>
        <Route path="/Carrito" element={<Carrito/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/Inicio_de_sesion" element={<Inicio_de_sesion/>}/>
        <Route path="/Registro" element={<Registro/>}/>
        <Route path="/Favoritos" element={<Favoritos/>}/>
      </Routes>
    <Footer></Footer>
    </BrowserRouter>
  )
}

export default App