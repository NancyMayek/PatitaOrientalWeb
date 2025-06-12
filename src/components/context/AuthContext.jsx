import { useNavigate } from "react-router-dom";
import { useImageUpload } from "./uploadImagesContext";
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
  const navigate = useNavigate();
  const apiurl = "http://localhost:3001/api/usuarios"; //Aqui cambias la variable de la url de la api
  const { uploadedUrl, setUploadedUrl } = useImageUpload();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // crea un estado isLoggedIn que indica si el usuario está logueado (por defecto, false).
  const [usuario, setUsuario] = useState(() => {
    //estado usuario almacena los datos del usuario (nombre, email, etc.) desde el localStorage. Si hay un usuario guardado, lo carga automáticamente al iniciar.
    const storedUser = localStorage.getItem("usuario");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [logInInput, setLogInInput] = useState({
    //para el inicio de sesion de formulario
    inputEmail: "",
    inputContraseña: "",
  });
  const [nuevoUsuario, setNuevoUsuario] = useState({
    //para el registro de usuarioformulario
    id: "",
    nombre: "",
    apellido: "",
    email: "",
    direccion: "",
    CP: "",
    imagen: "",
    telefono: "",
    contraseña: "",
  });

  const getListaUsuarios = async () => {
    const res = await fetch(apiurl, {
      method: "GET", //  GET es default
    });
    if (res.ok) {
      const data = await res.json(); // API responde con los datos del usuario

      return data;
    } else {
      console.log("Hubo un error al GET JSON DE USUARIOS");
    }
  };

  
  const guardarLogInInput = (e) => {
    setLogInInput({
      ...logInInput,
      [e.target.name]: e.target.value,
    });
  };

  const logInCheck = async (e) => {
    const usuariosJson = await getListaUsuarios();
    const foundUser = usuariosJson.find(
      (usuarioJson) => usuarioJson.email === logInInput.inputEmail
    );
    if (foundUser) {
      if (foundUser.contraseña === logInInput.inputContraseña) {
        console.log("USUARIO ACEPTADO");
        localStorage.setItem("usuario", JSON.stringify(foundUser)); // guardar usuario encontrado en local storage
        setIsLoggedIn(true);
        setUsuario(foundUser); // Aquí actualizas el contexto inmediatamente
        navigate("/Profile"); // redirigir a la página de perfil
        setLogInInput({
          //Limpiar el forms de inicio
          inputEmail: "",
          inputContraseña: "",
        });
        return true;
      } else {
        return "Contraseña incorrecta";
      }
    } else {
      return "Usuario no encontrado";
      
    }
  };

  const guardarInfoDeUsuarios = (e) => {
    setNuevoUsuario({
      ...nuevoUsuario, //trae toda la infomacion de el usuario que ya esta escrita
      [e.target.name]: e.target.value, // solo cambia la que le pide el input
    });
  };

  const agregarUsuario = async () => {
    const usuarioArr = await getListaUsuarios();
    nuevoUsuario.id = usuarioArr.length + 1; //añadimos el ID de usuario
    nuevoUsuario.imagen = uploadedUrl; //añadimos la url de la imagen

    const res = await fetch(apiurl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nuevoUsuario),
    });

    if (res.ok) {
      const data = await res.json(); // API responde con los datos del usuario
      localStorage.setItem("usuario", JSON.stringify(data)); // guardar usuario en local storage
      setIsLoggedIn(true);
      setUsuario(data); // Aquí actualizas el contexto inmediatamente
      setNuevoUsuario({
        //Limpiar el forms de registro
        id: "",
        nombre: "",
        apellido: "",
        email: "",
        direccion: "",
        CP: "",
        imagen: "",
        telefono: "",
        contraseña: "",
      });
      navigate("/Profile"); // redirigir a la página de perfil
      setUploadedUrl(""); //limpiar url de imagen
    } else {
      console.log("Hubo un error al registrar");
      return localStorage.setItem("isLoggedIn", "false");
    }
  };

  const uptadeUser = async (e) => {
    console.log(uploadedUrl);
    if (uploadedUrl !== "") usuario.imagen = uploadedUrl; //añadimos la url de la imagen
    localStorage.setItem("usuario", JSON.stringify(usuario));
    console.log("usuario imagen es", usuario.imagen);
    const usuarioGuardado = JSON.parse(localStorage.getItem("usuario"));
    fetch(`http://localhost:3001/api/usuarios/${usuarioGuardado.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuarioGuardado),
    })
      .then((res) => res.json())
      .then((data) => {
        setUsuario(data);
        setUploadedUrl(""); //limpiar url de imagen
        console.log(data);
      })
      .catch((err) => {
        console.error("Error actualizando usuario:", err);
      });
  };

  //Este efecto se ejecuta una sola vez al cargar la app:
  useEffect(() => {
    const usuarioGuardado = JSON.parse(localStorage.getItem("usuario")); //Recupera los datos del usuario desde localStorage.
    const estadoLogin = localStorage.getItem("isLoggedIn") === "true";

    if (usuarioGuardado && estadoLogin) {
      //Si encuentra que isLoggedIn es "true" y hay un usuario, los pone en los estados (setIsLoggedIn y setUsuario).
      setIsLoggedIn(true);
      setUsuario(usuarioGuardado);
    }
  }, []);

  /*Aquí se entregan los valores (isLoggedIn, usuario, y sus funciones para actualizar) 
  a cualquier componente que consuma este contexto. */
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        usuario,
        getListaUsuarios,
        setUsuario,
        agregarUsuario,
        guardarInfoDeUsuarios,
        nuevoUsuario,
        logInInput,
        setLogInInput,
        guardarLogInInput,
        logInCheck,
        uptadeUser,
      }}
    >
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
