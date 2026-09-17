interface CartProps {
  itemCount: number;
}

function Cart({ itemCount }: CartProps) {
  return (
    <div className="common">
      <h2>Shopping Cart</h2>

      <p>Items: {itemCount}</p>

      {itemCount > 0 && (
        <button>Checkout</button>
      )}
    </div>
  );
}

export default Cart;