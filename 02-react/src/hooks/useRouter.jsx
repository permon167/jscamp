import { useEffect, useState } from "react";

//***Custom hook*** es una funcion que usa hooks de react y encapsula logica para reutilizarla en varios componentes
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

  function navigateTo(path) {
    window.history.pushState({}, "", path);
    window.dispatchEvent(new PopStateEvent("popstate"));
  }

  return { currentPath, navigateTo };
}
