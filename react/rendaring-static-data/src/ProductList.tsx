const products = [
  {
    id: 1,
    name: 'Laptop',
    price: 85000,
    category: 'Electronics',
    inStock: true
  },
  {
    id: 2,
    name: 'Smartphone',
    price: 35000,
    category: 'Electronics',
    inStock: true
  },
  {
    id: 3,
    name: 'Headphones',
    price: 4500,
    category: 'Accessories',
    inStock: false
  },
  {
    id: 4,
    name: 'Mechanical Keyboard',
    price: 6500,
    category: 'Accessories',
    inStock: true
  },
  {
    id: 5,
    name: 'Gaming Mouse',
    price: 2800,
    category: 'Accessories',
    inStock: true
  },
  {
    id: 6,
    name: 'Monitor',
    price: 22000,
    category: 'Electronics',
    inStock: false
  },
  {
    id: 7,
    name: 'Webcam',
    price: 5500,
    category: 'Accessories',
    inStock: true
  },
  {
    id: 8,
    name: 'USB Hub',
    price: 1800,
    category: 'Accessories',
    inStock: true
  },
  {
    id: 9,
    name: 'External SSD',
    price: 9500,
    category: 'Storage',
    inStock: false
  },
  {
    id: 10,
    name: 'Power Bank',
    price: 3200,
    category: 'Gadgets',
    inStock: true
  },
  {
    id: 11,
    name: 'Smart Watch',
    price: 7500,
    category: 'Gadgets',
    inStock: true
  },
  {
    id: 12,
    name: 'Bluetooth Speaker',
    price: 4200,
    category: 'Gadgets',
    inStock: false
  },
  {
    id: 13,
    name: 'Tablet',
    price: 28000,
    category: 'Electronics',
    inStock: true
  },
  {
    id: 14,
    name: 'Printer',
    price: 14500,
    category: 'Office',
    inStock: false
  },
  {
    id: 15,
    name: 'Desk Lamp',
    price: 2200,
    category: 'Office',
    inStock: true
  },
  {
    id: 16,
    name: 'Office Chair',
    price: 12500,
    category: 'Furniture',
    inStock: true
  },
  {
    id: 17,
    name: 'Laptop Stand',
    price: 3500,
    category: 'Accessories',
    inStock: false
  },
  {
    id: 18,
    name: 'Microphone',
    price: 6800,
    category: 'Audio',
    inStock: true
  },
  {
    id: 19,
    name: 'Gaming Controller',
    price: 4800,
    category: 'Gaming',
    inStock: true
  },
  {
    id: 20,
    name: 'WiFi Router',
    price: 5200,
    category: 'Networking',
    inStock: false
  }
]

export default function ProductList(){

    const listItem = products.map(product =>(
        <div key = {product.id}>

            <strong>Name : {product.name}</strong><br/>

            <strong className={product.price > 2500 ? "expensive" : "affordable"}>
              Price : {product.price}
            </strong>

            <h2>Category : {product.category}</h2>

            <span  className={product.inStock ? 'available' : 'out-of-stock'}>
                {product.inStock ? 'Available' : ' Out of Stock'}
            </span>

        </div>
    )

    )

    return(
        <div className="product-list">
            {listItem}
        </div>
    )
}