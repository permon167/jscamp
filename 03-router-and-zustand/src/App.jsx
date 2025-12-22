import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
const HomePage = lazy(() => import("./pages/Home.jsx"));
const SearchPage = lazy(() => import("./pages/Search.jsx"));
const NotFoundPage = lazy(() => import("./pages/404.jsx"));
const JobDetail = lazy(() => import("./pages/Details.jsx"));
/* Componente principal de la aplicación
Renderiza el encabezado, las rutas de las páginas y el pie de página
Utiliza el componente Route para manejar la navegación entre HomePage y SearchPage */
function App() {
  return (
    <>
      <Header />
      {/* Manejo de rutas con Suspense para carga diferida en caso de conexiones
      lentas */}
      <Suspense
        fallback={
          <div
            style={{ maxWidth: "1280px", margin: "0 auto", padding: "0.1rem" }}
          >
            Cargando...
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          //pagina de detalles del trabajo
          <Route path="/jobs/:jobId" element={<JobDetail />} />
          //ruta por defecto para páginas no encontradas
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
