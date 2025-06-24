# ✨ Patita Oriental ✨

### Deploy actual: https://patitaorientalmex.netlify.app

**Patita Oriental** es una tienda de comida coreana en Jalisco. Cada plato está diseñado con amor, creatividad y mucha onda coreana para que disfrutes una experiencia completa y deliciosa.

Este proyecto busca construir un **e-commerce atractivo e intuitivo** que permita a los usuarios explorar, seleccionar y comprar sus platillos favoritos de forma rápida y amigable desde cualquier dispositivo. La tienda combina lo mejor del diseño moderno con una estructura funcional basada en componentes reutilizables. Utilizando tecnologías modernas como **React**, **JavaScript**, **HTML**, **CSS** y **Bootstrap**. Este proyecto fue creado con el objetivo de brindar una interfaz limpia y amigable para usuarios que navegan por nuestras distintas secciones.

---

## 🚀 Tecnologías utilizadas

- ⚛️ **React** – Para la construcción de componentes reutilizables y navegación por rutas.
- 🧠 **JavaScript** – Lógica de la aplicación.
- 🎨 **HTML y CSS** – Estructura y estilos personalizados.
- 💠 **Bootstrap** – Estilos y diseño responsive de forma rápida.

---

## 🗂️ Estructura del proyecto

El proyecto está organizado de forma clara y modular para facilitar su mantenimiento y escalabilidad:

```plaintext
Patita-oriental/ 
├── public/ # Recursos estáticos accesibles globalmente
│ └── images/ # Imágenes utilizadas en el sitio (banners, íconos, etc.)
│
├── src/
│ ├── assets/ 
│ ├── components/ # Componentes reutilizables
│ │ ├── footer/ # Contiene Footer.jsx y Footer.css
│ │ ├── header/ # Contiene Header.jsx y Header.css
│ │ └── tarjeta_menu/ # Contiene TarjetaMenu.jsx y TarjetaMenu.css
│ │
│ ├── pages/ # Páginas principales, cada una con su JSX y CSS
│ │ ├── about/ # About.jsx + About.css
│ │ ├── carrito/ # Carrito.jsx + Carrito.css
│ │ ├── contact/ # Contact.jsx + Contact.css
│ │ ├── favoritos/ # Favoritos.jsx + Favoritos.css
│ │ ├── inicio/ # Inicio.jsx + Inicio.css
│ │ ├── inicioDeSesion/ # InicioDeSesion.jsx + InicioDeSesion.css
│ │ ├── menu/ # Menu.jsx + Menu.css
│ │ ├── menuTematico/ # MenuTematico.jsx + MenuTematico.css
│ │ ├── profile/ # Profile.jsx + Profile.css
│ │ └── registro/ # Registro.jsx + Registro.css
│ │
│ ├── App.jsx # Enrutamiento de todas las páginas
│ ├── App.css # Estilos globales del proyecto
│ ├── index.css # Estilos base del index.html
│ └── main.jsx # Punto de entrada de React
│
├── package.json # Dependencias y scripts del proyecto
└── README.md # Documentación del proyecto
```
---

## 🌐 Ruteo
El archivo App.jsx es el encargado de definir y administrar las rutas entre las diferentes páginas de la aplicación usando react-router-dom.

## ⚙️ Instalación y ejecución

1. Clona el repositorio:
```bash
git clone git@github.com:NancyMayek/PatitaOrientalWeb.git
```

2. Instala las dependencias:
```bash
npm install
```
3. Inicia el servidor de desarrollo:
```bash
npm run dev 
```

4. Abre tu navegador en:
```bash
http://localhost:5173/
```

### 🔄 Migración futura a Spring Boot

Una vez validadas las funcionalidades y flujo de usuario, la simulacion de LocalStorage de el backend actual será reemplazado por una implementación más robusta utilizando **Spring Boot**

## Desarrolladores
-	Desarrollador: Nancy Mayek Torres Aguilar
LinkedIn: www.linkedin.com/in/nancy-mayek-torres-aguilar
-	Desarrollador: América Yazmín Rodríguez Rodríguez
LinkedIn: www.linkedin.com/in/america-yazmin-rodriguez-rodriguez/
-Desarrollador: Abigail Alexandra Galvez Cortés
LinkedIn: www.linkedin.com/in/abigail-alexandra-galvez-cortés
-	Desarrollador: Francisco Javier Caldera Castro
LinkedIn: https://www.linkedin.com/in/francisco-javier-caldera/
-	Desarrollador: Cecilia Guadalupe Gutierrez Urbano
LinkedIn: www.linkedin.com/in/cecilia-guadalupe-gutierrez-urbano-09139255
-	Desarrollador: Shelder Tatiana Flores Du

