import React, { useState } from "react";
import ContextProvider from "./components/context/Contex.jsx";
import { AuthProvider } from "./components/context/AuthContext.jsx";
import { ImageUploadProvider } from "./components/context/uploadImagesContext.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { Inicio } from "./pages/inicio/inicio";
import { About } from "./pages/about/about";
import { Menu } from "./pages/menu/menu";
import { Menu_Tematico } from "./pages/menu_tematico/menu_tematico.jsx";
import { Carrito } from "./pages/carrito/carrito";
import { Profile } from "./pages/profile/profile";
import { Registro } from "./pages/registro/registro";
import { Inicio_de_sesion } from "./pages/inicio_de_sesion/inicio_de_sesion";
import { Favoritos } from "./pages/favoritos/favoritos";
import { Contact } from "./pages/contact/contact";
import {Admin} from './pages/admin/admin'
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <ImageUploadProvider>
        <AuthProvider>
          <ContextProvider>
            <Header></Header>
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/Menu" element={<Menu />} />
              <Route path="/Menu_tematico" element={<Menu_Tematico />} />
              <Route path="/Carrito" element={<Carrito />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/About" element={<About />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/Inicio_de_sesion" element={<Inicio_de_sesion />} />
              <Route path="/Registro" element={<Registro />} />
              <Route path="/Favoritos" element={<Favoritos />} />
              <Route path="/Admin" element={<Admin />} />
            </Routes>
            <Footer></Footer>
          </ContextProvider>
        </AuthProvider>
      </ImageUploadProvider>
    </BrowserRouter>
  );
}

export default App;
