import { useNavigate, useLocation } from "react-router";
//***Custom hook*** es una funcion que usa hooks de react y encapsula logica para reutilizarla en varios componentes.

//en react router usa hooks como useNavigate o useLocation para navegar entre rutas, muchos mas sencillo que con useEffect...
export function useRouter() {
  // Hook de react-router para navegar entre rutas
  const navigate = useNavigate();
  // Hook de react-router para obtener la ubicacion actual
  const location = useLocation();

  // Funcion para navegar a una ruta especifica
  function navigateTo(path) {
    navigate(path);
  }

  // Retornamos la ruta actual y la funcion para navegar
  return { currentPath: location.pathname, navigateTo };
}
