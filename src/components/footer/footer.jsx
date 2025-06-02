import patitaLogo from '../../../public/images/logo-patita-oriental/PatitaOriental_Negro_Horizontal.png'
import instagramLogo from '../../../public/images/iconos/icons8-instagram-50.png'
import whatsappLogo from '../../../public/images/iconos/icons8-whatsapp-50.png'
import facebookLogo from '../../../public/images/iconos/icons8-facebook-nuevo-50.png'
import './Footer.css';

const Footer = () => {
  return (
    <footer className="patita-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <img src={patitaLogo} alt="Logo Patita Oriental" id="logo-footer" />
        </div>
        <div className="footer-legal">
          <p>Términos y condiciones</p>
          <p className="copyright">© {new Date().getFullYear()} Patita Oriental. Todos los derechos reservados.</p>
        </div>
        <div className="logo-content">
          <a href="https://wa.me/tu-numero" target="_blank" rel="noopener noreferrer">
            <img className="logo-social-media" src={whatsappLogo} alt="WhatsApp" />
          </a>
          <a href="https://www.instagram.com/patitaoriental/" target="_blank" rel="noopener noreferrer">
            <img className="logo-social-media" src={instagramLogo} alt="Instagram" />
          </a>
          <a href="https://www.facebook.com/PatitaOriental?locale=es_LA" target="_blank" rel="noopener noreferrer">
            <img className="logo-social-media" src={facebookLogo} alt="Facebook" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;