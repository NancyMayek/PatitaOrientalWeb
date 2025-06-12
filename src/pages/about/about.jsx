import './about.css';
import React, { useState, useEffect } from 'react';


  const historyItems = [
    {
      image: "Platillo1.png",
      title: "Del antojo al emprendimiento, así nació Patita Oriental:",
      text: "La idea de este restaurante coreano en Jalisco surgió cuando Gabriel y sus roomies, amantes de la cocina coreana, decidieron compartir sus recetas favoritas con el mundo."
    },
    {
      image: "Platillo2.png",
      title: "Una página con mucho sabor:",
      text: "Aún sin página web, el equipo enfrentaba retos para conectar con más clientes. Nuestra solución fue crear un sitio accesible y directo al consumidor."
    },
    {
      image: "Platillo3.png",
      title: "Más que delivery: control total del pedido",
      text: "En plataformas como Uber Eats o Rappi, los precios subían demasiado. Por eso, la nueva página permitirá hacer pedidos con seguimiento personalizado y precios justos"
    },
    {
      image: "Platillo4.png",
      title: "Tecnología al servicio:",
      text: "Con esta web buscamos empoderar a Patita Oriental para que crezca digitalmente, evite comisiones elevadas y conecte mejor con su comunidad."
    }
  ];

  const developers = [
    {
    name: "Nancy Mayek Torres Aguilar",
    description: "Soy desarrolladora web con formación en Ingeniería en Ciencias de la Computación. Descubrí mi pasión por el desarrollo web muy temprano en mi carrera, y desde entonces me he dedicado a crear soluciones funcionales con un enfoque visual. Me motiva construir experiencias digitales que sean intuitivas, atractivas y eficientes.",
    phone: "(+52) 221-418-8737",
    email: "torresaguilarnancymayek@gmail.com",
    linkedin: "https://linkedin.com/in/nancy-mayek-torres-aguilar",
    image: "/images/imgAbout/Nancy_Mayek_Torres_Aguilar.png",
  },
  {
    name: "América Yazmín Rodríguez Rodríguez",
    description: "Soy desarrolladora web con formación en Ingeniería Industrial. Me apasiona crear soluciones web funcionales aplicando mi experiencia en mejora de procesos y pensamiento lógico. Me considero una persona adaptable, proactiva y orientada a resultados. Estoy en constante aprendizaje y motivada por desarrollar tecnología que genere un impacto real.",
    phone: "(+52) 331-791-1448",
    email: "amerodriguez@outlook.com",
    linkedin: "https://linkedin.com/in/america-yazmin-rodriguez-rodriguez",
    image: "/images/imgAbout/america-rodriguez-rodriguez.png",
  },
  {
    name: "Francisco Javier Caldera Castro",
    description: "Soy Ingeniero mecatrónico con experiencia en desarrollo web, apasionado por la tecnología y los nuevos retos que esta conlleva. Desde la preparatoria indagué en empresas y me fui orientando a la parte de ingeniería, por lo cual he estado muy de cerca aprendiendo y actualizándome hacia las necesidades del cliente.",
    phone: "(+52) 331-113-7876",
    email: "fcaldera@gmail.com",
    linkedin: "https://linkedin.com/in/francisco-javier-caldera",
    image: "/images/imgAbout/francisco-caldera.png",
  },
  {
    name: "Cecilia Guadalupe Gutierrez Urbano",
    description: "Soy Ingeniera en Tecnologías de la Información y Comunicaciones. Me apasiona el diseño de páginas web, y por eso decidí adentrarme más en el mundo del desarrollo web para entenderlo a profundidad. Me encanta explorar nuevas tecnologías y estoy motivada por seguir creciendo y desarrollándome profesionalmente en este campo.",
    phone: "(+52) 551-576-5737",
    email: "ceciliagutierrezurbano@gmail.com",
    linkedin: "https://linkedin.com/in/cecilia-guadalupe-gutierrez-urbano-09139255",
    image: "/images/imgAbout/cecilia-gutierrez.png",
  },
  {
    name: "Shelder Tatiana Flores Durán",
    description: "Soy desarrolladora web, con formación en Ingeniería Textil. Apasionada por la programación y el desarrollo web, con un enfoque en el stack tecnológico de Java. Me apasiona crear soluciones digitales integrando creatividad, funcionalidad y estructura.",
    phone: "56 13 29 89 23",
    email: "sheldertatiana12@gmail.com",
    linkedin: "https://www.linkedin.com/in/shelder-tatiana-flores-duran",
    image: "/images/imgAbout/shelder-tatiana.png",
  },
  {
    name: "Abigail Alexandra Galvez Cortés",
    description: "Soy desarrolladora web con formación en Ingeniería Petrolera. Me apasiona el diseño de páginas web y crear soluciones funcionales aplicando mis conocimientos y experiencia en optimización de procesos y pensamiento lógico-analítico. Considero que mi amor por el aprendizaje y la creatividad son herramientas clave en el sector tecnológico para crear proyectos de impacto.",
    phone: "+52 551-030-1572",
    email: "galvezabigail79@gmail.com",
    linkedin: "https://www.linkedin.com/in/abigail-alexandra-galvez-cortés",
    image: "/images/imgAbout/abigail-alexandra-galvez.jpg",
  },
  {
    name: "José Gabriel Álvarez Pérez",
    description: "Desarrollador FullStack Junior con formación en ingeniería electrónica y experiencia en mantenimiento técnico, enfocado en la creación de soluciones web robustas con Java, Spring Boot, JavaScript y bases de datos SQL.",
    phone: "+52 33-2750-6168",
    email: "gabrielalvarezp20@gmail.com",
    linkedin: "https://www.linkedin.com/in/jose-gabriel-alvarez-perez",
    image: "/images/imgAbout/grabiel-alvarez-perez.png",
  },
  {
    name: "César Daniel Godínez Caudillo",
    description: "Desarrollador full-stack con experiencia en desarrollo backend y frontend, bases de datos y análisis de datos. Busco seguir desarrollándome como desarrollador o ingeniero de datos, contribuyendo al éxito organizacional mediante soluciones eficientes y escalables.",
    phone: "(+52) 392-928-7223",
    email: "cesardaniel826@gmail.com",
    linkedin: "https://www.linkedin.com/in/cesar-godinez-caudillo",
    image: "/images/imgAbout/cesar-daniel-godinez.png",
  }
    ];

    const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Cambio automático cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % developers.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentDev = developers[activeIndex];

  return (
    <section className="about-section">

      {/* Sección Historia */}
      <div className="history-timeline">
        {historyItems.map((item, index) => (
          <div key={index} className="history-item">
            <div className={`history-content ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="history-text">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
              <div className="history-image">
                <img
                  src={`/images/imgAbout/${item.image}`}
                  alt={item.title}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Sección Carrusel Desarrolladores */}
<div className="carousel-section">
  <h2 className="carousel-title">Conoce a los desarrolladores</h2>

  <div className="carousel-wrapper">
   
    <button
      className="carousel-arrow left-arrow"
      onClick={() => setActiveIndex((prev) => (prev === 0 ? developers.length - 1 : prev - 1))}
      aria-label="Desarrollador anterior"
    >
      &#9664; {/* Flecha izquierda */}
    </button>

    <div className="carousel-container">
      <div className="carousel-card">
        <img src={currentDev.image} alt={currentDev.name} className="dev-image" />
        <h3>{currentDev.name}</h3>
        <p>{currentDev.description}</p>
        <p><strong>Correo:</strong> {currentDev.email}</p>
        <p><strong>Tel:</strong> {currentDev.phone}</p>
        <a 
  href={currentDev.linkedin} 
  target="_blank" 
  rel="noreferrer" 
  className="linkedin-link"
>
  LinkedIn
</a>

      </div>

      <div className="carousel-controls">
        {developers.map((_, index) => (
          <button
            key={index}
            className={index === activeIndex ? 'active-dot' : 'dot'}
            onClick={() => setActiveIndex(index)}
            aria-label={`Ver desarrollador ${index + 1}`}
          />
        ))}
      </div>
    </div>

    {/* Flecha derecha fuera del contenedor */}
    <button
      className="carousel-arrow right-arrow"
      onClick={() => setActiveIndex((prev) => (prev === developers.length - 1 ? 0 : prev + 1))}
      aria-label="Desarrollador siguiente"
    >
      &#9654; {/* Flecha derecha */}
    </button>
  </div>
</div>
    </section>
  );
};

export {About};