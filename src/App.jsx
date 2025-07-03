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
import { MenuTematico } from "./pages/menuTematico/MenuTematico.jsx";
import { Carrito } from "./pages/carrito/carrito";
import { Profile } from "./pages/profile/profile";
import { Registro } from "./pages/registro/registro";
import { InicioDeSesion } from "./pages/inicioDeSesion/InicioDeSesion.jsx";
import { Favoritos } from "./pages/favoritos/favoritos";
import { Contact } from "./pages/contact/contact";
import {Admin} from './pages/admin/admin'
import { Formulario } from "./components/formulario/formulario.jsx";
import "./App.css";
import ContextProviderFavoriteProduct from "./components/context/contextFavoritos.jsx";

function App() {
  return (
    <BrowserRouter>
      <ImageUploadProvider>
        <AuthProvider>
          <ContextProvider>
            <ContextProviderFavoriteProduct>
              <Header></Header>
              <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/Menu" element={<Menu />} />
                <Route path="/MenuTematico" element={<MenuTematico />} />
                <Route path="/Carrito" element={<Carrito />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/About" element={<About />} />
                <Route path="/Profile" element={<Profile />} />
                <Route
                  path="/InicioDeSesion"
                  element={<InicioDeSesion />}
                />
                <Route path="/Registro" element={<Registro />} />
                <Route path="/Favoritos" element={<Favoritos />} />
                <Route path="/Admin" element={<Admin />} />
                <Route path = "/Formulario" element ={<Formulario/>} />
                <Route path = "/Formulario/editar/:id" element ={<Formulario/>} />
              </Routes>
              <Footer></Footer>
            </ContextProviderFavoriteProduct>
          </ContextProvider>
        </AuthProvider>
      </ImageUploadProvider>
    </BrowserRouter>
  );
}

export default App;
