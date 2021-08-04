import NavBar from "./components/header/NavBar";
import ItemListContainer from "./components/body/ItemListContainer";

function App() {
  return (
    <div>
      <NavBar />
      <h2 className="margenesContenido">Catálogo de Servicios</h2>
      <ItemListContainer/>
    </div>
  );
}

export default App;
