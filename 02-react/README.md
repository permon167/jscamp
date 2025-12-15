# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Desplegar proyecto

Iniciamos con terminal: desde la raiz del proyecto "npm run dev".

## Explicación despliegue de la App:

El archivo html: _index.html_ carga el archivo raiz (main.jsx) de la aplicación React

El archivo raiz es el _main.jsx_ en el cual importamos el App.jsx, index.css. Con el createRoot hacemos un render de la App.

El componente principal de la aplicacion: _App.jsx_ donde importamos y renderizamos todos los componentes que forman la App:

- Header
- Route: navegacion entre rutas
- Footer

Dentro de los archivos react ".jxs" escribimos primero en JavaScript y despues en una especie de HTML dentro del mismo fichero.

# Estructura del proyecto

## Sistema de rutas

_Route.jsx_ es el componente para manejar la navegacion basada en rutas, utiliza el hook useRouter para obtener la ruta actual.

_useRouter.jsx_ aqui creamos el custom hook que encapsula la logica para reutilizar en varios componentes:

- useState: para almacenar la ruta actual
- useEffect: para escuchar cambios en el historial del navegador

## Separacion en Componentes

- _Header.jsx_
- _SearchFormSection.jsx_
- _JobListings.jsx_
- _JobCard.jsx_
- _Footer.jsx_
- _Link.jsx_
- _Route.jsx_
- _Pagination.jsx_

## Paginas

- _404.jsx_
- _Home.jsx_
- _Search.jsx_

## custom Hooks

- _useRouter.jsx_

## Modulación con CSS

Tengo un archivo _Pagination.jsx_ para la paginacion de la web, pero hago un modulo css para diferenciar los estilos que uso para esta clase (Paginacion) del resto de estilos de la web del _index.css_

---

# Componentes de la App

## Header.jsx

Componente que renderiza el encabezado de la aplicación con el logo "DevJobs" y una navegación con enlace a la sección de empleos. Utiliza el componente _Link_ personalizado para manejar la navegación sin recargar la página.

## Link.jsx

Componente wrapper de <a> que intercepta clics para usar el router personalizado (useRouter) en lugar de la navegación estándar del navegador, permitiendo navegación sin recarga de página mediante _navigateTo()_ del custom hook useRouter.

## SearchFormSection.jsx

Componente que renderiza un formulario de búsqueda de empleos con barra de búsqueda por texto (con debounce de 500ms), filtros por tecnología, ubicación y nivel de experiencia, y botón para limpiar el input.
Utiliza el hook personalizado _useSearchForm_ para manejar cambios de formulario, ejecuta onTextFilter() para búsqueda por texto y onSearch() para filtros. Soporta un initialText para pre-rellenar la búsqueda.

## JobCard.jsx

Componente que renderiza una tarjeta individual de un empleo con título, empresa, ubicación y descripción.
Tiene un botón "Aplicar" que cambia a "Aplicado" al clickearlo mediante estado local, y utiliza data attributes (modalidad, tecnologia, nivel) para filtrado CSS.

## JobListings.jsx

Componente que renderiza una lista de empleos iterando sobre un array de jobs y creando un JobCard para cada uno. Muestra un mensaje cuando no hay empleos que coincidan con la búsqueda.

## Pagination.jsx

Componente React que renderiza controles de paginación.
Genera un array de números de página, permite navegar mediante botones "anterior/siguiente" y números clickeables, y maneja la desactivación de botones en la primera y última página.
Utiliza URLs con parámetros de query (?page=X) para reflejar el estado actual y ejecuta callbacks onPageChange cuando el usuario cambia de página.

## Footer.jsx

Contiene el pie de pagina de la web

# Paginas de la App

- Home.jsx: Página de inicio que renderiza un hero section con imagen de fondo, formulario de búsqueda rápida que navega a /search con el término ingresado, y una sección informativa sobre las ventajas de DevJobs con iconos y descripciones.

- Search.jsx: Página de búsqueda con hook personalizado _useFilters_ que gestiona filtros (tecnología, ubicación, nivel), búsqueda por texto, paginación y sincronización con URL. Fetch a datos de una API externa, renderiza el formulario de búsqueda, lista de empleos y paginación.

- 404.jsx: Página de error 404 (presumiblemente) que se muestra cuando el usuario intenta acceder a una ruta que no existe.
