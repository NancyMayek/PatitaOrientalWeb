import gatitoLlamando from '../../../public/images/logo-patita-oriental/gatito-llamando.png';
import "./contact.css";

const Contact = () => {
  return (
    <>
      <section class="contact-section">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-6 mb-4">
              <img
                src={gatitoLlamando}
                alt="Gatito llamando"
                class="img-fluid cat-img"
              />
              <h2 class="contact-title mb-3">¡Contáctanos!</h2>
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
                  Deja tu mensaje
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
                    type="tel"
                    class="form-control"
                    placeholder="Teléfono"
                  />
                </div>
                <div class="mb-3">
                  <textarea
                    class="form-control"
                    rows="3"
                    placeholder="Mensaje"
                  ></textarea>
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
};

export { Contact };
