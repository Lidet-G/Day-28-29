import Menu from "./Menu";
import Cart from "./Cart";
import { CartProvider } from "./cart/CartProvider";

function App() {
  return (
    <CartProvider>
      <div>
        <h1>Addis Eats</h1>

        <Menu />

        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;