# MyPortfolio

Sitio web de portafolio personal construido con Vue 3, TypeScript, Tailwind CSS y Vite. Este proyecto muestra mis habilidades, experiencia, proyectos, e incluye un formulario de contacto para facilitar la comunicación.

🔗 **Repositorio:** [https://github.com/dian7875/MyPortfolio.git](https://github.com/dian7875/MyPortfolio.git)  
🌐 **Sitio en producción:** [https://aboutme-six-omega.vercel.app](https://aboutme-six-omega.vercel.app)

## Características

- Diseño responsivo con alternancia de modo oscuro
- Muestra de proyectos, habilidades, educación y experiencia
- Formulario de contacto integrado con EmailJS para enviar mensajes
- Navegación fluida usando Vue Router
- Notificaciones tipo toast para retroalimentación del usuario

## Tecnologías Utilizadas

- [Vue 3](https://vuejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vue Router](https://router.vuejs.org/)
- [EmailJS](https://www.emailjs.com/)
- [Vue Icons](https://github.com/kalimahapps/vue-icons)
- [Vue Hot Toast](https://github.com/steveyuowo/vue-hot-toast)

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/dian7875/MyPortfolio.git
   cd MyPortfolio
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

## Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto y agrega las siguientes variables requeridas por EmailJS:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Puedes obtener estas claves desde tu cuenta en [EmailJS](https://www.emailjs.com/).

> ⚠️ **No compartas tus claves en público ni las subas al repositorio.**

## Desarrollo

Inicia el servidor de desarrollo con recarga en caliente:

```bash
npm run dev
```

Abre tu navegador y navega a la URL que se muestra en la terminal (usualmente http://localhost:5173).

## Compilación

Compila el proyecto para producción:

```bash
npm run build
```

## Vista previa de producción

Previsualiza localmente la versión de producción:

```bash
npm run preview
```

## Estructura del Proyecto

```
MyPortfolio/
├── public/                  # Archivos estáticos (imágenes, PDF del CV, íconos)
│   ├── Adrian_AguilarCV.pdf
│   ├── icon.png
│   └── ...
├── src/
│   ├── assets/              # Imágenes y otros recursos usados en componentes
│   ├── components/          # Componentes Vue (ProjectCard, ContactForm, ThemeToggle, etc.)
│   ├── router/              # Configuración de Vue Router
│   ├── views/               # Vistas de páginas (Portfolio, AboutMe, Experience, etc.)
│   ├── App.vue              # Componente raíz de Vue
│   └── main.ts              # Punto de entrada de la aplicación
├── index.html               # Archivo HTML principal
├── package.json             # Metadatos del proyecto y scripts
├── vite.config.ts           # Configuración de Vite con plugins de Vue y Tailwind
└── README.md                # Este archivo
```

## Autor

Adrian Aguilar  
Puedes encontrar mi CV en la carpeta `public`: [Adrian_AguilarCV.pdf](public/Adrian_AguilarCV.pdf)

## Licencia

Este proyecto es privado y no está licenciado para uso público.
