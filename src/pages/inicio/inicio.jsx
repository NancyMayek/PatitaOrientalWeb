import './inicio.css'
// import TarjetaMenu from "../../components/tarjeta_menu/tarjeta_menu";

const Inicio = () => {
    return(
        <div>
              {/* Sección Banner */}
      <section className="text-center p-5 banner-section d-flex align-items-left">
        <div className="banner-text p-4 d-flex flex-column align-items-start ">
          <h1 className="display-5 fw-bold mb-3">
            La <span style={{ color: "#425184" }}>mejor</span> comida <span style={{ color: "#d579af" }}>Coreana</span> en México
          </h1>
          <button className="btn btn-pink mt-3 align-self-center">Pedir ahora</button>
        </div>
      </section>
      <section class="decorative-lines">
        <div class="line-group">
          <span class="line short blue"></span>
          <span class="line medium blue"></span>
          <span class="line extra-long blue"></span>
        </div>
        <div class="line-group">
          <span class="line long blue"></span>
          <span class="line short blue"></span>
          <span class="line space"></span>
          <span class="line long pink"></span>
        </div>
      </section>

      {/* Sobre Nosotros */}  
      <section className="p-4 align-items-center container d-flex flex-column">
        <div className="container d-flex flex-column flex-md-row align-items-center about-section">
          <div className="logo-section mb-4 mb-md-0 me-md-5 text-center">
            <img src="./images/logo-patita-oriental/PatitaOriental_Azul_Completo.png" alt="Patita Oriental" style={{ maxWidth: "180px" }} />
          </div>
          <div>
            <div className="d-flex align-items-center justify-content-center gap-2 mb-3">
              <img src="./images/home-icons/star-icon-start.png" className="star-icon" alt="star-start" />
              <h2 className="fw-bold mb-0 text-center" style={{ color: "#d579af" }}>
                Sobre nosotros
              </h2>
              <img src="./images/home-icons/star-icon-end.png" className="star-icon" alt="star-end" />
            </div>
            <p>
              Somos tu tienda favorita de comida coreana en Jalisco. Cada plato está diseñado con amor, creatividad y mucha onda coreana para que disfrutes una experiencia completa y deliciosa. Ya sea que seas fan del kimchi, el tteokbokki, el bulgogi o simplemente quieras descubrir nuevos sabores, en nuestra tienda encontrarás un pedacito de Corea… ¡sin salir de México!
            </p>
          </div>
        </div>
      </section>

      {/* Ventajas */}
      <section className="p-4 text-center align-items-center container d-flex flex-column">

        <div className="d-flex align-items-center justify-content-center gap-2 mb-4">
          <img src="./images/home-icons/star-icon-start.png" className="star-icon" alt="star-start" />
          <h3 className="fw-bold mb-0 text-center">
            Solo la mejor calidad
          </h3>
          <img src="./images/home-icons/star-icon-end.png" className="star-icon" alt="star-end" />
        </div>
        <div className="row advantages-section text-white align-items-center">
          <div className="col-md-3">
            <i><img src="./images/home-icons/canasta-icon.png" className="icon"/></i>
            <p>Ingredientes frescos</p>
          </div>
          <div className="col-md-3">
            <i ><img src="./images/home-icons/price-icon.png" className="icon"/></i>
            <p>Los mejores precios</p>
          </div>
          <div className="col-md-3">
            <i ><img src="./images/home-icons/sarten-icon.png" className="icon"/></i>
            <p>Todo se cocina al instante</p>
          </div>
          <div className="col-md-3">
            <i ><img src="./images/home-icons/car-icon.png" className="icon"/></i>
            <p>Te lo dejamos hasta tu puerta</p>
          </div>
        </div>
      </section>

      {/* Platillos Más Vendidos */}
      <section className="p-4" >
        <div className="container container d-flex flex-column align-items-center">
          <h3 className="mb-4 fw-bold">Platillos más vendidos</h3>
          <div className="row">
            <div className="col-md-6 mb-4">
              {/* <TarjetaMenu /> */}
            </div>
            <div className="col-md-6 mb-4">
              {/* <TarjetaMenu /> */}
            </div>
          </div>
        </div>
      </section>

      {/* Sección Temática */}


      <section className="text-center p-5 tematica-section mb-5 d-flex align-items-center">
        <div className="tematica-text p-4 d-flex flex-column align-items-end">
            <h3 className="display-6 fw-bold mb-3">
                Descubre nuestros <span style={{ color: "#425184" }}>Platillos <span style={{ color: "#d579af" }}>Temáticos</span></span>
            </h3>
        </div>
      </section>
        </div>
    );
}

export {Inicio}