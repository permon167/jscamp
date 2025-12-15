//Importamos las dependencias necesarias y modulos de la aplicación
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

//Renderizamos la aplicación de React en el elemento con id 'root'
//Usamos StrictMode para ayudar a identificar problemas potenciales en la aplicación
//El componente principal de la aplicación es App
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
