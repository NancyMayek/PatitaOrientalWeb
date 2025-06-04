import "./profile.css";
import { useNavigate } from "react-router-dom";
import { Favoritos } from "../favoritos/favoritos";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Profile = () => {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const usuarioGuardado = JSON.parse(localStorage.getItem("usuario"));
    if (usuarioGuardado) {
      setUsuario(usuarioGuardado);
    }
  }, []);
  if (!usuario) {
  return <div>Cargando usuario...</div>;
}

  return (
    <div className="perfil-de-usuario-contenedor">
      {/* Side bar */}
      <div className="perfil-de-Usuario-SideBar">
        <h1 className="title-profile">Perfil de usuario</h1>
        <div className="Usuario-SideBar-Boton">
          <h1>Información de usuario</h1>
        </div>
        <Link className="Usuario-SideBar-Boton" to="/Favoritos">
          <h1>Favoritos</h1>
        </Link>
        <div className="Usuario-SideBar-Boton">
          <h1>Historial de pedidos</h1>
        </div>
      </div>
      {/* Informacion de usuario */}
      <div className="informacion-de-usuario-seccion">
        <div className="usuario-info-resumen">
          <div className="usuario-foto-seccion">
            <div className="foto-container">
              <img
                className="foto-de-perfil"
                src="../../../public/images/profile-picture/profile-picture-example.png"
                alt="foto de perfil"
              />
            </div>
            <img
              className="icono-editar-foto"
              src="../../../public/images/iconos/icon-editar-foto.svg"
              alt="icono de editar foto"
            />
          </div>
          <div className="usuario-informacion-principal">
            <h1 className="title-profile" id="nombre-usuario ">
              {usuario.nombre} {usuario.apellido}
            </h1>
            <div className="direccion">
              <img
                src="../../../public/images/iconos/icon-direccion.svg"
                alt="icono de casa"
              />
              <h2>{usuario.direccion}</h2>
            </div>
          </div>
        </div>

        <form className="form-informacion-usuario">
          <div className="form-nivel-1">
            <div className="elemento-de-formulario">
              <label htmlFor="nombre">Nombre:</label>
              <div className="input-grey">
                <input type="text" id="nombre" name="nombre" value={usuario.nombre} required />
                <img
                  src="../../../public/images/iconos/icon-editar.svg"
                  alt="icono de editar"
                />
              </div>
            </div>
            <div className="elemento-de-formulario">
              <label htmlFor="apellido">Apellido:</label>
              <div className="input-grey">
                <input type="text" id="apellido" name="apellido" value={usuario.apellido} required />
                <img
                  src="../../../public/images/iconos/icon-editar.svg"
                  alt="icono de editar"
                />
              </div>
            </div>
          </div>
          <div className="form-nivel-2">
            <div className="elemento-de-formulario">
              <label htmlFor="correo">Correo:</label>
              <div className="input-grey">
                <input type="email" id="correo" name="correo" value={usuario.email} required />
                <img
                  src="../../../public/images/iconos/icon-editar.svg"
                  alt="icono de editar"
                />
              </div>
            </div>
            <div className="elemento-de-formulario">
              <label htmlFor="telefono">Teléfono:</label>
              <div className="input-grey">
                <input type="text" id="telefono" name="telefono" value={usuario.telefono} required />
                <img
                  src="../../../public/images/iconos/icon-editar.svg"
                  alt="icono de editar"
                />
              </div>
            </div>
          </div>
          <div className="form-nivel-3">
            <div className="elemento-de-formulario">
              <label htmlFor="direccion">Dirección:</label>
              <div className="input-grey">
                <input type="text" id="direccion" name="direccion" value={usuario.direccion} required />
                <img
                  src="../../../public/images/iconos/icon-editar.svg"
                  alt="icono de editar"
                />
              </div>
            </div>
            <div className="elemento-de-formulario">
              <label htmlFor="CP">Código Postal:</label>
              <div className="input-grey">
                <input type="number" id="CP" name="CP" value={usuario.CP} required />
                <img
                  src="../../../public/images/iconos/icon-editar.svg"
                  alt="icono de editar"
                />
              </div>
            </div>
          </div>

          <div className="elemento-de-formulario" id="referencias">
            <label htmlFor="referencias">Referencias:</label>
            <div className="input-grey">
              <input type="text" id="referencias" name="referencias" value={"Al lado de un Oxxo"} required />
              <img
                src="../../../public/images/iconos/icon-editar.svg"
                alt="icono de editar"
              />
            </div>
          </div>

        <div className="metodos-de-pago-seccion">
          <h2 className="title-profile">Métodos de pago:</h2>
            <div className="checkbox-metodos-de-pago">
            <div className="metodos-de-pago">
              <div>
                <input
                  type="checkbox"
                  id="transferencia"
                  name="transferencia"
                  value="transferencia"
                  required
                />
                <label htmlFor="transferencia">Transferencia</label>
                
              </div>
              <div>
                <input
                  type="checkbox"
                  id="efectivo"
                  name="efectivo"
                  value="efectivo"
                  required
                />
                <label htmlFor="efectivo">Efectivo</label>
                
              </div>
            </div>
            <div>
              <div className="cambio">
                <input
                  type="checkbox"
                  id="cambio"
                  name="cambio"
                  value="cambio"
                  required
                />
                <label htmlFor="cambio">Con cambio</label>
                
              </div>
              <div>
                <input
                  type="checkbox"
                  id="noCambio"
                  name="noCambio"
                  value="noCambio"
                  required
                />
                <label htmlFor="noCambio">Sin cambio</label>
                
              </div>
            </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export { Profile };
