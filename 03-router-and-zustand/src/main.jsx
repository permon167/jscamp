//Archivo principal de entrada de la aplicación React
//Importamos BrowserRouter para habilitar el enrutamiento basado en el navegador
import { BrowserRouter } from "react-router";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

//Renderizamos la aplicación de React en el elemento con id 'root'
//El componente principal de la aplicación es App
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
