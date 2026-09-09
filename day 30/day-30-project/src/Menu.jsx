import {
  useContext,
  useMemo
} from "react";

import {
  useSearchParams
} from "react-router-dom";

import { useFetch } from "./hooks/useFetch";
import { CartContext } from "./cart/CartProvider";

import CategoryBar from "./CategoryBar";
import DishList from "./DishList";

function Menu() {
  const [searchParams, setSearchParams] =
    useSearchParams();

  const category =
    searchParams.get("category") || "All";

  const {
    data,
    loading,
    error
  } = useFetch(category);

  const { dispatch } = useContext(CartContext);

  const shown = useMemo(() => {
    return [...data].sort(
      (a, b) => a.price - b.price
    );
  }, [data]);

  function selectCategory(category) {
    if (category === "All") {
      setSearchParams({});
    } else {
      setSearchParams({
        category: category
      });
    }
  }

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
    return <p>{error}</p>;
  }

  return (
    <>
      <h2>Menu</h2>

      <CategoryBar
        selected={category}
        onSelect={selectCategory}
      />

      <DishList
        dishes={shown}
        onAdd={addToCart}
      />
    </>
  );
}

export default Menu;