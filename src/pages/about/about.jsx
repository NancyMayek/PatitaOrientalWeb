import './about.css'


const About = () => {
     return (
  <div className="about-root main-content">{/* encapsula los estilos de about.css */} 
  <br></br>
  <h1>Historia de Patita Oriental</h1>
    <section id="historia">
        <div className="section">
            <img src="/images/imgAbout/Platillo1.png" alt="imagen1" />
         <div className="text">
                <h2>Del antojo al emprendimiento: así nació Patita Oriental</h2>
                <p>La idea de este restaurante coreano en Jalisco surgió cuando Gabriel y sus roomies, amantes de la
                    cocina
                    coreana, decidieron compartir sus recetas favoritas con el mundo.</p>
            </div>
      </div>
      <div className="section">
            <img srcSet="/images/imgAbout/Platillo2.png" alt="imagen2"></img>
            <div className="text">
                <h2>Una página con mucho sabor: digitalizando Patita Oriental</h2>
                <p>Aún sin página web, el equipo enfrentaba retos para conectar con más clientes. Nuestra solución fue
                    crear
                    un sitio accesible y directo al consumidor.</p>
            </div>
        </div>
      <div className="section">
            <img srcSet="/images/imgAbout/Platillo3.png" alt="imagen3"></img>
            <div className="text">
                <h2>Más que delivery: control total del pedido. </h2>
                <p>En plataformas como Uber Eats o Rappi, los precios subían demasiado. Por eso, la nueva página
                    permitirá
                    hacer pedidos con seguimiento personalizado y precios justos</p>
            </div>
        </div>
        <div className="section">
            <img srcSet="/images/imgAbout/Platillo4.png" alt="imagen4"></img>
            <div className="text">
                <h2>Tecnología al sevicio </h2>
                <p>Con esta web buscamos empoderar a Patita Oriental para que crezca digitalmente, evite comisiones
                    elevadas
                    y conecte mejor con su comunidad.</p>
            </div>
        </div>
    </section> 
    <section id="sobreDevelopers">
        <br></br>
      <div className="developerCards derecha">
            <div id="info_developers">


                <div className="nombre_developers">
                    <img className="grafico-estrella-developers" src="/images/imgAbout/grafico_estrellas_derecho.svg"
                        alt="elemento estrella"/>
                    <h2 className="subtitulos_para_seccion">Nancy Mayek intuitivasTorres Aguilar</h2>
                    <img class="grafico-estrella-developers" src="/images/imgAbout/grafico_estrellas_izquierdo.svg"
                        alt="elemento estrella"/>
                </div>

                <p className="parrafos">
                    Soy desarrolladora web con formación en Ingeniería en Ciencias de la Computación. Descubrí mi pasión
                    por el desarrollo web muy temprano en mi carrera, y desde entonces me he dedicado a crear soluciones
                    funcionales con un enfoque visual. Me motiva construir experiencias digitales que sean ,
                    atractivas y eficientes
                </p>


                <div className="contactame-developer">
                    <h3> Contáctame </h3>
                    <div>
                        <div id="contactoTelyEmail">
                            <div className="contacto">
                                <img className="icon-contactame" src="/images/imgAbout/icono_telefono.svg"
                                    alt="icon telefono"/>
                                <h4>(+52) 221-418-8737</h4>
                            </div>
                            <div className="contacto">
                                <img className="icon-contactame" src="/images/imgAbout/icono_email.svg" alt="icon email"/>
                                <h4>torresaguilarnancymayek@gmail.com</h4>
                            </div>
                        </div>

                        <div className="contacto">
                            <img className="icon-contactame" src="/images/imgAbout/icono_linkedn.svg" alt="icon linkedn"/>
                            <a
                                href="www.linkedin.com/in/nancy-mayek-torres-aguilar">www.linkedin.com/in/nancy-mayek-torres-aguilar</a>
                        </div>
                    </div>
                </div>
            </div>
           <div className="imagen_circular">
                <img srcSet="public\images\imgAbout\Nancy_Mayek_Torres_Aguilar.png" alt="foto de developer"/>
           </div> 
        </div>
        <div className="container">
            <div className="lineasRectas-decoration">
                <img srcSet="public\images\imgAbout\grafico_lineas_rectas_izquierda.svg" alt="línea recta decorativa" />
            </div>
        </div>
        <div className="developerCards izquierda">
            <div className="imagen_circular">
                <img srcSet="public\images\imgAbout\america-rodriguez-rodriguez.png" alt="foto de developer"/>
            </div>

            <div id="info_developers">


                <div className="nombre_developers">
                    <img className="grafico-estrella-developers" src="public\images\imgAbout\grafico_estrellas_derecho.svg"
                        alt="elemento estrella"/>
                    <h2 className="subtitulos_para_seccion">América Yazmín Rodríguez Rodríguez</h2>
                    <img className="grafico-estrella-developers" src="public\images\imgAbout\grafico_estrellas_izquierdo.svg"
                        alt="elemento estrella"/>
                </div>

                <p className="parrafos">
                    Soy desarrolladora web con formación en Ingeniería Industrial. Me apasiona crear soluciones web
                    funcionales aplicando mi experiencia en mejora de procesos y pensamiento lógico. Me considero una
                    persona adaptable, proactiva y orientada a resultados. Estoy en constante aprendizaje y motivada por
                    desarrollar tecnología que genere un impacto real.
                </p>


                <div className="contactame-developer">
                    <h3> Contáctame </h3>
                    <div>
                        <div id="contactoTelyEmail">
                            <div className="contacto">
                                <img className="icon-contactame" srcSet="public\images\imgAbout\icono_telefono.svg"
                                    alt="icon telefono"/>
                                <h4>(+52) 3317911448</h4>
                            </div>
                            <div className="contacto">
                                <img className="icon-contactame" srcSet="public\images\imgAbout\icono_email.svg" alt="icon email"/>
                                <h4>amerodriguez@outlook.com</h4>
                            </div>
                        </div>

                        <div class="contacto">
                            <img className="icon-contactame" srcSet="public\images\imgAbout\icono_linkedn.svg" alt="icon linkedn"/>
                            <a
                                href="www.linkedin.com/in/america-yazmin-rodriguez-rodriguez/">www.linkedin.com/in/america-yazmin-rodriguez-rodriguez/</a>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
        <div className="container">
            <div className="lineasRectas-decoration-derecha">
                <img src="public\images\imgAbout\grafico_lineas_rectas_derecha.svg" alt="línea recta decorativa" />
            </div>
        </div>
        <div className="developerCards derecha">
            <div id="info_developers">
                <div className="nombre_developers">
                    <img className="grafico-estrella-developers" srcSet="public\images\imgAbout\grafico_estrellas_derecho.svg"
                        alt="elemento estrella"/>
                    <h2 className="subtitulos_para_seccion">Francisco Javier Caldera Castro</h2>
                    <img className="grafico-estrella-developers" srcSet="public\images\imgAbout\grafico_estrellas_izquierdo.svg"
                        alt="elemento estrella"/>
                </div>

                <p className="parrafos">
                    Soy Ingeniero mecatronico con experiencia en Desarrollo Web, apasionado por la tecnologia y los
                    nuevos retos que esta conlleva. Desde la preparatoria indague en empresas y me fui orientando a la
                    parte de ingenieria. Por lo cual he estado muy de cerca aprendiendo y actalizandome hacia las
                    necesidades del cliente.
                </p>


                <div className="contactame-developer">
                    <h3> Contáctame </h3>
                    <div>
                        <div id="contactoTelyEmail">
                            <div class="contacto">
                                <img className="icon-contactame" srcSet="public\images\imgAbout\icono_telefono.svg"
                                    alt="icon telefono"/>
                                <h4>(+52) 3311137876</h4>
                            </div>
                            <div className="contacto">
                                <img className="icon-contactame" srcSet="public\images\imgAbout\icono_email.svg" alt="icon email"/>
                                <h4>fcaldera@gmail.com</h4>
                            </div>
                        </div>

                        <div className="contacto">
                            <img className="icon-contactame" srcSet="public\images\imgAbout\icono_linkedn.svg" alt="icon linkedn"/>
                            <a
                                href="https://www.linkedin.com/in/francisco-javier-caldera/">https://www.linkedin.com/in/francisco-javier-caldera/</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="imagen_circular">
                <img src="public\images\imgAbout\francisco-caldera.png" alt="foto de developer"/>
            </div>
        </div>
        <div className="container">
            <div className="lineasRectas-decoration">
                <img srcSet="public\images\imgAbout\grafico_lineas_rectas_izquierda.svg" alt="línea recta decorativa" />
            </div>
        </div>
        <div className="developerCards izquierda">
            <div className="imagen_circular">
                <img srcSet="public\images\imgAbout\cecilia-gutierrez.png" alt="foto de developer"/>
            </div>

            <div id="info_developers">


                <div className="nombre_developers">
                    <img className="grafico-estrella-developers" srcSet="public\images\imgAbout\grafico_estrellas_derecho.svg"
                        alt="elemento estrella"/>
                    <h2 className="subtitulos_para_seccion">Cecilia Guadalupe Gutierrez Urbano</h2>
                    <img className="grafico-estrella-developers" srcSet="public\images\imgAbout\grafico_estrellas_izquierdo.svg"
                        alt="elemento estrella"/>
                </div>

                <p class="parrafos">
                    Soy Ingeniera en Tecnologías de la Información y Comunicaciones. Me apasiona el diseño de páginas
                    web, y por eso decidí adentrarme mas el mundo del desarrollo web para entenderlo a profundidad. Me
                    encanta explorar nuevas tecnologias y estoy motivada por seguir creciendo y desarrollandome
                    profesionalmente en este campo.
                </p>


                <div className="contactame-developer">
                    <h3> Contáctame </h3>
                    <div>
                        <div id="contactoTelyEmail">
                            <div className="contacto">
                                <img className="icon-contactame" srcSet="public\images\imgAbout\icono_telefono.svg"
                                    alt="icon telefono"/>
                                <h4>(+52) 5515765737</h4>
                            </div>
                            <div className="contacto">
                                <img className="icon-contactame" srcSet="public\images\imgAbout\icono_email.svg" alt="icon email"/>
                                <h4>ceciliagutierrezurbano@gmail.com</h4>
                            </div>
                        </div>

                        <div className="contacto">
                            <img className="icon-contactame" srcSet="public\images\imgAbout\icono_linkedn.svg" alt="icon linkedn"/>
                            <a
                                href="www.linkedin.com/in/cecilia-guadalupe-gutierrez-urbano-09139255">www.linkedin.com/in/cecilia-guadalupe-gutierrez-urbano-09139255</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="lineasRectas-decoration-derecha">
                <img srcSet="public\images\imgAbout\grafico_lineas_rectas_derecha.svg" alt="línea recta decorativa"/>
            </div>
        </div>
        <div className="developerCards derecha">
            <div id="info_developers">


                <div className="nombre_developers">
                    <img className="grafico-estrella-developers" src="public\images\imgAbout\grafico_estrellas_derecho.svg"
                        alt="elemento estrella"/>
                    <h2 className="subtitulos_para_seccion">Shelder Tatiana Flores Durán</h2>
                    <img className="grafico-estrella-developers" srcSet="public\images\imgAbout\grafico_estrellas_izquierdo.svg"
                        alt="elemento estrella"/>
                </div>

                <p className="parrafos">
                    Soy Desarrolladora web, con formación en Ingenieria Textil,Apasionada por la programación y el
                    desarrollo web, con un enfoque en el stack tecnológico de Java.Me apasiona crear soluciones
                    digitales integrando creatividad, funcionalidad y estructura.
                </p>


                <div className="contactame-developer">
                    <h3> Contáctame </h3>
                    <div>
                        <div id="contactoTelyEmail">
                            <div className="contacto">
                                <img className="icon-contactame" srcSet="public\images\imgAbout\icono_telefono.svg"
                                    alt="icon telefono"/>
                                <h4>56 13 29 89 23</h4>
                            </div>
                            <div className ="contacto">
                                <img className="icon-contactame" srcSet="public\images\imgAbout\icono_email.svg" alt="icon email"/>
                                <h4>sheldertatiana12@gmail.com</h4>
                            </div>
                        </div>

                        <div className="contacto">
                            <img className="icon-contactame" srcSet="public\images\imgAbout\icono_linkedn.svg" alt="icon linkedn"/>
                            <a
                                href="www.linkedin.com/in/shelder-tatiana-flores-duran">www.linkedin.com/in/shelder-tatiana-flores-duran</a>
                        </div>
                    </div>
                </div>

            </div>

            <div class="imagen_circular">
                <img srcSet="public\images\imgAbout\shelder-tatiana.png" alt="foto de developer"/>
            </div>
        </div>

        <div className="container">
            <div className="lineasRectas-decoration">
                <img srcSet="public\images\imgAbout\grafico_lineas_rectas_izquierda.svg" alt="línea recta decorativa" />
            </div>
        </div>
        <div class="developerCards izquierda">
            <div className="imagen_circular">
                <img srcSet="public\images\imgAbout\abigail-alexandra-galvez.jpg" alt="foto de developer"/>
            </div>

            <div id="info_developers">


                <div class="nombre_developers">
                    <img className="grafico-estrella-developers" srcSet="public\images\imgAbout\grafico_estrellas_derecho.svg"
                        alt="elemento estrella"/>
                    <h2 className="subtitulos_para_seccion">Abigail Alexandra Galvez Cortés</h2>
                    <img className="grafico-estrella-developers" srcSet="public\images\imgAbout\grafico_estrellas_izquierdo.svg"
                        alt="elemento estrella"/>
                </div>

                <p className="parrafos">
                    Soy desarrolladora web con formación en Ingeniería Petrolera. Me apasiona el diseño de páginas web y
                    crear soluciones funcionales aplicando mis conocimientos y experiencia en optimización de procesos y
                    pensamiento lógico - analitico. Considero que mi amor por el aprendizaje y la creatividad son
                    herramientas clave en el sector tecnológico para crear proyectos de impacto.
                </p>


                <div className="contactame-developer">
                    <h3> Contáctame </h3>
                    <div>
                        <div id="contactoTelyEmail">
                            <div className="contacto">
                                <img className="icon-contactame" srcSet="public\images\imgAbout\icono_telefono.svg"
                                    alt="icon telefono"/>
                                <h4>(+52) 5510301572</h4>
                            </div>
                            <div className="contacto">
                                <img className="icon-contactame" srcSet="public\images\imgAbout\icono_email.svg" alt="icon email"/>
                                <h4>galvezabigail79@gmail.com</h4>
                            </div>
                        </div>

                        <div class="contacto">
                            <img className="icon-contactame" src="public\images\imgAbout\icono_linkedn.svg" alt="icon linkedn"/>
                            <a
                                href="www.linkedin.com/in/abigail-alexandra-galvez-cortés">www.linkedin.com/in/abigail-alexandra-galvez-cortés</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="container">
            <div className="lineasRectas-decoration-derecha">
                <img src="public\images\imgAbout\grafico_lineas_rectas_derecha.svg" alt="línea recta decorativa" />
            </div>
        </div>
        <div className="developerCards derecha">
            <div id="info_developers">


                <div className="nombre_developers">
                    <img className="grafico-estrella-developers" srcSet="public\images\imgAbout\grafico_estrellas_derecho.svg"
                        alt="elemento estrella"/>
                    <h2 className="subtitulos_para_seccion">José Gabriel Álvarez Pérez</h2>
                    <img className="grafico-estrella-developers" srcSet="public\images\imgAbout\grafico_estrellas_izquierdo.svg"
                        alt="elemento estrella"/>
                </div>

                <p className="parrafos">
                    Desarrollador FullStack Junior con formación en ingeniería electrónica y experiencia en
                    mantenimiento técnico, enfocado en la creación de soluciones web robustas con Java, Spring Boot,
                    JavaScript y bases de datos SQL.
                </p>


                <div className="contactame-developer">
                    <h3> Contáctame </h3>
                    <div>
                        <div id="contactoTelyEmail">
                            <div className="contacto">
                                <img className="icon-contactame" srcSet="public\images\imgAbout\icono_telefono.svg"
                                    alt="icon telefono"/>
                                <h4>(+52)33-2750-6168</h4>
                            </div>
                            <div className="contacto">
                                <img className="icon-contactame" srcSet="public\images\imgAbout\icono_email.svg" alt="icon email"/>
                                <h4>gabrielalvarezp20@gmail.com</h4>
                            </div>
                        </div>

                        <div className="contacto">
                            <img className="icon-contactame" srcSet="public\images\imgAbout\icono_linkedn.svg" alt="icon linkedn"/>
                            <a
                                href="www.linkedin.com/in/jose-gabriel-alvarez-perez">www.linkedin.com/in/jose-gabriel-alvarez-perez</a>
                        </div>
                    </div>
                </div>

            </div>

            <div className="imagen_circular">
                <img srcSet="public\images\imgAbout\grabiel-alvarez-perez.png" alt="foto de developer"/>
            </div>
        </div>

        <div className ="container">
            <div className="lineasRectas-decoration">
                <img srcSet="public\images\imgAbout\grafico_lineas_rectas_izquierda.svg" alt="línea recta decorativa" />
            </div>
        </div>
        <div className="developerCards izquierda">
            <div className="imagen_circular">
                <img srcSet="public\images\imgAbout\cesar-daniel-godinez.png" alt="foto de developer"/>
            </div>

            <div id="info_developers">


                <div className="nombre_developers">
                    <img className="grafico-estrella-developers" srcSet="public\images\imgAbout\grafico_estrellas_derecho.svg"
                        alt="elemento estrella"/>
                    <h2 className="subtitulos_para_seccion">César Daniel Godínez Caudillo</h2>
                    <img className ="grafico-estrella-developers" src="public\images\imgAbout\grafico_estrellas_izquierdo.svg"
                        alt="elemento estrella"/>
                </div>

                <p className="parrafos">
                    Desarrollador full-stack con experiencia en desarrollo backend y frontend, bases de datos y análisis
                    de datos. Busco seguir desarrollándome como desarrollador o ingeniero de datos, contribuyendo al
                    éxito organizacional mediante soluciones eficientes y escalables.
                </p>


                <div className="contactame-developer">
                    <h3> Contáctame </h3>
                    <div>
                        <div id="contactoTelyEmail">
                            <div className="contacto">
                                <img className="icon-contactame" srcSet="public\images\imgAbout\icono_telefono.svg"
                                    alt="icon telefono"/>
                                <h4>(+52)392-928-7223</h4>
                            </div>
                            <div className="contacto">
                                <img className="icon-contactame" srcSet="public\images\imgAbout\icono_email.svg" alt="icon email"/>
                                <h4>cesardaniel826@gmail.com</h4>
                            </div>
                        </div>

                        <div className="contacto">
                            <img className="icon-contactame" srcSet="public\images\imgAbout\icono_linkedn.svg" alt="icon linkedn"/>
                            <a
                                href="www.linkedin.com/in/cesar-godinez-caudillo">www.linkedin.com/in/cesar-godinez-caudillo</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
        <div class="container">
            <div class="lineasRectas-decoration-derecha">
                <img src="public\images\imgAbout\grafico_lineas_rectas_derecha.svg" alt="línea recta decorativa" />
            </div>
        </div>
    </section>
  </div>
  );
}

export {About}