# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Desplegar proyecto

Iniciamos con terminal: desde la raiz del proyecto "npm run dev".

## Explicación del funcionamiento:

El archivo raiz es el _main.jsx_ en el cual importamos el App.jsx, index.css. Con el createRoot hacemos un render de la App.

En _App.jsx_ importamos todas las secciones que forman la App y el json que contiene los datos.

Dentro de los archivos react ".jxs" escribimos primero en JavaScript y despues en HTML dentro del mismo fichero.

## Modulación con CSS

Tengo un archivo _Pagination.jsx_ para la paginacion de la web, pero hago un modulo css para diferenciar los estilos que uso para esta clase (Paginacion) del resto de estilos de la web del index.css
