/*Este es un contexto de autenticación (AuthContext) en React que permite
compartir el estado de usuario autenticado en la aplicación sin 
necesidad de pasarlo manualmente entre componentes.

 Esto importa las herramientas principales de React que se usan para:
-createContext: crear un nuevo contexto.
-useState: crear estados locales.
-useContext: consumir el contexto desde cualquier componente.
-useEffect: ejecutar código cuando el componente se monta (carga). */

import { createContext, useState, useContext, useEffect } from "react";

/*
creamos un nuevo contexto de autenticación que servirá como una "caja global"
para guardar información como el usuario actual y si está logueado o no.
*/
const AuthContext = createContext();

/*
Este componente envuelve la aplicación en el contexto de autenticación. 
Es donde se define qué valores estarán disponibles globalmente.
*/
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // crea un estado isLoggedIn que indica si el usuario está logueado (por defecto, false).
  const [usuario, setUsuario] = useState(() => {//estado usuario almacena los datos del usuario (nombre, email, etc.) desde el localStorage. Si hay un usuario guardado, lo carga automáticamente al iniciar.
    const storedUser = localStorage.getItem("usuario");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  

  
  //Este efecto se ejecuta una sola vez al cargar la app:
  useEffect(() => {
    const usuarioGuardado = JSON.parse(localStorage.getItem("usuario")); //Recupera los datos del usuario desde localStorage.
    const estadoLogin = localStorage.getItem("isLoggedIn") === "true";

    if (usuarioGuardado && estadoLogin) {//Si encuentra que isLoggedIn es "true" y hay un usuario, los pone en los estados (setIsLoggedIn y setUsuario).
      setIsLoggedIn(true);
      setUsuario(usuarioGuardado);
    }
  }, []);

  /*Aquí se entregan los valores (isLoggedIn, usuario, y sus funciones para actualizar) 
  a cualquier componente que consuma este contexto. */
  return (
  <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, usuario, setUsuario}}>
    {children}
  </AuthContext.Provider>
  );
};

/*
Este hook personalizado (useAuth) permite que en cualquier parte de la aplicación se pueda escribir:

const { usuario, isLoggedIn, setUsuario } = useAuth();

y así acceder al estado global de autenticación fácilmente.
*/

export const useAuth = () => useContext(AuthContext);

