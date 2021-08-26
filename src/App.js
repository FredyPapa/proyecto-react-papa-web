import BodyContainer from "./components/BodyContainer/BodyContainer";
import FooterContainer from "./components/FooterContainer/FooterContainer";
import { CartProvider } from "./context/CartContext";


function App() {
  return (
    <CartProvider>
      <div>
        <BodyContainer/>
        <FooterContainer/>
      </div>
    </CartProvider>
  );
}

export default App;
