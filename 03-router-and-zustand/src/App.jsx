import { Routes, Route } from "react-router";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";

import { HomePage } from "./pages/Home.jsx";
import { SearchPage } from "./pages/Search.jsx";
import { NotFoundPage } from "./pages/404.jsx";
import { JobDetail } from "./pages/Details.jsx";
// Componente principal de la aplicación
// Renderiza el encabezado, las rutas de las páginas y el pie de página
// Utiliza el componente Route para manejar la navegación entre HomePage y SearchPage
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        //pagina de detalles del trabajo
        <Route path="/jobs/:jobId" element={<JobDetail />} />
        //ruta por defecto para páginas no encontradas
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
