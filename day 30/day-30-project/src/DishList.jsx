import Dish from "./Dish";

function DishList({ dishes, onAdd }) {
  if (dishes.length === 0) {
    return <p>No dishes in this category yet.</p>;
  }

  return dishes.map(d => (
    <Dish
      key={d.id}
      {...d}
      onAdd={onAdd}
    />
  ));
}

export default DishList;