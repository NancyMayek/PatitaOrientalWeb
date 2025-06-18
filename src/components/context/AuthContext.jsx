import { useNavigate } from "react-router-dom";
import { useImageUpload } from "./uploadImagesContext";
import { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const { uploadedUrl, setUploadedUrl } = useImageUpload();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [usuario, setUsuario] = useState(() => {
    const storedUser = localStorage.getItem("usuario");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [logInInput, setLogInInput] = useState({
    inputEmail: "",
    inputContraseña: "",
  });

  const [nuevoUsuario, setNuevoUsuario] = useState({
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
    const lista = localStorage.getItem("listaUsuarios");
    return lista ? JSON.parse(lista) : [];
  };

  const guardarListaUsuarios = async (usuarios) => {
    localStorage.setItem("listaUsuarios", JSON.stringify(usuarios));
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
        localStorage.setItem("usuario", JSON.stringify(foundUser));
        setIsLoggedIn(true);
        setUsuario(foundUser);
        navigate("/Profile");
        setLogInInput({
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
      ...nuevoUsuario,
      [e.target.name]: e.target.value,
    });
  };

  const agregarUsuario = async () => {
    const usuarios = await getListaUsuarios();
    const nuevoId = usuarios.length > 0 ? usuarios[usuarios.length - 1].id + 1 : 1;
    const nuevo = {
      ...nuevoUsuario,
      id: nuevoId,
      imagen: uploadedUrl,
    };
    const nuevaLista = [...usuarios, nuevo];
    await guardarListaUsuarios(nuevaLista);
    localStorage.setItem("usuario", JSON.stringify(nuevo));
    setIsLoggedIn(true);
    setUsuario(nuevo);
    setNuevoUsuario({
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
    setUploadedUrl("");
    navigate("/Profile");
  };

  const uptadeUser = async (e) => {
    if (uploadedUrl !== "") usuario.imagen = uploadedUrl;
    const usuarios = await getListaUsuarios();
    const usuariosActualizados = usuarios.map((u) =>
      u.id === usuario.id ? usuario : u
    );
    await guardarListaUsuarios(usuariosActualizados);
    localStorage.setItem("usuario", JSON.stringify(usuario));
    setUsuario(usuario);
    setUploadedUrl("");
  };

  useEffect(() => {
    const usuarioGuardado = JSON.parse(localStorage.getItem("usuario"));
    const estadoLogin = localStorage.getItem("isLoggedIn") === "true";
    if (usuarioGuardado && estadoLogin) {
      setIsLoggedIn(true);
      setUsuario(usuarioGuardado);
    }
  }, []);

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

export const useAuth = () => useContext(AuthContext);

