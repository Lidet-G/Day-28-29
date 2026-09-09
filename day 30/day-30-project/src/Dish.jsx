function Dish({ id, name, price, category, spicy, onAdd }) {
  const dish = {
    id,
    name,
    price,
    category,
    spicy
  };

  return (
    <div>
      <h3>{name}</h3>

      <p>{price} ETB</p>

      <p>{category}</p>

      {spicy && <p>Spicy</p>}

      <button onClick={() => onAdd(dish)}>
        Add to cart
      </button>
    </div>
  );
}

export default Dish;