import gatitoLlamando from '../../../public/images/logo-patita-oriental/gatito-llamando.png';
import "./contact.css";

const Contact = () => {
  return (
    <>
      <section className="contact-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 alinear">
              <img
                src={gatitoLlamando}
                alt="Gatito llamando"
                className="img-fluid cat-img"
              />
              <h2 className="contact-title mb-3">¡Contáctanos!</h2>
              <div className="row row-1">
                <div className="line short white"></div>
                <div className="line medium white"></div>
                <div className="line extra-long white"></div>
              </div>
              <div className="row row-2">
                <div className="line long white"></div>
                <div className="line short white"></div>
                <div className="line space"></div>
                <div className="line long pink"></div>
              </div>
            </div>

            <div className="col-md-6">
              <form className="contact-form" id="contactForm">
                <h4 className="text-white mb-4 fw-bold mb-3 form-title">
                  Deja tu mensaje
                </h4>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label text-white fw-semibold">Nombre</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Ingresa tu nombre"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label text-white fw-semibold">Apellido</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Ingresa tu apellido"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label text-white fw-semibold">Correo electrónico</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="ejemplo@email.com"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label text-white fw-semibold">Teléfono</label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="(55) 1234 5678"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label text-white fw-semibold">Mensaje</label>
                  <textarea
                    className="form-control"
                    rows="3"
                    placeholder="Escribe tu mensaje"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-pink w-100 fw-bold">
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};


export { Contact };