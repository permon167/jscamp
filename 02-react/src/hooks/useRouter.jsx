import { useEffect, useState } from "react";

//***Custom hook*** es una funcion que usa hooks de react y encapsula logica para reutilizarla en varios componentes
// Hook useRouter para manejar la navegación basada en rutas
// Proporciona la ruta actual y una función para navegar a una nueva ruta
// Utiliza useState para almacenar la ruta actual y useEffect para escuchar cambios en la historia del navegador
export function useRouter() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handleLocationChange);
    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);

  // Función para navegar a una nueva ruta
  // Actualiza la URL y dispara un evento popstate para notificar el cambio de ruta
  function navigateTo(path) {
    window.history.pushState({}, "", path);
    window.dispatchEvent(new PopStateEvent("popstate"));
  }

  return { currentPath, navigateTo };
}
