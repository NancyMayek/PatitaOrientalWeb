import { Link } from 'react-router-dom';
import gatitoConCorazones from '../../../public/images/logo-patita-oriental/gatitoConCorazones.png';
import './registro.css'

const  Registro= () => {
    return(
        <>
        <section class="contact-section">
                <div class="container">
                  <div class="row align-items-center">
                    <div class="col-md-6 mb-4 alinear">
                      <img
                        src={gatitoConCorazones}
                        alt="Gatito llamando"
                        class="imagen-gato"
                      />
                      <h2 class="contact-title mb-3">¡Bienvenido!</h2>
                      <h3 class="link-to-logIn" >¿Ya tienes una cuenta? <Link class="link-to-logIn" to="/Inicio_de_sesion" >Inicia Sesión</Link></h3>
                      <div class="row row-1">
                        <div class="line short white"></div>
                        <div class="line medium white"></div>
                        <div class="line extra-long white"></div>
                      </div>
                      <div class="row row-2">
                        <div class="line long white"></div>
                        <div class="line short white"></div>
                        <div class="line space"></div>
                        <div class="line long pink"></div>
                      </div>
                    </div>
        
                    <div class="col-md-6">
                      <form class="contact-form" id="contactForm">
                        <h4 class="text-white mb-4 fw-bold mb-3 form-title">
                          Regístrarse
                        </h4>
                        <div class="row">
                          <div class="col-md-6 mb-3">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Nombre"
                            />
                          </div>
                          <div class="col-md-6 mb-3">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Apellido"
                            />
                          </div>
                        </div>
                        <div class="mb-3">
                          <input
                            type="email"
                            class="form-control"
                            placeholder="Correo electrónico"
                          />
                        </div>
                        <div class="mb-3">
                          <input
                            type="password"
                            class="form-control"
                            placeholder="Contraseña"
                          />
                        </div>
                        <div class="mb-3">
                          <input
                            type="password"
                            class="form-control"
                            placeholder="Confirmar Contraseña"
                          />
                        </div>
                        <div class="row">
                          <div class="col-md-6 mb-3">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Dirección"
                            />
                          </div>
                          <div class="col-md-6 mb-3">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Código Postal"
                            />
                          </div>
                        </div>
                        <div class="mb-3">
                          <input
                            type="tel"
                            class="form-control"
                            placeholder="Teléfono"
                          />
                        </div>
                       
                        <button type="submit" class="btn btn-pink w-100 fw-bold">
                          Enviar
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
              </>
    );
}

export {Registro}