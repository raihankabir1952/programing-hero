const products = [
  { name: 'Laptop', price: 80000, inStock: true, id: 1 },
  { name: 'Phone', price: 30000, inStock: false, id: 2 },
  { name: 'Keyboard', price: 2500, inStock: true, id: 3 },
  { name: 'Mouse', price: 1500, inStock: false, id: 4 }
]

export default function ProductList() {

  const listItems = products.map(product => (
    <div
      key={product.id}
      className={product.inStock ? 'available' : 'out-of-stock'}
    >
      <b>{product.name}</b>

      <span> - ৳{product.price}</span>

      <span>
        {product.inStock ? ' (Available)' : ' (Out of Stock)'}
      </span>
    </div>
  ))

  return (
    <div className="product-list">
      {listItems}
    </div>
  )
}