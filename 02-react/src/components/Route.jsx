// Componente Route.jsx
import { useRouter } from "../hooks/useRouter.jsx";

// Componente Route para manejar la navegación basada en rutas
// Recibe una ruta (path) y un componente (component) como props
// Utiliza el hook useRouter para obtener la ruta actual
// Si la ruta actual coincide con la ruta proporcionada, renderiza el componente correspondiente
export function Route({ path, component: Component }) {
  const { currentPath } = useRouter();
  if (currentPath !== path) return null;
  return <Component />;
}
