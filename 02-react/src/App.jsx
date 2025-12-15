import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";

import { HomePage } from "./pages/Home.jsx";
import { SearchPage } from "./pages/Search.jsx";
import { Route } from "./components/Route.jsx";

// Componente principal de la aplicación
// Renderiza el encabezado, las rutas de las páginas y el pie de página
// Utiliza el componente Route para manejar la navegación entre HomePage y SearchPage
function App() {
  return (
    <>
      <Header />
      <Route path="/" component={HomePage} />
      <Route path="/search" component={SearchPage} />
      <Footer />
    </>
  );
}

export default App;
