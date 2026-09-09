import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <header>
        <h1>Addis Eats</h1>

        <nav>
          <Link to="/">Home</Link>{" "}
          <Link to="/menu">Menu</Link>{" "}
          <Link to="/checkout">Checkout</Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>Addis Eats</p>
      </footer>
    </div>
  );
}

export default Layout;