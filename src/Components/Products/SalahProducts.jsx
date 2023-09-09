import { useState, useEffect } from 'react';

function Item({ item, onIncrement, onDecrement }) {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
    
    onIncrement(item.price);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
      onDecrement(item.price);
    }
  };

  return (
    <div className="item d-flex justify-content-between border">
     <div className="col-3">
     <img src={item.image} alt={item.title} />
     </div>
     <div className="col-3">
     <h1>{item.title}</h1>
      <p>{item.price}</p>
     </div>
     <div className="col-33">
     <div className="counter">
        <button onClick={handleDecrement}>-</button>
        <span>{count}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
     </div>
    <div className="col-3">
    <h5>Result: {count * item.price}</h5>
    </div>
    </div>
  );
}

function ItemsList() {
  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetch('https://virtserver.swaggerhub.com/ASMAAHAFEZ076_1/Final_Farm/1.0.0/api/Crops/Field/:id')
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => console.error(error));
  }, []);

  const handleIncrement = price => {
    setTotalPrice(totalPrice + price);
  };

  const handleDecrement = price => {
    setTotalPrice(totalPrice - price);
  };

  return (
    <div>
        <div className="d-flex justify-content-between px-5 py-3">
            <h1>Products</h1>
            <div className="total">
        <h2>Total: {totalPrice}</h2>
      </div>
        </div>
      {items.map(item => (
        <Item
          key={item.id}
          item={item}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      ))}
     
    </div>
  );
}

export default ItemsList;