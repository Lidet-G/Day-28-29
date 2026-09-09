import { useContext, useMemo, useState } from "react";
import { useFetch } from "./hooks/useFetch";
import { CartContext } from "./cart/CartProvider";
import CategoryBar from "./CategoryBar";
import DishList from "./DishList";

function Menu() {
  const [category, setCategory] = useState("All");

  const {
    data,
    loading,
    error
  } = useFetch("/dishes.json", category);

  const { dispatch } = useContext(CartContext);

  const shown = useMemo(() => {
    return [...data].sort((a, b) => a.price - b.price);
  }, [data]);

  function addToCart(dish) {
    dispatch({
      type: "add",
      dish: dish
    });
  }

  if (loading) {
    return <p>Loading the menu...</p>;
  }

  if (error) {
    return <p className="err">{error}</p>;
  }

  return (
    <>
      <CategoryBar
        selected={category}
        onSelect={setCategory}
      />

      <DishList
        dishes={shown}
        onAdd={addToCart}
      />
    </>
  );
}

export default Menu;