import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { CartProvider } from "./cart/CartProvider";

import Layout from "./Layout";
import Menu from "./Menu";
import DishDetail from "./DishDetail";
import Cart from "./Cart";
import RequireAuth from "./auth/RequireAuth";
import SignIn from "./SignIn";

function Home() {
  return (
    <div>
      <h2>Welcome to Addis Eats</h2>
      <p>Find your favorite Ethiopian dishes.</p>
    </div>
  );
}

function NotFound() {
  return (
    <div>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    
  
    <Route path="menu" element={<Menu />} />
    
    <Route path="menu/:id" element={<DishDetail />} />
    
    <Route
      path="checkout"
      element={
        <RequireAuth>
          <Cart />
        </RequireAuth>
      }
    />
    <Route path="signin" element={<SignIn />} />
    <Route path="*" element={<NotFound />} />
  </Route>
</Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;